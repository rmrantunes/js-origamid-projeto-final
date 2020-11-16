/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/modules/accordion.js":
/*!*************************************!*\
  !*** ./script/modules/accordion.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAccordion\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\n    \"[data-anime='accordion'] dt\",\n  );\n  const activeClass = \"ativo\";\n\n  function activeAccordion() {\n    this.nextElementSibling.classList.toggle(activeClass);\n    this.classList.toggle(activeClass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeClass);\n    accordionList[0].nextElementSibling.classList.add(activeClass);\n\n    accordionList.forEach((item) => {\n      item.addEventListener(\"click\", activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/accordion.js?");

/***/ }),

/***/ "./script/modules/animaNumeros.js":
/*!****************************************!*\
  !*** ./script/modules/animaNumeros.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAnimaNumeros\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if (start > total) {\r\n          numero.innerText = total; \r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n\r\n  let observer;\r\n  function handleMutation(mutation) {\r\n    observer.disconnect();\r\n    if (mutation[0].target.classList.contains(\"ativo\")) animaNumeros();\r\n  }\r\n\r\n  const observeTarget = document.querySelector(\".numeros\");\r\n  observer = new MutationObserver(handleMutation);\r\n  observer.observe(observeTarget, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/animaNumeros.js?");

/***/ }),

/***/ "./script/modules/animacaoScroll.js":
/*!******************************************!*\
  !*** ./script/modules/animacaoScroll.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAnimacaoScroll\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n  sections[0].classList.add(\"ativo\");\r\n  const halfHeight = window.innerHeight * 0.6;\r\n\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const topo = section.getBoundingClientRect().top;\r\n      // const isAnimable = topo < halfHeight;\r\n      if (topo < halfHeight) {\r\n        section.classList.add(\"ativo\");\r\n      } else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  window.addEventListener(\"scroll\", animaScroll);\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/animacaoScroll.js?");

/***/ }),

/***/ "./script/modules/dropdownMenu.js":
/*!****************************************!*\
  !*** ./script/modules/dropdownMenu.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initDropdownMenu\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./script/modules/outsideClick.js\");\n;\r\n\r\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"active\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"active\");\r\n    });\r\n  }\r\n  dropdownMenus.forEach((menu) => {\r\n    [\"click\", \"touchstart\"].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/dropdownMenu.js?");

/***/ }),

/***/ "./script/modules/fetchAnimais.js":
/*!****************************************!*\
  !*** ./script/modules/fetchAnimais.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFetchAnimais\n/* harmony export */ });\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumeros.js */ \"./script/modules/animaNumeros.js\");\n;\r\n\r\nfunction initFetchAnimais() {\r\n  function createAnimal({ especie, total }) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${especie}</h3><span data-numero>${total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url);\r\n      const animaisArray = await animaisResponse.json();\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n      animaisArray.forEach((animal) => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  fetchAnimais(\"./animais-api.json\");\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/fetchAnimais.js?");

/***/ }),

/***/ "./script/modules/fetchBitcoin.js":
/*!****************************************!*\
  !*** ./script/modules/fetchBitcoin.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFetchBitcoin\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((response) => response.json())\r\n    .then(({ BRL: { sell } }) => {\r\n      const btcPreco = document.querySelector(\".btc-preco\");\r\n      btcPreco.innerText = (100 / sell).toFixed(4);\r\n    })\r\n    .catch((erro) => console.log(Error(erro)));\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./script/modules/funcionamento.js":
/*!*****************************************!*\
  !*** ./script/modules/funcionamento.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFuncionamento\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  // Pegando horarios de funcionamento\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const horarioFuncionamento = funcionamento.dataset.horario\r\n    .split(\",\")\r\n    .map(Number);\r\n  const diasFuncionamento = funcionamento.dataset.semana\r\n    .split(\",\")\r\n    .map((n) => +n);\r\n\r\n  // Pegar o horario atual do usuário\r\n  const dataAtual = new Date();\r\n  const diaUsuario = dataAtual.getDay();\r\n  const horarioUsuario = dataAtual.getHours();\r\n\r\n  // Verificar se o agora está aberto\r\n  const isOpen = {\r\n    weekday: diasFuncionamento.indexOf(diaUsuario) !== -1,\r\n    hour:\r\n      horarioUsuario >= horarioFuncionamento[0] &&\r\n      horarioUsuario < horarioFuncionamento[1],\r\n  };\r\n\r\n  // Se agora estiver aberto, colocar classe no elemento\r\n  if (isOpen.hour && isOpen.weekday) {\r\n    funcionamento.classList.add(\"aberto\");\r\n    funcionamento.setAttribute(\"aria-label\", \"Aberto agora\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/funcionamento.js?");

/***/ }),

