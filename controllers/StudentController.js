// Import data students
const students = require("../data/students");

class StudentController {
    index(req, res) {
        const data = {
            message : "Menampilkan data students",
            data : students
        };

        res.json(data);
    }

    store(req, res) {
        const { name } = req.body;
        const dataStudents = students.push(name);

        const data = {
            message : `Menambahkan data students: ${name}`,
            data : students
        };

        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        students[id] = name;

        const data = {
            message : `Mengedit data students id ${id}, nama ${name}`,
            data : students
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;
        const dataStudents = students.splice(id, 1);

        const data = {
            message : `Menghapus data students id ${id}`,
            data : students
        };

        res.json(data);
    }
}

// Buat object Student Controller
const object = new StudentController();

// Export object
module.exports = object;