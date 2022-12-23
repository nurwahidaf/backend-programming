// Import database
const db = require("../config/database");

// Membuat model Student
class Student {
    static all = () => {
        return new Promise((resolve, reject) =>{
            // Lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM students";
            db.query(sql, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }

    static create = (student) => {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO students SET ?';
            db.query(sql, student, (err, res) => {
                if(err) throw err;
                resolve(res);
            });
        });
    }
}

// Export model Student
module.exports = Student;