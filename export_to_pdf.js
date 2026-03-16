
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
    <div class="footer-bold-title">watsonx Code Assistant Level 4: Lab Guide</div>
    <div>Course materials may not be reproduced in whole or in part without the prior written permission of IBM.</div>
  </div>
</div>`;

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.CHROME_BIN || null,
      args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.pdf({
      path: TEMP_PDF,
      format: 'A4',
      displayHeaderFooter: true,
      printBackground: true,
      landscape: false,
      headerTemplate: headerHtml,
      footerTemplate: footerHtml,
      scale: 0.8,
      margin: {
        top: 80,
        bottom: 80,
        left: 30,
        right: 30
      }
    });

    await browser.close();

    const A4_WIDTH = 595.28;
    const A4_HEIGHT = 841.89;
    const MARGIN_LEFT = 30;
    const MARGIN_RIGHT = 30;
    const MARGIN_TOP = 80;
    const MARGIN_BOTTOM = 80;
    const USABLE_WIDTH = A4_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;
    const USABLE_HEIGHT = A4_HEIGHT - MARGIN_TOP - MARGIN_BOTTOM;

    const mergedPdf = await PDFDocument.create();

    const embedAndDraw = async (pdfPath) => {
      const srcDoc = await PDFDocument.load(fs.readFileSync(pdfPath));
      const embedded = await mergedPdf.embedPage(srcDoc.getPages()[0]);
      const { width, height } = embedded;
      const scale = Math.min(USABLE_WIDTH / width, USABLE_HEIGHT / height);
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
