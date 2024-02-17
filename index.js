const App = require("./app");

async function boote() {
  const app = new App();
  await app.init();
}
boote();
