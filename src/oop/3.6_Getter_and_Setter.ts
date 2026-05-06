// getter
// setter

// class BankAccount {
// 	public readonly userId: number;
// 	public userName: string;
// 	private userBalance: number;

// 	constructor(userId: number, userName: string, userBalance: number) {
// 		this.userId = userId;
// 		this.userName = userName;
// 		this.userBalance = userBalance;
// 	}

//     // balance ke set kortese
//     addBalance(balance: number){
//        return this.userBalance = this.userBalance + balance
//     }

//     // get korbo
//     getBalance(){
//         return this.userBalance
//     }
// }

// const tashrifAccount = new BankAccount(111, "tashrif", 200);
// tashrifAccount.addBalance(1000) // function call korte hocce
// console.log(tashrifAccount.getBalance()); // function call korte hocce


//
class BankAccount {
	public readonly userId: number;
	public userName: string;
	private userBalance: number;

	constructor(userId: number, userName: string, userBalance: number) {
		this.userId = userId;
		this.userName = userName;
		this.userBalance = userBalance;
	}

	// user of setter
	set addBalance(amount: number) {
		this.userBalance = this.userBalance + amount;
	}

	// use of getter
	get getBalance() {
		return this.userBalance;
	}
}

const tashrifAccount = new BankAccount(111, "tashrif", 200);
tashrifAccount.addBalance = 1000;
console.log(tashrifAccount.getBalance);
