// Requires: npm install puppeteer pdf-lib

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const args = process.argv.slice(2);
const url = args[0];
const finalPdfPath = args[1];
const title = args[2];
const coverPdfPath = args[3];  // Cover page
const legalPdfPath = args[4];  // Legal notice page
const logoPdfPath = args[5];   // Logo final page

if (!url || !finalPdfPath) {
  console.error('Usage: node export_to_pdf.js <url> <output.pdf> [title] [cover.pdf] [legal.pdf] [logo.pdf]');
  process.exit(1);
}

const TEMP_PDF = path.join(__dirname, 'temp_body.pdf');

// Header (invisible)
const headerHtml = `
<style>
  .invisible-header {
    font-size: 0;
    color: transparent;
    height: 1px;
  }
</style>
<div class="invisible-header"></div>`;

// Footer
const footerHtml = `
<style>
  .custom-footer {
    width: 100%;
    font-size: 8px;
    color: #666;
    padding-top: 5px;
    /* border-top removed */
    position: relative;
  }
  .footer-center {
    text-align: center;
  }
  .footer-page-number {
    position: absolute;
    right: 30px;
    top: 5px;
    font-size: 8px;
    color: #666;
  }
  .footer-bold-title {
    font-weight: bold;
  }
</style>

<div class="custom-footer">
  <div class="footer-page-number">
    <span class="pageNumber"></span>
  </div>
  <div class="footer-center">
    <div class="footer-bold-title">Climbing the AI Maturity Curve with IBM Bob Level 3</div>
    <div>Course materials may not be reproduced in whole or in part without the prior written permission of IBM.</div>
  </div>
</div>`;

// ---------------------------------------------------------------------------
// Print-polish stylesheet, injected only at PDF-generation time.
// Tune the two knobs below to taste:
//   --pdf-img-max-height : cap on screenshot height (smaller = fewer pushed-
//                          image gaps, at the cost of smaller screenshots)
//   hr margin            : vertical space around the `---` step separators
// ---------------------------------------------------------------------------
const printPolishCss = `
  /* -- Pagination: chapters start fresh pages; sections flow continuously -- */
  #print-site-page h1 { break-before: page; page-break-before: always; }
  #print-site-page h2 { break-before: auto !important; page-break-before: auto !important; }

  /* Never leave a heading orphaned at the bottom of a page */
  h1, h2, h3, h4, h5 { break-after: avoid-page; page-break-after: avoid; }

  /* -- Vertical rhythm: tighten the biggest repeat offenders -- */
  #print-site-page hr { margin: 0.5em 0 !important; }
  .md-typeset p  { margin: 0.5em 0; orphans: 3; widows: 3; }
  .md-typeset h1 { margin: 0 0 0.8em; }
  .md-typeset h2 { margin: 1.1em 0 0.55em; }
  .md-typeset h3, .md-typeset h4 { margin: 0.9em 0 0.45em; }
  .md-typeset ol li, .md-typeset ul li { margin-bottom: 0.45em; }
  .md-typeset pre { margin: 0.6em 0; }
  .md-typeset table { margin: 0.6em 0; }

  /* -- Screenshots: keep aspect ratio, cap height, never split, slim margins -- */
  :root { --pdf-img-max-height: 480px; }
  .md-typeset img {
    max-width: 100% !important;
    max-height: var(--pdf-img-max-height);
    width: auto;
    height: auto;
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .md-typeset p[align] {
    margin: 0.35em 0;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* -- Admonitions: compact, whole where small, titles never orphaned -- */
  .md-typeset .admonition, .md-typeset details { margin: 0.8em 0; }
  .md-typeset .admonition { break-inside: avoid; page-break-inside: avoid; }
  .md-typeset .admonition-title, .md-typeset summary {
    break-after: avoid-page; page-break-after: avoid;
  }
  /* (details/collapsibles are left free to break — some are pages long) */
`;

// Scroll the whole document once so every lazily-initialized image and
// script has actually rendered before we print.
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const distance = 800;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        total += distance;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 40);
    });
  });
}

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.CHROME_BIN || null,
      protocolTimeout: 600000, // large combined page: give the CDP room
      args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1240, height: 1024 });
    page.setDefaultNavigationTimeout(180000);

    await page.goto(url, { waitUntil: 'networkidle2' });

    // Render under the same media the PDF will use, then force everything
    // (images, fonts) to actually load before printing.
    await page.emulateMediaType('print');
    await page.addStyleTag({ content: printPolishCss });
    await autoScroll(page);
    await page.evaluateHandle('document.fonts.ready');
    await new Promise((r) => setTimeout(r, 1000));

    const pdfOptions = {
      path: TEMP_PDF,
      format: 'A4',
      displayHeaderFooter: true,
      printBackground: true,
      landscape: false,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      scale: 0.8,
      timeout: 0,
      outline: true, // PDF bookmarks panel generated from the headings
      margin: {
        top: 50,     // header is invisible — reclaim some page height
        bottom: 80,  // unchanged: room for the footer + page number
        left: 30,
        right: 30
      }
    };

    try {
      await page.pdf(pdfOptions);
    } catch (e) {
      // Older Puppeteer/Chromium builds reject `outline` — retry without it.
      console.warn('page.pdf with outline failed, retrying without:', e.message);
      delete pdfOptions.outline;
      await page.pdf(pdfOptions);
    }

    await browser.close();

    const A4_WIDTH = 595.28;
    const A4_HEIGHT = 841.89;

    const mergedPdf = await PDFDocument.create();

    // Cover / legal / logo pages are standalone full-page designs — draw them
    // full-bleed (edge to edge) rather than letterboxed inside the margins.
    const embedAndDraw = async (pdfPath) => {
      const srcDoc = await PDFDocument.load(fs.readFileSync(pdfPath));
      const embedded = await mergedPdf.embedPage(srcDoc.getPages()[0]);
      const { width, height } = embedded;
      const scale = Math.min(A4_WIDTH / width, A4_HEIGHT / height);
      const scaledWidth = width * scale;
      const scaledHeight = height * scale;
      const page = mergedPdf.addPage([A4_WIDTH, A4_HEIGHT]);
      page.drawPage(embedded, {
        x: (A4_WIDTH - scaledWidth) / 2,
        y: (A4_HEIGHT - scaledHeight) / 2,
        xScale: scale,
        yScale: scale
      });
    };

    if (coverPdfPath) await embedAndDraw(coverPdfPath);
    if (legalPdfPath) await embedAndDraw(legalPdfPath);

    const bodyPdf = await PDFDocument.load(fs.readFileSync(TEMP_PDF));
    const bodyPages = await mergedPdf.copyPages(bodyPdf, bodyPdf.getPageIndices());
    bodyPages.forEach(p => mergedPdf.addPage(p));

    if (logoPdfPath) await embedAndDraw(logoPdfPath);

    const finalBytes = await mergedPdf.save();
    fs.writeFileSync(finalPdfPath, finalBytes);
    console.log(`Final PDF created at ${finalPdfPath}`);
  } catch (err) {
    console.error('Error generating PDF:', err.message);
  } finally {
    if (fs.existsSync(TEMP_PDF)) {
      fs.unlinkSync(TEMP_PDF);
    }
  }
})();