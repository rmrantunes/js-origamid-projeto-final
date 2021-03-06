import debouce from "./debounce.js";

class UpdatePosition {
  constructor() {
    this.distance = {
      start: 0,
      movement: 0,
      finalPosition: 0,
    };
  }

  updatePosition(clientX) {
    this.distance.movement = (this.distance.start - clientX) * 1.25;
    return this.distance.finalPosition - this.distance.movement;
  }

  moveSlide(movement, slide) {
    this.distance.finalMovementPosition = movement;
    slide.style.transform = `translateX(${movement}px)`;
  }

  saveInitialPosition({ clientX }) {
    this.distance.start = clientX;
  }

  updateAndMoveSlide({ clientX }, slide) {
    const movement = this.updatePosition(clientX);
    this.moveSlide(movement, slide);
  }

  saveLastPosition(movement = this.distance.finalMovementPosition) {
    this.distance.finalPosition = movement;
  }
}

class Slide {
  constructor(slide, wrapper) {
    this.bindingTheThis();
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.updatePosition = new UpdatePosition();
    this.activeClass = "active";
    this.changeEvent = new Event("changeEvent");
  }

  transition(active) {
    this.slide.style.transition = active ? "transform 0.3s" : "";
  }

  addListenersToWapper({ type, callback }) {
    this.wrapper.addEventListener(type, callback);
  }

  removeListenersInWapper({ type, callback }) {
    this.wrapper.removeEventListener(type, callback);
  }

  onTouchStart(event) {
    this.updatePosition.saveInitialPosition(event.changedTouches[0]);
    this.addListenersToWapper({
      type: "touchmove",
      callback: this.onTouchMove,
    });
    this.transition(false);
  }

  onMouseStart(event) {
    event.preventDefault();
    this.updatePosition.saveInitialPosition(event);
    this.addListenersToWapper({
      type: "mousemove",
      callback: this.onMouseMove,
    });
    this.transition(false);
  }

  onTouchMove(event) {
    this.updatePosition.updateAndMoveSlide(event.changedTouches[0], this.slide);
  }

  onMouseMove(event) {
    this.updatePosition.updateAndMoveSlide(event, this.slide);
  }

  onTouchEnd() {
    this.updatePosition.saveLastPosition();
    this.removeListenersInWapper({
      type: "touchmove",
      callback: this.onTouchMove,
    });
    this.transition(true);
    this.changeSlideOnEnd();
  }

  onMouseEnd() {
    this.updatePosition.saveLastPosition();
    this.removeListenersInWapper({
      type: "mousemove",
      callback: this.onMouseMove,
    });
    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    const { movement } = this.updatePosition.distance;
    const nextExists = this.indexes.next !== undefined;
    const previousExists = this.indexes.previous !== undefined;

    if (movement > 120 && nextExists) {
      this.activeNextSlide();
    } else if (movement < -120 && previousExists) {
      this.activePreviousSlide();
    } else {
      this.changeSlide(this.indexes.current);
    }
  }

  addInitialSlideListeners() {
    const initalListeners = [
      {
        type: "mousedown",
        callback: this.onMouseStart,
      },
      {
        type: "mouseup",
        callback: this.onMouseEnd,
      },
      {
        type: "touchstart",
        callback: this.onTouchStart,
      },
      {
        type: "touchend",
        callback: this.onMouseEnd,
      },
    ];

    initalListeners.forEach(this.addListenersToWapper);
  }

  bindingTheThis() {
    const methodsToBind = [
      "addListenersToWapper",
      "removeListenersInWapper",
      "onMouseStart",
      "onMouseMove",
      "onTouchEnd",
      "onMouseEnd",
      "onTouchStart",
      "onTouchMove",
      "activePreviousSlide",
      "activeNextSlide",
    ];

    methodsToBind.forEach((method) => {
      this[method] = this[method].bind(this);
    });
    this.onResize = debouce(this.onResize.bind(this), 200);
  }

  slidePosition(element) {
    const margin = (this.wrapper.offsetWidth - element.offsetWidth) / 2;
    return -(element.offsetLeft - margin);
  }

  slideConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      return {
        element,
        position: this.slidePosition(element),
      };
    });
  }

  currentSlideIndexesInfo(index) {
    const lastElementIndex = this.slideArray.length - 1;
    this.indexes = {
      previous: index ? index - 1 : undefined,
      current: index,
      next: index >= lastElementIndex ? undefined : index + 1,
    };
  }

  changeSlide(index = 0) {
    const currentSlidePosition = this.slideArray[index].position;
    this.currentSlideIndexesInfo(index);
    this.updatePosition.moveSlide(currentSlidePosition, this.slide);
    this.updatePosition.saveLastPosition(currentSlidePosition);
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.slideArray.forEach((item) =>
      item.element.classList.remove(this.activeClass),
    );
    this.slideArray[this.indexes.current].element.classList.add(
      this.activeClass,
    );
  }

  activePreviousSlide() {
    if (this.indexes.previous !== undefined)
      this.changeSlide(this.indexes.previous);
  }

  activeNextSlide() {
    if (this.indexes.next !== undefined) this.changeSlide(this.indexes.next);
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      this.changeSlide(this.indexes.current);
    }, 750);
  }

  addReziseEvent() {
    window.addEventListener("resize", this.onResize);
  }

  init() {
    this.bindingTheThis();
    this.addInitialSlideListeners();
    this.slideConfig();
    this.changeSlide();
    this.addReziseEvent();
    return this;
  }
}

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControlEvents();
  }
  
  addArrow(previous, next) {
    this.transition(true);
    this.previousElement = document.querySelector(previous);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.previousElement.addEventListener("click", this.activePreviousSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index}</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.changeSlide(index);
      this.activeControlItem();
    });
    this.wrapper.addEventListener("changeEvent", this.activeControlItem);
  }

  activeControlItem() {
    this.controlArray.forEach((item) =>
      item.classList.remove(this.activeClass),
    );
    this.controlArray[this.indexes.current].classList.add(this.activeClass);
  }

  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.activeControlItem();
    this.controlArray.forEach(this.eventControl);
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
