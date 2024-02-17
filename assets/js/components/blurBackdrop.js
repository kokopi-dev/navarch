// backdrop for modals/warnings
export class BlurBackdropComponent extends HTMLElement {
  constructor() {
    super()
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this._closeModalEventHandler = this._closeModalEventHandler.bind(this)
    this._showCss = ["opacity-100", "z-20"]
    this._hideCss = ["opacity-0", "-z-10"]
    this._baseCss = "fixed w-screen h-screen sm:p-8 backdrop-blur-sm transition-all ease-in-out duration-300 top-0 left-0"
    this._contentTransitionCss = ["transition-all", "duration-300", "ease-in-out", "transform"]
    this.contentDiv = null
    this.isShowing = false
    this.lockBackdrop = false
  }
  connectedCallback() {
    this._createContentDiv()
    this.setAttribute("class", `${this._baseCss} ${this._hideCss.join(' ')}`)
    this.setAttribute("id", "blurBackdropComponent")
    this.appendChild(this.contentDiv)
    this.addEventListener("click", this._closeModalEventHandler)
  }
  _closeModalEventHandler(event) {
    if (event.srcElement === this) {
      this.hide()
    }
  }
  _createContentDiv() {
    this.contentDiv = document.createElement("div")
    this.contentDiv.setAttribute("id", "backdropContent")
    this.contentDiv.setAttribute("class", "w-fit mx-auto sm:static absolute bottom-0 sm:-translate-y-12 translate-y-16")
    this.contentDiv.classList.add(...this._contentTransitionCss)
  }
  show() {
    this.isShowing = true
    this.classList.add(...this._showCss)
    this.classList.remove(...this._hideCss)
  }
  hide() {
    if (this.isShowing === false) {
      return
    }

    this.isShowing = false
    if (window.modalController.modalIsOpened === true) {
      if (this.contentDiv.firstChild) {
        this.contentDiv.firstChild.hide()
        setTimeout(() => {
          this.contentDiv.removeChild(this.contentDiv.firstChild)
        }, 85)
      }
    }

    if (window.modalController.mobileNavIsOpened === true) {
      window.modalController.hideMobileNav()
    }

    setTimeout(() => {
      this.classList.add(...this._hideCss)
      this.classList.remove(...this._showCss)
    }, 150)
  }
}
