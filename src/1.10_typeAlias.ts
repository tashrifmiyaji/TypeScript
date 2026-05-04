// type alias of object
type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";
    contactNo: string;
    address: {
        division: string;
        city: string;
    }
}

const user1: User = {
    id: 123,
    name: {
        firstName: "tashrif",
        lastName: "ahmed",
    },
    gender: "male",
    contactNo: "017710000",
    address: {
        division: "chattogram",
        city: "cumilla"
    }
}

const user2: User = {
    id: 123,
    name: {
        firstName: "ishrat",
        lastName: "ishu",
    },
    gender: "female",
    contactNo: "017710000",
    address: {
        division: "chattogram",
        city: "cumilla"
    }
}

// type alias of function

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2)  => num1 + num2
add(4,4)