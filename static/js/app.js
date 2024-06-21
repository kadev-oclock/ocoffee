function initMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      burger.classList.toggle("active");
    });

    // Fermer le menu burger lorsqu'un lien est cliqué
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("active");
      });
    });
    // 404 page
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });
  // scripts.js
}
initMenu();
