import initAnimaNumeros from "./animaNumeros.js";

export default function initFetchAnimais() {
  function createAnimal({ especie, total }) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}</h3><span data-numero>${total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisArray = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisArray.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais("./animais-api.json");
}
