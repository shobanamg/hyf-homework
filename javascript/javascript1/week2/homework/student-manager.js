/****** Exercise 4: Student Manager ******/
const class07Students = [];

function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Please enter a valid student");
        return;
    }

    if (studentName === 'Queen' && !class07Students.includes(studentName)) {
        class07Students.push('Queen');
        return;
    }

    if (class07Students.length < 6) {
        if (!class07Students.includes(studentName)) {
            class07Students.push(studentName);
        } else {
            console.log(`Student ${studentName} is already in the class`);
        }
    } else {
        console.log("Cannot add more students to class 07")
    }
}

function getNumberOfStudents() {
    return class07Students.length
}


addStudentToClass("")
addStudentToClass('Alex');
addStudentToClass('Aditi');
addStudentToClass('Madhu');
addStudentToClass('Madhu');
addStudentToClass('Claudia');
addStudentToClass('Efty');
addStudentToClass('Natali');
console.log(getNumberOfStudents());
addStudentToClass('Queen');
console.log(getNumberOfStudents());
addStudentToClass('Tesla');

