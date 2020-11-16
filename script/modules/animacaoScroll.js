export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  sections[0].classList.add("ativo");
  const halfHeight = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const topo = section.getBoundingClientRect().top;
      // const isAnimable = topo < halfHeight;
      if (topo < halfHeight) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
