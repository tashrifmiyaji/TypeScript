//
const arrayOfNum: number[] = [1, 4, 6, 8, 10, 13, 16, 19];

const arrayOfString: string[] = ["1", "4", "6", "8", "10", "13", "16", "19"];

const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

//
type AreaOfNum = {
	id: number;
	height: number;
	width: number;
	textSize: number;
};

type areaOfString = {
	[key in keyof AreaOfNum]: string;
};

//
type Area<T> = {
	[key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
	height: "10",
	width: 10,
};
