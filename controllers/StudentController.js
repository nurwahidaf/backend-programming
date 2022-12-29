// Import data students
const Student = require("../models/Student");

class StudentController {
    async index(req, res) {
        const students = await Student.all();

        // Data array lebih dari 0
        if (students.length > 0) {
            const data = {
                message : `Menampilkan data students`,
                data : students
            };
    
            res.status(200).json(data);
        } else {
            const data = {
                message : `Data students tidak ditemukan`
            };

            res.status(404).json(data);
        }
    }

    async store(req, res) {
        // Destructing object
        const { nama, nim, email, jurusan } = req.body;

        // Validasi data: jika data undefined maka kirim response error
        if (!nama || !nim || !email || !jurusan) {
            const data = {
                message : `Data tidak lengkap`
            };

            return res.status(422).json(data);
        }

        // else
        // Memanggil method create dari model Student
        const student = await Student.create(req.body);

        const data = {
            message : `Menambahkan data student`,
            data : student
        };

        res.status(201).json(data);
    }

    async update(req, res) {
        const { id } = req.params;
        // Mencari id student yang ingin di-update
        const student = await Student.find(id);

        if (student) {
            // Melakukan update data
            const student = await Student.update(id, req.body);
            
            const data = {
                message : `Mengedit data student`,
                data : student
            };
    
            res.status(200).json(data);
        } else {
            const data = {
                message : `Data tidak ditemukan`
            };
    
            res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        // Mencari id student yang ingin dihapus
        const student = await Student.find(id);

        if (student) {
            // Menghapus data
            await Student.delete(id);
            
            const data = {
                message : `Menghapus data student`
            };
    
            res.status(200).json(data);
        } else {
            const data = {
                message : `Data tidak ditemukan`
            };
    
            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const { id } = req.params;
        // Mencari id student yang ingin ditampilkan
        const student = await Student.find(id);

        if (student) {
            const data = {
                message : `Menampilkan detail student`,
                data : student
            };
    
            res.status(200).json(data);
        } else {
            const data = {
                message : `Data tidak ditemukan`
            };
    
            res.status(404).json(data);
        }
    }
}

// Buat object Student Controller
const object = new StudentController();

// Export object
module.exports = object;