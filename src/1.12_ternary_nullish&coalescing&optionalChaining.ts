// ?  ternary operator : decision making
// ??  nullish coalescing operator : null/undefined
// ? optional chaining

// ternary operator
const biyerJonnoEligible = (age: number) => {
    if (age >= 21) {
      console.log("You are eligible");
    } else {
      console.log("You are not eligible !");
    }

  const result = age >= 21 ? "You are eligible" : "You are not eligible !";

  console.log(result);
};

biyerJonnoEligible(21);


// nullish coalescing operator
const userTheme = "Green theme";
const userTheme1 = undefined;
const userTheme2 = null;

const selectedTheme = userTheme ?? "Light theme";
const selectedTheme1 = userTheme1 ?? "Light theme";
const selectedTheme2 = userTheme2 ?? "Light theme";
console.log(selectedTheme, selectedTheme1, selectedTheme2);

const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";
const resultWithNullish =  isAuthenticated ?? "Light theme";

console.log({ resultWithTernary }, { resultWithNullish });


//optional chaining
const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);