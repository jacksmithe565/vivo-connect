/* 

Filename: SophisticatedCode.js

Description: This code is a complex implementation of a virtual banking system. It simulates user transactions, account management, and generates various financial reports.

*/

// Define Constants
const MINIMUM_BALANCE = 100;
const OVERDRAFT_FEE = 25;

// Define Global Variables
let users = [];
let transactions = [];

// Define User class
class User {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  // User transaction methods
  withdraw(amount) {
    if (this.balance - amount >= MINIMUM_BALANCE) {
      this.balance -= amount;
      transactions.push(`Withdrawal: ${amount}`);
      return true;
    } else {
      console.log("Insufficient balance.");
      return false;
    }
  }

  deposit(amount) {
    this.balance += amount;
    transactions.push(`Deposit: ${amount}`);
  }
}

// User creation and management
function createUser(name, initialAmount) {
  const user = new User(name, initialAmount);
  users.push(user);
  return user;
}

function findUser(name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() === name.toLowerCase()) {
      return users[i];
    }
  }
  return null;
}

function deleteUser(name) {
  const user = findUser(name);
  if (user) {
    users.splice(users.indexOf(user), 1);
    return true;
  }
  return false;
}

// Generate financial reports
function generateTransactionReport() {
  console.log("Transaction Report:");
  for (let i = 0; i < transactions.length; i++) {
    console.log(`- ${transactions[i]}`);
  }
}

function generateUserReport() {
  console.log("User Report:");
  for (let i = 0; i < users.length; i++) {
    console.log(`- Name: ${users[i].name}, Balance: ${users[i].balance}`);
  }
}

// Example Usage
createUser("John Doe", 500);
createUser("Jane Smith", 1000);

const john = findUser("John Doe");
john.withdraw(200);
john.deposit(100);

const jane = findUser("Jane Smith");
jane.withdraw(300);
jane.deposit(200);

deleteUser("Jane Smith");
generateTransactionReport();
generateUserReport();
