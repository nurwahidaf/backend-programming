// Import mysql
const mysql = require("mysql");

//Import dotenv
require("dotenv").config();

// Destructing object process.env
const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} = process.env;

// Buat koneksi
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

// Connect ke database
db.connect(function(err) {
    if (err) {
        console.log(`Koneksi error: ${err}`);
        return;
    } else {
        console.log("Koneksi berhasil");
        return;
    }
});

// Export db
module.exports = db;