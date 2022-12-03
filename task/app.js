const { index, store, update, destroy } = require("./Controllers/FruitController.js");

const main = () => {
    console.log(`Method index - Menampilkan Buah`);
    index();
    store("Pisang");
    update(0, "Kelapa");
    destroy(0);
};

main();