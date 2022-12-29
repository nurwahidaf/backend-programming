// Import database
const db = require("../config/database");

// Membuat model Student
class Student {
    static all() {
        return new Promise((resolve, reject) =>{
            // Lakukan query ke db untuk ambil data
            const sql = 'SELECT * FROM students';
            db.query(sql, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }

    static async create(data) {
        // Promise 1: insert data ke database
        const id = await new Promise((resolve, reject) => {
            // query insert data
            const sql = 'INSERT INTO students SET ?';
            db.query(sql, data, (err, res) => {
                if(err) throw err;
                resolve(res.insertId);
            });
        });
        
        // Promise 2: select data berdasarkan id
        // Refactor promise 2
        const student = await this.find(id);
        return student;
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            // query select by id
            const sql = 'SELECT * FROM students WHERE id = ?';
            db.query(sql, id, (err, res) => {
                if(err) throw err;
                const [student] = res;
                resolve(student);
            });
        });
    }

    static async update(id, data) {
        await new Promise((resolve, reject) => {
            // query update data
            const sql = 'UPDATE students SET ? WHERE id = ?';
            db.query(sql, [data, id], (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });

        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            // query delete data
            const sql = 'DELETE FROM students WHERE id = ?';
            db.query(sql, id, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }
}

// Export model Student
module.exports = Student;