document.addEventListener("DOMContentLoaded", () => {

  const header = document.querySelector("header");
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");

  // scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // burger click
  burger?.addEventListener("click", () => {
    mobileNav?.classList.toggle("open");
  });

  // resize reset
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      mobileNav?.classList.remove("open");
    }
  });

});