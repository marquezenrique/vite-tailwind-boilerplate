import { emit } from "../lib/emit";
import { isEnvBrowser } from "../utils/misc";

export class Interface {
  element;
  visible = false;

  constructor(selector) {
    this.element = document.querySelector(selector);
    if (this.element) {
      this.element.style.visibility = 'hidden';
    }
  }

  events = {
    message: (data) => {
      switch (data) {
        case true:
          this.show();
          break;
        case false:
          emit("removeFocus");
          this.hide();
          break;
        default:
          break;
      }
    },
    keydown: ({ code }) => {
      if (!this.visible) return;
      if (["Escape"].includes(code)) {
        this.hide();
        if (!isEnvBrowser()) {
          emit("removeFocus");
        }
      }
    },
  }

  show() {
    this.visible = true;
    this.updateVisibility();
  }

  hide() {
    this.visible = false;
    this.updateVisibility();
  }

  updateVisibility() {
    if (this.element) {
      this.element.style.visibility = this.visible ? 'visible' : 'hidden';
    }
  }
}
