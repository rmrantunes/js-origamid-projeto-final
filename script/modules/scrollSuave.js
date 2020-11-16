export default class ScrollSuave {
  constructor(links, options) {
    this.links = document.querySelectorAll(links);
    this.activeScroll = this.activeScroll.bind(this);
    this.options = options || {
      behavior: "smooth",
      block: "start",
    };
  }

  activeScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEvent() {
    this.links.forEach((link) => {
      link.addEventListener("click", (event) => this.activeScroll(event));
    });
  }

  init() {
    if (this.links.length) this.addEvent();
    return this;
  }
}
