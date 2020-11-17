export default class Funcionamento {
  constructor(funcionamentoElement) {
    this.funcionamento = document.querySelector(funcionamentoElement);
  }

  horariosDeFuncionamento() {
    const datasetParaNumero = (datasetName) => {
      return this.funcionamento.dataset[datasetName].split(",").map(Number);
    }
    this.horarioFuncionamento = datasetParaNumero("horario");
    this.diasFuncionamento = datasetParaNumero("semana");
  }

  horarioDeAgora() {
    const BRAZIL_TIMEZONE = 3;
    const convertIntoBrazilianHour = () => {
      return this.dataAtual.getUTCHours() - BRAZIL_TIMEZONE
    }

    this.dataAtual = new Date();
    this.diaUsuario = this.dataAtual.getDay();
    this.horarioUsuario = convertIntoBrazilianHour();
  }

  estaAberto() {
    const isOpen = {
      weekday: this.diasFuncionamento.indexOf(this.diaUsuario) !== -1,
      hour:
        this.horarioUsuario >= this.horarioFuncionamento[0] &&
        this.horarioUsuario < this.horarioFuncionamento[1],
    };
    return isOpen.weekday && isOpen.hour;
  }

  ativarFuncionamento() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add("aberto");
      this.funcionamento.setAttribute("aria-label", "Aberto agora");
    }
  }

  init() {
    if (this.funcionamento) {
      this.horariosDeFuncionamento();
      this.horarioDeAgora();
      this.estaAberto();
      this.ativarFuncionamento();
    }
    return this;
  }
}
