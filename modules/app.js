// import FruitController
// melakukan destructing object

const { index, store } = require("./FruitController.js");

const main = () => {
  index();
  store("Avocado");
};

main();