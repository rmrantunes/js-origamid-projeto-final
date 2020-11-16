export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  function animeClass(index) {
    tabContent.forEach((section) => {
      section.classList.remove("show-down");
      section.classList.remove("show-right");
    });
    tabContent[index].classList.add(tabContent[index].dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabContent[0].classList.add(tabContent[0].dataset.anime);

    // adicionar a classe ativo para todas as seções;

    // Extraordinário o forEach, ele te dá o index e você passa ele como argumento na função que vai dentro de um addEventListener dentro do próprio forEach, e linka esse mesmo no index da nodeList das seções.
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
        animeClass(index);
      });
    });
  }
}