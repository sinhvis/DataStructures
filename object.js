function Checking(amount) {
	this.balance = amount ; // property
	this.deposit = deposit ; // function
	this.withdraw = withdraw ; // function
	this.toString = toString ; // function
}

function deposit(amount) {
	this.balance += amount ;
}

function withdraw(amount) {
	if (amount <= this.balance) {
		this.balance -= amount ;
	}
	if (amount > this.balance) {
		print("Insufficient funds") ;
	}
}

function toString() {
	return "Balance: " + this.balance ;
}


var account = new Checking(500) ;
account.deposit(1000) ;
print(account.toString()) ;
account.withdraw(750) ;
print(account.toString()) ;
account.withdraw(800) ;
print(account.toString()) ;
