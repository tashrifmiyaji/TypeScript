// constraint = given strict rule.

interface Student {
	id: number;
	name: string;
}
const addStudentToCrouse = <T extends Student>(
	studentInfo: T,
) => {
	return {
		crouse: "next level",
		...studentInfo,
	};
};

const student1 = {
	name: "mr.x",
	hasBike: false,
};

const student2 = {
	id: 2,
	name: "mr.y",
	hasBike: true,
	isMarried: true,
};

const result = addStudentToCrouse(student1);
