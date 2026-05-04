// js -  object (is js array and object are only object);

// ts: array, tuple, 


let bazarList = ["eggs", "milk", "salt"];
bazarList.push(12)

let bazarList2 = ["eggs", 12, "milk", 1, "salt", 1];
bazarList2.push("sugar", 12)

let bazarList3: (string | number)[] = ["eggs", 12, "milk", 1, "salt", 1];
bazarList3.push(true)

//tuple
let coordinates: [number, number] = [70, 91];
let coordinates2: [number, number] = [70, 91, 1];

let nameAndRoll:[string, string, number] = ["tashrif", "ahmed", 2];
nameAndRoll[0] = 1


// reference type: object
const user: {
    organization : "vromon pramei traveling-group"; // now value is a type too. this is called literal type.
    firstName: string;
    middleName?: string; // middle name is optional.
    lastName: string;
    isMarried: boolean;

} = {
    organization: "vromon pramei traveling-group",
    firstName: "tashrif",
    lastName: "munna",
    isMarried: false,
}

user.organization = "programming hero"
console.log(user);

//
const user2: {
    readonly organization : string; // access modifier.
    firstName: string;
    middleName?: string; // middle name is optional.
    lastName: string;
    isMarried: boolean;

} = {
    organization: "vromon pramei traveling-group",
    firstName: "tashrif",
    lastName: "munna",
    isMarried: false,
}

user2.organization = "programming hero";



