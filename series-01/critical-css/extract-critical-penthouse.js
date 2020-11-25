const penthouse = require("penthouse");
const fs = require("fs");

penthouse({
  url: "http://localhost:3000",
  css: "./public/bootstrap.min.css",
  height: 720,
  width: 1280,
}).then((criticalCss) => {
  // use the critical css
  fs.writeFileSync("./public/critical-ELS.css", criticalCss);
});
