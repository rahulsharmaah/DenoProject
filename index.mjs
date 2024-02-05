import * as slint from "slint-ui";
let ui = slint.loadFile("main.slint");
let demo = new ui.Demo();

await demo.run();