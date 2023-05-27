const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML =
      '<img src="/assets/icon-menu.svg" alt="bars" />';
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML =
      '<img src="/assets/icon-close.svg" alt="close" />';
  }
}

toggle.addEventListener("click", toggleMenu, false);
