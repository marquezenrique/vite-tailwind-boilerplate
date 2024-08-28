# <h1>Vite + TailwindCSS</h1>

<h6>A FiveM web-side boilerplate!</h1>

###

## <h2 align="left">Technologies used</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" height="40" alt="tailwind logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" height="40" alt="vite logo"  />
</div>

###

## <h2 align="left">Functions</h2>

<h3>All features of the boilerplate</h3>

### <h2>emit</h2>

<h4>Send POST messages to client-side</h4>

```js
// example.js
import { emit } from "path/emit"

    // event       // callback data
emit("nuiMessage", { name: "Ryan Reynolds" })

    // event                   // callback data            // mock response data
emit("nuiMessageWithResponse", { name: "Ryan Reynolds" }}, { text: "Functioning!" }).then(response => {
    console.log(response) // { text: "Functioning!" }
})
```

```lua
// client.lua
RegisterNUICallback("nuiMessage", function(Data)
    print(Data) // { name: "Ryan Reynolds" }
end)

RegisterNUICallback("nuiMessageWithResponse", function(Data,Response)
    print(Data) // { name: "Ryan Reynolds" }
    Response({ text: "Functioning!" }) // Data sent to the UI
end)
```

### <h2>observe</h2>

<h4>Receive POST messages from client-side</h4>

```js
// example.js
import { observe } from "path/observe";

observe("nuiMessage", function (data) {
  console.log(data); // { working: true }
});
```

```lua
// client.lua
SendNUIMessage({
    action = "nuiMessage",
    data = {
        working = true
    }
})
```

### <h2>listen</h2>

<h4>Add listener to window events (alias to window.addEventListener)</h4>

```js
// example.js
import { listen } from "path/listen";

listen("load", function () {
  console.log("Window loaded!");
});
```

### <h2>unlisten</h2>

<h4>Remove listener to window events (alias to window.removeEventListener)</h4>

```js
// example.js
import { unlisten } from "path/listen";

unlisten("load");
```

### <h2>isEnvBrowser</h2>

<h4>Returns if is using desktop browser (true) or FiveM browser (false)</h4>

```js
// example.js
import { isEnvBrowser } from "path/misc/utils";

console.log(isEnvBrowser()); // true or false
```
