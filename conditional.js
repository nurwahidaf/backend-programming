const nilai = 90;
let grade = "";

if (nilai > 90) {
    grade = "A";
} else if (nilai > 80) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade Anda: ${grade}`);

const age = 19;

// ternary operator
age > 21 ? console.log("Sudah dewasa") : console.log("Belum dewasa");