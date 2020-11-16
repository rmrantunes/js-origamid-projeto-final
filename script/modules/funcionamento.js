export default function initFuncionamento() {
  // Pegando horarios de funcionamento
  const funcionamento = document.querySelector("[data-semana]");
  const horarioFuncionamento = funcionamento.dataset.horario
    .split(",")
    .map(Number);
  const diasFuncionamento = funcionamento.dataset.semana
    .split(",")
    .map((n) => +n);

  // Pegar o horario atual do usuário
  const dataAtual = new Date();
  const diaUsuario = dataAtual.getDay();
  const horarioUsuario = dataAtual.getHours();

  // Verificar se o agora está aberto
  const isOpen = {
    weekday: diasFuncionamento.indexOf(diaUsuario) !== -1,
    hour:
      horarioUsuario >= horarioFuncionamento[0] &&
      horarioUsuario < horarioFuncionamento[1],
  };

  // Se agora estiver aberto, colocar classe no elemento
  if (isOpen.hour && isOpen.weekday) {
    funcionamento.classList.add("aberto");
    funcionamento.setAttribute("aria-label", "Aberto agora");
  }
}
