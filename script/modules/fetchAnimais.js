import AnimaNumeros from "./animaNumeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal({ especie, total }) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}</h3><span data-numero>${total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function initAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisArray = await animaisResponse.json();
      animaisArray.forEach(preencherAnimais);
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
