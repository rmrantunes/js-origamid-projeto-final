export default class initTooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Atualizar os dados de top e left
  onMouseMove({ pageX, pageY }) {
    this.tooltipBox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${pageX - 220}px`;
      return;
    }
    this.tooltipBox.style.left = `${pageX + 20}px`;
  }

  // Excluir o tooltip quando deixar o elemento
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Criar o documento
  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = element.getAttribute("aria-label");
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Ativar o tooltip na página
  onMouseOver({ currentTarget }) {
    this.createTooltip(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) this.addEvent();
    return this;
  }
}
