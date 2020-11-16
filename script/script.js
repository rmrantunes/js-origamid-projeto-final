import initTabNav from "./modules/tabNav.js";
import initAccordion from "./modules/accordion.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initAnimacaoScroll from "./modules/animacaoScroll.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');

scrollSuave.init();

initTabNav();
initAccordion();
initAnimacaoScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
// initAnimaNumeros();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
