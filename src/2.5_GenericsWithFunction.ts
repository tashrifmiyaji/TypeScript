// generic with function
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObj = (value: { id: number; name: string }) => [value];

createArrayWithString("apple");
createArrayWithNumber(123);
createArrayWithUserObj({ id: 123, name: "mr.x" });

//
const createArrayWithGenerics = <T>(value: T) => [value];
createArrayWithGenerics("apple");
createArrayWithGenerics(123);
createArrayWithGenerics({ id: 123, name: "mr.x" });

// tuple
const createArrayWithTuple = (
	pera1: { id: number; name: string },
	para2: string,
) => [pera1, para2];

const createArrayTupleWithGeneric = <x, y>(pera1: x, para2: y) => [
	pera1,
	para2,
];
const res1 = createArrayTupleWithGeneric(123, "mr.x");
const res2 = createArrayTupleWithGeneric(
	{ id: 123, name: "mr.x" },
	{ hobby: "programmer" },
);

//
const addStudentToCrouse = <T>(studentInfo: T) => {
    return {
        crouse: "next level",
        ...studentInfo
    }
};

const student1 = {
    id: 1,
    name: "mr.x",
    hasBike: false
}

const student2 = {
    id: 2,
    name: "mr.y",
    hasBike: true,
    isMarried: true
}

const result = addStudentToCrouse(student1)