import TabNav from "./modules/tabNav.js";
import Accordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initAnimacaoScroll from "./modules/animacaoScroll.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();
const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']",
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
// initAnimaNumeros();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
