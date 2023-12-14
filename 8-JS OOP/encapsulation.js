
//Create a class
//Encapsulation

class BankAccount {
    constructor(accountNumber,balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Your don't have enough balance.");
        }
    }
    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`
    }
}

const myAccount = new BankAccount("123456", 0);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getAccountInfo());

const newAccount = new BankAccount("12345678", 1000000);
newAccount.deposit(500);
newAccount.withdraw(200);
console.log(newAccount.getAccountInfo());
