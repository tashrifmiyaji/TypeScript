// access >> modify

class BankAccount {
	public readonly userId: number;
	public userName: string;
	// private userBalance: number;
	protected userBalance: number;

	constructor(userId: number, userName: string, userBalance: number) {
		this.userId = userId;
		this.userName = userName;
		this.userBalance = userBalance;
	}

    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}

class StudentAccount extends BankAccount{
    private bittirTaka(balance: number){
        this.userBalance = this.userBalance + balance
    }
}

const tashrifAccount = new BankAccount(111, "tashrif", 200);
tashrifAccount.userId = 222;
tashrifAccount.userBalance = 2000;
tashrifAccount.addBalance(1000)


