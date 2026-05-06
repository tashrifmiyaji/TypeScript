// type guard
// in, typeof

const add = (num1: number | string, num2: number | string) => {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 + num2;
	} else {
		return num1.toString() + num2.toString();
	}
};

const add1 = add(2, 2);
const add2 = add("2", 3);
const add3 = add(2, "4");
const add4 = add("2", "5");
console.log(add1, add2, add3, add4);

// in guard

type TNormalUser = {
	name: string;
};

type TAdminUser = {
	name: string;
	role: "Admin";
};

const getUserInfo = (user: TNormalUser | TAdminUser) => {
	if ("role" in user) {
		console.log(`This ${user.name}'s role is ${user.role}`);
	} else {
		console.log(`${user.name} is normal user!`);
	}
};

getUserInfo({ name: "mr.x" });
getUserInfo({ name: "mr.x", role: "Admin" });
