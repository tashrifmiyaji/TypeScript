// set of fixed string lateral er jaygay rakhe.
// and enum is not recommended!

type UserRoles = "Admin" | "Editor" | "Viewer";

const canEdit = (role: UserRoles) => {
	if (role === "Admin" || role === "Editor") {
		return true;
	} else return false;
};

const isEditPermissible = canEdit("Admin");

// enum
enum UserRoles2 {
	Admin = "admin",
	Editor = "editor",
	Viewer = "viewer",
}

const canEdit2 = (role: UserRoles2) => {
	if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
		return true;
	} else return false;
};

const isEditPermissible2 = canEdit2(UserRoles2.Admin);

console.log(isEditPermissible2);