/***/ "./script/modules/menuMobile.js":
/*!**************************************!*\
  !*** ./script/modules/menuMobile.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initMenuMobile\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./script/modules/outsideClick.js\");\n;\r\n\r\nfunction initMenuMobile() {\r\n  const menuBtn = document.querySelector(\"[data-menu='button']\");\r\n  const menuList = document.querySelector(\"[data-menu='list']\");\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuBtn.classList.add(\"active\");\r\n    menuList.classList.add(\"active\");\r\n    menuBtn.setAttribute(\"aria-expanded\", \"true\");\r\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\r\n      menuBtn.classList.remove(\"active\");\r\n      menuList.classList.remove(\"active\");\r\n      menuBtn.setAttribute(\"aria-expanded\", \"false\");\r\n    });\r\n  }\r\n\r\n  if (menuBtn) {\r\n    eventos.forEach((userEvent) => {\r\n      menuBtn.addEventListener(userEvent, openMenu);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/menuMobile.js?");

/***/ }),

/***/ "./script/modules/modal.js":
/*!*********************************!*\
  !*** ./script/modules/modal.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initModal\n/* harmony export */ });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector(\"[data-modal='abrir']\");\r\n  const botaoFechar = document.querySelector(\"[data-modal='fechar']\");\r\n  const modalContainer = document.querySelector(\"[data-modal='container']\");\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    modalContainer.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  function clickOut(event) {\r\n    if (event.target === this) toggleModal(event);\r\n  }\r\n\r\n  if (botaoAbrir && botaoFechar && modalContainer) {\r\n    botaoAbrir.addEventListener(\"click\", toggleModal);  \r\n    botaoFechar.addEventListener(\"click\", toggleModal);\r\n    modalContainer.addEventListener(\"click\", clickOut);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/modal.js?");

/***/ }),

/***/ "./script/modules/outsideClick.js":
/*!****************************************!*\
  !*** ./script/modules/outsideClick.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ outsideClick\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      });\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/outsideClick.js?");

/***/ }),

/***/ "./script/modules/scrollSuave.js":
/*!***************************************!*\
  !*** ./script/modules/scrollSuave.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initScrollSuave\n/* harmony export */ });\nfunction initScrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '[data-menu=\"suave\"] a[href^=\"#\"]',\r\n  );\r\n\r\n  function activeScroll(event) {\r\n    event.preventDefault();\r\n\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  }\r\n\r\n  linksInternos.forEach((link) => {\r\n    link.addEventListener(\"click\", activeScroll);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/scrollSuave.js?");

/***/ }),

/***/ "./script/modules/tabNav.js":
/*!**********************************!*\
  !*** ./script/modules/tabNav.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTabNav\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\r\n  const tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove(\"ativo\");\r\n    });\r\n    tabContent[index].classList.add(\"ativo\");\r\n  }\r\n\r\n  function animeClass(index) {\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove(\"show-down\");\r\n      section.classList.remove(\"show-right\");\r\n    });\r\n    tabContent[index].classList.add(tabContent[index].dataset.anime);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n    tabContent[0].classList.add(tabContent[0].dataset.anime);\r\n\r\n    // adicionar a classe ativo para todas as seções;\r\n\r\n    // Extraordinário o forEach, ele te dá o index e você passa ele como argumento na função que vai dentro de um addEventListener dentro do próprio forEach, e linka esse mesmo no index da nodeList das seções.\r\n    tabMenu.forEach((item, index) => {\r\n      item.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n        animeClass(index);\r\n      });\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-webpack/./script/modules/tabNav.js?");

/***/ }),

/***/ "./script/modules/tooltip.js":
/*!***********************************!*\
  !*** ./script/modules/tooltip.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTooltip\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  // Atualizar os dados de top e left\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  // Excluir o tooltip quando deixar o elemento\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  // Criar o documento\r\n  function createTooltip(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = element.getAttribute(\"aria-label\");\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  // Ativar o tooltip na página\r\n  function onMouseOver() {\r\n    const tooltipBox = createTooltip(this);\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/modules/tooltip.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./script/modules/tabNav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./script/modules/accordion.js\");\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./script/modules/scrollSuave.js\");\n/* harmony import */ var _modules_animacaoScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animacaoScroll.js */ \"./script/modules/animacaoScroll.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./script/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./script/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./script/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./script/modules/menuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./script/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./script/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./script/modules/fetchBitcoin.js\");\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import initAnimaNumeros from \"./modules/animaNumeros.js\";\r\n\r\n\r\n\r\n\r\n(0,_modules_tabNav_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_modules_animacaoScroll_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default)();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n// initAnimaNumeros();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__.default)();\r\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\r\n\n\n//# sourceURL=webpack://animais-webpack/./script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./script/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;