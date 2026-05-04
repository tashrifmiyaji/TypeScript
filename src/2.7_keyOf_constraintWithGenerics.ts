// keyOf operator
type ReachPeople = {
	bike: string;
	car: string;
	cng: string;
};

type PoorPeople1 = "bike" | "car" | "cng";
type PoorPeople2 = keyof ReachPeople;

const MyVehicle: PoorPeople1 = "bike";
const MyVehicle1: PoorPeople2 = "bike";

const MyVehicle2: PoorPeople2 = "yot";

//
type User = {
	id: number;
	name: string;
	address: {
		city: string;
	};
};

const user: User = {
	id: 123,
	name: "tashrif",
	address: {
		city: "cumilla",
	},
};

const myId = user.name;
const myName = user["name"];
const myAddress = user["address"];
const myCity = user["address"]["city"];

const getPropertyFromFunc = (obj: User, key: keyof User) => {
	return obj[key];
};

const result1 = getPropertyFromFunc(user, "emni");

const product = {
    brand: "HP"
}
const result2 = getPropertyFromFunc(product, "emni");


// generic
const getPropertyFromFunc2 = <T>(obj: T, key: keyof T) => {
	return obj[key];
};

const result3 = getPropertyFromFunc2(user, "name");
const result4 = getPropertyFromFunc2(product, "brand");