export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  // Atualizar os dados de top e left
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  // Excluir o tooltip quando deixar o elemento
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  // Criar o documento
  function createTooltip(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = element.getAttribute("aria-label");
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  // Ativar o tooltip na página
  function onMouseOver() {
    const tooltipBox = createTooltip(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
