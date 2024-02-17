// multi instance
export class TooltipComponent extends HTMLElement {
  constructor() {
    super()
    this._createTipDiv = this._createTipDiv.bind(this)
    this.tip = ""
    this.tipDiv = null
    this.tipHeight = "top-8"
    this.tipPosition = "left-0 origin-top-left"
    this._tipParentCss = "relative flex items-center text-brand-secondary"
    this._tipDivCss = "-z-10 peer-hover:z-0 absolute shadow-md bg-brand-base-100 border border-brand-secondary p-2 rounded-md peer-hover:opacity-100 peer-hover:scale-100 scale-50  opacity-0 whitespace-nowrap transform transition-all duration-200 ease-in-out"
  }
  connectedCallback() {
    this.tip = this.getAttribute("data-tip") || ""
    this.tipPosition = this.getAttribute("data-position") || "left-0 origin-top-left"
    this.setAttribute("class", this._tipParentCss)
    this._createTipDiv()
    setTimeout(() => {
      this.children[0].classList.add("peer")
      this.appendChild(this.tipDiv)
    })
  }
  _createTipDiv() {
    this.tipHeight = this.getAttribute("data-height") || "top-8"
    this.tipDiv = document.createElement("div")
    this.tipDiv.setAttribute("class", this._tipDivCss)
    this.tipDiv.classList.add(this.tipHeight)
    this.tipDiv.classList.add(...this.tipPosition.split(" "))
    this.tipDiv.innerHTML = this.tip
  }
}
