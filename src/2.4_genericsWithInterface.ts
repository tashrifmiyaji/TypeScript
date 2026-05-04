interface Developer<T, X=null> {
	name: string;
	salary: number;
	device: {
		brand: string;
		model: string;
		releasedYear: string;
	};
	smartWatch: T;
	bike?: X;
}

const developer1: Developer<{ heartRate: string; stopWatch: boolean }> = {
	name: "mr.x",
	salary: 200,
	device: {
		brand: "lenovo",
		model: "A24",
		releasedYear: "2015",
	},
	smartWatch: {
		heartRate: "180",
		stopWatch: true,
	},
};

const developer2: Developer<
	{
		heartRate: string;
		callSupport: boolean;
		calculator: boolean;
		aiFeature: boolean;
	},
	{ brand: string; engineCapacity: string }
> = {
	name: "mr.y",
	salary: 200,
	device: {
		brand: "hp",
		model: "G-100",
		releasedYear: "2030",
	},
	smartWatch: {
		heartRate: "180",
		callSupport: true,
		calculator: true,
		aiFeature: true,
	},
    bike: {
        brand: "suzuki",
        engineCapacity: "400 cc"
    }
};
