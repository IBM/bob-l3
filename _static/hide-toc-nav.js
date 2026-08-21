// Hides the Table of Contents (toc.md) file from the live website render
// Table of Contents will still remain printable for the PDF generation.
document.addEventListener("DOMContentLoaded", function () {
  const tocLink = Array.from(document.querySelectorAll(".md-nav__link"))
    .find(link => link.href && link.href.endsWith("/toc/") || link.href.endsWith("/toc.html"));

  if (tocLink) {
    const listItem = tocLink.closest("li.md-nav__item");
    if (listItem) {
      listItem.style.display = "none";
    }
  }
});