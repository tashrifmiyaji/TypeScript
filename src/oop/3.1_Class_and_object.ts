class Animal {
	name;
	species: string;
	sound: string;

	constructor(name: string, species: string, sound: string) {
		this.name = name;
		this.species = species;
		this.sound = sound;
	}

	makeSound() {
		console.log(`${this.name} is making sound ${this.sound}`);
	}
}

const dog = new Animal(0, "dog", "gew dew");
const cat = new Animal("biral vai", "cat", "mew mew");
console.log(cat.sound);
cat.makeSound();

//
class Animal2 {
	constructor(
		public name: string,
		public species: string,
		public sound: string,
	) {}

	makeSound() {
		console.log(`${this.name} is making sound ${this.sound}`);
	}
}
const cat2 = new Animal2("biral vai", "cat", "mew mew");
cat.makeSound();
