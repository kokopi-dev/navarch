import { TooltipComponent } from "./components/tooltip.js";
import { MobileNavComponent } from "./components/mobileNav.js";
import { BlurBackdropComponent } from "./components/blurBackdrop.js";

// tooltip component
customElements.define("tooltip-component", TooltipComponent);

// mobile nav
customElements.define("mobile-nav-component", MobileNavComponent);

// blur backdrop
customElements.define("blur-backdrop-component", BlurBackdropComponent);
const blurBackdropComponent = document.createElement("blur-backdrop-component");
document.body.appendChild(blurBackdropComponent);
window.blurBackdropComponent = blurBackdropComponent;
