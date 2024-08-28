import { isEnvBrowser } from "./misc";

export class Debugger {
  events;
  timer;

  constructor(events, timer) {
    this.events = events;
    if (timer) {
      this.timer = timer;
    }
    if (isEnvBrowser()) {
      this.startProcessing();
    }
  }

  startProcessing() {
    this.events.forEach((event) => {
      setTimeout(() => {
        this.handleEvent(event);
      }, this.timer);
    });
  }

  handleEvent(event) {
    console.log("Processing event:", event);
    setTimeout(() => {
      window.dispatchEvent(
        new MessageEvent("message", {
          data: { ...event },
        })
      );
    });
  }
}
