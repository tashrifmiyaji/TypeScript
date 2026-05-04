// generic
type GenericArray<t> = Array<t>;

const friends: string[] = ["mr.x", "mr.y", "mr.z"];
const friends1: Array<string> = ["mr.x", "mr.y", "mr.z"];
const friends2: GenericArray<string> = ["mr.x", "mr.y", "mr.z"];

const rollNumber: number[] = [1, 2, 3, 4];
const rollNumber1: Array<number> = [1, 2, 3, 4];
const rollNumber2: GenericArray<number> = [1, 2, 3, 4];

const isEligible: boolean[] = [true, false, true];
const isEligible1: Array<boolean> = [true, false, true];
const isEligible2: GenericArray<boolean> = [true, false, true];

//
type User = {
	name: string;
	age: number;
};

const userList: GenericArray<User> = [
	{
		name: "tashrif",
		age: 25,
	},
	{
		name: "aysha",
		age: 6,
	},
];

//
type Coordinates<x, y> = [x, y];

const dhaka: Coordinates<number, number> = [70, 90];
const dhaka1: Coordinates<string, string> = ["70", "90"];
