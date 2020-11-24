const penthouse = require("penthouse");
const fs = require("fs");

penthouse({
  url: "https://www.elsevier.com/",
  css: "./elsevier.css",
  height: 720,
  width: 1280,
}).then((criticalCss) => {
  // use the critical css
  fs.writeFileSync("critical-ELS.css", criticalCss);
});
