// Use as const instead of Enum (recommended)
// as const assertion

// enum UserRoles {
// 	Admin = "Admin",
// 	Editor = "Editor",
// 	Viewer = "Viewer",
// }

const UserRoles = {
	Admin: "Admin",
	Editor: "Editor",
	Viewer: "Viewer",
} as const;

const canEdit = (role: keyof typeof UserRoles) => {
	if (role === UserRoles.Admin || role === UserRoles.Editor) {
		return true;
	} else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);

//
const UserRoles2 = {
	Admin: "ADMIN",
	Editor: "EDITOR",
	Viewer: "VIEWER",
} as const;

const canEdit2 = (role: (typeof UserRoles2)[keyof typeof UserRoles2]) => {
	if (role === UserRoles2.Admin || role === UserRoles2.Editor) {
		return true;
	} else return false;
};

const isEditPermissible2 = canEdit2(UserRoles2.Admin);
console.log(isEditPermissible2);
