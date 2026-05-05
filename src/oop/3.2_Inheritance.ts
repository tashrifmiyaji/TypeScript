// 3-2 Inheritance, the 1st Pillar of OOP

class Student {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	getSleep(numOfHours: number) {
		console.log(`${this.name} ${numOfHours} gonta gumay!`);
	}
}

const student1 = new Student("mr.fakibaaz", 18, "cumilla");
student1.getSleep(15);

//
class Teacher {
	name: string;
	age: number;
	address: string;
	designation: string;

	constructor(
		name: string,
		age: number,
		address: string,
		designation: string,
	) {
		this.name = name;
		this.age = age;
		this.address = address;
		this.designation = designation;
	}

	getSleep(numOfHours: number) {
		console.log(`${this.name} ${numOfHours} gonta gumay!`);
	}

	takeClass(numOfHours: number) {
		console.log(`${this.name} ${numOfHours} gonta class ney!`);
	}
}

const teacher1 = new Teacher("mr.smart", 32, "dhaka", "senior teacher");
teacher1.takeClass(8);

// FOR COMMON
class Parent {
	name: string;
	age: number;
	address: string;

	constructor(name: string, age: number, address: string) {
		this.name = name;
		this.age = age;
		this.address = address;
	}

	getSleep(numOfHours: number) {
		console.log(`${this.name} ${numOfHours} gonta gumay!`);
	}
}

//
class StudentClass2 extends Parent {}
const newStudent2 = new StudentClass2("mr.x", 18, "cumilla");
newStudent2.getSleep(8);

//
class TeacherClass2 extends Parent {
	designation: string;

	constructor(
		name: string,
		age: number,
		address: string,
		designation: string,
	) {
		super(name, age, address);
		this.designation = designation;
	}

	takeClass(numOfHours: number) {
		console.log(`${this.name} ${numOfHours} gonta class ney!`);
	}
}

const newTeacher2 = new TeacherClass2("mr.y", 38, "dhaka", "senior teacher");
newTeacher2.getSleep(9);
