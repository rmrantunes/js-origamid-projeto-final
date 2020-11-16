export default class Modal {
  constructor(botaoAbrir, botaoFechar, modalContainer) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(modalContainer);

    this.toggleModalEvent = this.toggleModalEvent.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  toggleModalEvent(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOut({ target }) {
    if (target === this.modalContainer) this.toggleModal();
  }

  addEvent() {
    this.botaoAbrir.addEventListener("click", this.toggleModalEvent);
    this.botaoFechar.addEventListener("click", this.toggleModalEvent);
    this.modalContainer.addEventListener("click", this.clickOut);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addEvent();
    }
    return this;  
  }
}
