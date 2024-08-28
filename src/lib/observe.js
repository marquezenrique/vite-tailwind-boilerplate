import { listen, unlisten } from "./listen";

import { noop } from "../utils/misc";

class NuiListener {
  constructor(action, handler) {
    this.action = action;
    this.savedHandler = handler || noop;
  }

  setHandler(handler) {
    this.savedHandler = handler;
  }

  observe() {
    this.eventListener = (event) => {
      const { action: eventAction, data } = event.data;
      if (eventAction === this.action && this.savedHandler) {
        this.savedHandler(data);
      }
    };
    listen("message", this.eventListener);
  }

  unobserve() {
    if (this.eventListener) {
      unlisten("message", this.eventListener);
    }
  }
}

export const observe = (action, handler) => {
  const listener = new NuiListener(action, handler);
  listener.observe();
  return () => {
    listener.unobserve();
  };
};
