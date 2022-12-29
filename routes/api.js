// Import Student Controller
const StudentController = require("../controllers/StudentController");

// Import express
const express = require("express");

// Buat object router
const router = express.Router();

// Buat routing
router.get("/", (req, res) => {
    res.send("Hello Express");
});

// Buat routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
router.get("/students/:id", StudentController.show);

// Export routing
module.exports = router;