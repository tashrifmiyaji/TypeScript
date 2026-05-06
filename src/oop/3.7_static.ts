class Counter {
	count: number = 0;

	increment() {
		return (this.count = this.count + 1);
	}
	decrement() {
		return (this.count = this.count - 1);
	}
}

const instance1 = new Counter(); // ekta memory
console.log(instance1.increment()); // 1
console.log(instance1.increment()); // 1 >> 2
console.log(instance1.increment()); // 2 >>> 3

const instance2 = new Counter(); // rekta different memory
console.log(instance2.increment()); //1
console.log(instance2.increment()); // 2

// static
class CounterWS {
	static count: number = 0;

	static increment() {
		return (CounterWS.count = CounterWS.count + 1);
	}
	static decrement() {
		return (CounterWS.count = CounterWS.count - 1);
	}
}

console.log(CounterWS.increment());
console.log(CounterWS.increment());
console.log(CounterWS.increment());
