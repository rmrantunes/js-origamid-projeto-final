export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }

  animeClass(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove("show-down");
      section.classList.remove("show-right");
    });
    this.tabContent[index].classList.add(this.tabContent[index].dataset.anime);
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.tabContent[0].classList.add(this.activeClass);
      this.tabContent[0].classList.add(this.tabContent[0].dataset.anime);
      this.tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
          this.activeTab(index);
          this.animeClass(index);
        });
      });
    }
  }
}
