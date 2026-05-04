// arrow function, normal function

function addition(num1: number, num2: number): number {
	return num1 + num2 + 5 + "10";
}

addition(12, "24");

// object => function => (method)
const userBalance: {
	name: string;
	currentBalance: number;
	addBalance: (value: number) => number;
} = {
	name: "tashrif",
	currentBalance: 0,
	addBalance(value: string): number {
		return this.currentBalance + value;
	},
};

userBalance.addBalance("1000");

//

const sqr: number[] = [1, 2, 3, 4];

sqr.map((element: number): number => {
	return element * element;
});
