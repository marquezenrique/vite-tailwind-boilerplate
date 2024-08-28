import "./styles/global.css"

import { Debugger } from "./utils/debugger";
import { Interface } from "./classes/Interface";
import { listen } from "./lib/listen";
import { observe } from "./lib/observe";

const AppInstance = new Interface("#app")

new Debugger([
  {
    action: "setVisible",
    data: true
  }
])

observe('setVisible', AppInstance.events.message)
listen('keydown', AppInstance.events.keydown)
