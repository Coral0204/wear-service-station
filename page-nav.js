const pageNavToggle = document.querySelector(".nav-toggle");
const pageNav = document.querySelector(".main-nav");

pageNavToggle.addEventListener("click", () => {
  const opened = pageNav.classList.toggle("is-open");
  pageNavToggle.setAttribute("aria-expanded", String(opened));
});

pageNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  pageNav.classList.remove("is-open");
  pageNavToggle.setAttribute("aria-expanded", "false");
}));
