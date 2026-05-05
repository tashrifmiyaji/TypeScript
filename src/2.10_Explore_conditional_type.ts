// conditional type

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

//
type RichPeoplesVehicle = {
	bike: string;
	car: string;
	yot: string;
};

type checkVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type hasBike = checkVehicle<"bike">;
