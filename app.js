// Import express
const express = require("express");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());

// Definisikan route
const router = require("./routes/api");
app.use(router);

// Definisikan port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});