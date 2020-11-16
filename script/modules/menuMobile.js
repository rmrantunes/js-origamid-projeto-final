import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuBtn.classList.add("active");
    menuList.classList.add("active");
    menuBtn.setAttribute("aria-expanded", "true");
    outsideClick(menuList, eventos, () => {
      menuBtn.classList.remove("active");
      menuList.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  }

  if (menuBtn) {
    eventos.forEach((userEvent) => {
      menuBtn.addEventListener(userEvent, openMenu);
    });
  }
}
