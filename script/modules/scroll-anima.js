import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfHeight = window.innerHeight * 0.6;
    this.checkDistanceAndAnime = debounce(
      this.checkDistanceAndAnime.bind(this),
      200,
    );
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      return {
        element: section,
        offset: Math.floor(section.offsetTop - this.halfHeight),
      };
    });
  }

  checkDistanceAndAnime() {
    console.log("timer");
    this.distance.forEach((item) => {
      const isSectionVisible = window.pageYOffset > item.offset;
      if (isSectionVisible) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    const thereAreSections = this.sections.length;
    if (thereAreSections) {
      this.getDistance();
      this.checkDistanceAndAnime();
      window.addEventListener("scroll", this.checkDistanceAndAnime);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistanceAndAnime);
  }
}
