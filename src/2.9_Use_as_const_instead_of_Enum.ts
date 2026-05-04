// Use as const instead of Enum (recommended)
// as const assertion

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