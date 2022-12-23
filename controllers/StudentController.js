// Import data students
const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        const students = await Student.all();
        const data = {
            message : "Menampilkan data students",
            data : students
        };

        res.status(200).json(data);
    }

    async store(req, res) {
        const { nama, nim, email, jurusan } = req.body;
        const student = { nama, nim, email, jurusan };
        const addStudents = await Student.create(student);
        const students = await Student.all();

        const data = {
            message : `Menambahkan data students: ${nama}`,
            data : students
        };

        res.status(200).json(data);
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