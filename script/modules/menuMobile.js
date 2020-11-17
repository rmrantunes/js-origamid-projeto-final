import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
  }

  openMenu() {
    this.menuBtn.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    this.menuBtn.setAttribute("aria-expanded", "true");
    outsideClick(this.menuList, this.events, () => {
      this.menuBtn.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
      this.menuBtn.setAttribute("aria-expanded", "false");
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => {
      this.menuBtn.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    const thereAreMenuBtnAndList = this.menuBtn && this.menuList;
    if (thereAreMenuBtnAndList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
