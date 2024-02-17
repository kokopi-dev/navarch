/*
 * Single instance component
 */
export class MobileNavComponent extends HTMLElement {
  constructor() {
    super();
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this._baseCss =
      "sm:h-screen h-[65vh] absolute sm:top-0 sm:right-0 max-sm:bottom-0 sm:w-1/2 w-full bg-brand-base-200 max-sm:rounded-t-lg sm:border-l border-t border-brand-secondary/30 overflow-y-auto py-4 px-6 px-0";
    this._transitionCss = [
      "transition-all",
      "duration-300",
      "ease-in-out",
      "transform",
    ];
    this._showCss = [
      "opacity-100",
      "sm:translate-x-0",
      "max-sm:translate-y-0",
      "z-30",
    ];
    this._hideCss = [
      "opacity-0",
      "sm:translate-x-12",
      "max-sm:translate-y-16",
      "-z-10",
    ];
    this._isRendered = false;
  }
  _styleMobileNav() {
    if (this._isRendered === false) {
      this.setAttribute("class", this._baseCss);
      this.classList.add(...this._transitionCss);
      this.classList.add(...this._hideCss);
    }
  }
  connectedCallback() {
    this._styleMobileNav();
    window.mobileNav = this;
    this._isRendered = true;
  }
  show() {
    this.classList.remove(...this._hideCss);
    this.classList.add(...this._showCss);
  }
  hide() {
    setTimeout(() => {
      this.classList.add(...this._hideCss);
      this.classList.remove(...this._showCss);
    }, 80);
  }
}
