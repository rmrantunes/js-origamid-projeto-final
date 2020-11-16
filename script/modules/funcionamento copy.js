export default function initFuncionamento() {
const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
console.log(diasSemana, horarioSemana);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay(); // dia da execução do método
const horarioAgora = dataAgora.getHours(); // horario da execução do método

const isOpenNow = {
  weekDay: diasSemana.indexOf(diaAgora) !== -1,
  hours: horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1],
};
if (isOpenNow.hours && isOpenNow.weekDay) funcionamento.classList.add("aberto");
}

// const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
// const estaAberto =
//   horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

//
// AULA vvvvv

// const agora = new Date();
// const futuro = new Date("Dec 31 2020");
// console.log(futuro);

// function milisecToDays(time) {
//   return time / (24 * 60 * 60 * 1000);
// }

// const diasAgora = milisecToDays(agora.getTime());
// const diasFuturo = milisecToDays(futuro.getTime());

// console.log(Math.floor(diasFuturo - diasAgora) + " dias até o natal");
