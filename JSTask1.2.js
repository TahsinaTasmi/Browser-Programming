
class Student {
    constructor(name, birthDate, address, phone) {
        this.name = name;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
    }
    countAge() {
        const Year = new Date()
        return Year.getFullYear() - this.birthDate;
    }
    print() {
        console.log(this.name, this.countAge(), this.address, this.phone);
    }
}





// task 2.2:   

function Students(name, birthDate, address, phone) {
    this.countAge = function () {
        const Year = new Date()
        return Year.getFullYear() - birthDate;
    }
    this.print = function () {
        console.log(name, this.countAge(), address, phone);
    }
}





// task 2.3: 

class StudentInfo {
    constructor(course, grade, dateOfPass) {
        this.course = course;
        this.grade = grade;
        this.dateOfPass = dateOfPass;

    }
    addGrade() {
        let arr = []
        this.grade.forEach((value) => {
            if (value >= 0 && value <= 10) {
                arr.push(value);

            }
        })
        if (this.grade.length === arr.length) {
            return arr;
        } else {
            return "grade is not valid!  plase give the 0 - 10 "
        }
    }
    printGrades() {
        console.log('course: ', this.course, ", Grade: ", this.addGrade(), ", Date of passing the course: ", this.dateOfPass);
    }

}



// task 2.4: 

class GradeScaled {
    constructor(grade) {
        this.grade = grade;
    }
    giveGradeScaled() {
        if (this.grade >= 1 && this.grade <= 2) {
            return "I";
        } else if (this.grade >= 3 && this.grade <= 4) {
            return "II"
        } else if (this.grade >= 5 && this.grade <= 6) {
            return "III"
        } else if (this.grade >= 7 && this.grade <= 8) {
            return "IV"
        } else if (this.grade >= 9 && this.grade <= 10) {
            return "V"
        } else {
            return "This grade not valid!"
        }
    }
    goodStudent() {
        if (this.grade >= 5) {
            return true;
            
        } else {
            return false
        }
    }
    passStudent() {
        if (this.grade < 5) {
            return true
        } else {
            return false
        }
    }


}

const Grade = new GradeScaled(6)

console.log(Grade.goodStudent());