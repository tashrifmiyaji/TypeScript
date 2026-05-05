let anything: any;

anything = 2000;

// (anything as number).toFixed(); // right
// (anything as string).toUpperCase(); // wrong


///
const kgToGmConverter = (input: number | string): number | string | undefined=> {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `converted output is ${Number(value) * 1000}`
    }
}

const result1 = kgToGmConverter(2) as number;
const y =result1.toFixed(2)

const result2 = kgToGmConverter("2 kg") as string;
const x = result2.toUpperCase()

console.log({result1}, {result2});
