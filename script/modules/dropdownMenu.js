import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDopdownEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    const thereAreMenus = this.dropdownMenus.length;
    if (thereAreMenus) {
      this.addDopdownEvent();
    }
    return this;
  }
}
