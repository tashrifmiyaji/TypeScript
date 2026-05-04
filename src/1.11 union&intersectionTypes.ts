// union |

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
	if (role === "admin") {
		return "admin dashboard";
	} else if (role === "user") {
		return "user dashboard";
	} else {
		return "guest dashboard";
	}
};

getDashboard("guest");

// intersection &

type Employee = {
    id: number;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const tashrifMiyaji: EmployeeManager = {
    id: 123,
    name: "tashrif",
    phoneNo: "01771000",
    designation: "manager",
    teamSize: 8
}

