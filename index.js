class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        this.grade = grade; 
    }
    introduce() {
       console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`); 
    }
}



let student1 = new Student('Tom', 'Sawyer', '6235623652', 'A');
let student2 = new Student('Sam', 'Smith', '4801254857', 'A');

student1.introduce();
student2.introduce();