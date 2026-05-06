// instance of type guard/ tpe narrowing
class Person {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	getSleep(numOfHours: number) {
		console.log(
			`this ${this.name} slept minimum ${numOfHours} hours daily`,
		);
	}
}

//
class Student extends Person {
	constructor(name: string) {
		super(name);
	}

	doStudy() {
		console.log(`this ${this.name} studded minimum 8 hours daily`);
	}
}

//
class Teacher extends Person {
	constructor(name: string) {
		super(name);
	}

	takeClass() {
		console.log(`this ${this.name} take class minimum 5 hours daily`);
	}
}

// function
const isTeacher = (user: Person) => {
	return user instanceof Teacher; // return boolean
};

//
const getUserInfo = (user: Person) => {
	if (user instanceof Student) {
		user.doStudy();
	} else if (isTeacher(user)) {
		user.takeClass();
	} else {
		user.getSleep(8);
	}
};

const student1 = new Student("mr.A");
const teacher1 = new Teacher("mr.T");
getUserInfo(student1);
