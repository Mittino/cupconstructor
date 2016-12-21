// Write a constructor to model a bank account. Bank accounts belong to an accountHolder, has an accountType and a balance. The accountHolder should be a String holding the customers name, the accountType should be a String as well, the balance should be a Number. None of these fields should be modifiable by an outside entity, instead each should be accessed via setters and getters.
//
// Additionally, make a method called purchase which allows a user to make a purchase and subtract it from their balance. Once you have this working, add additional logic so that a balance cannot go negative and instead the code emits a message like "you can't do that" using console.log.
'use strict';

function bankAccount(accountHolder, accountType, balance){

  if (typeof accountHolder !== 'string'){
    console.log('Account Holder must be a string');
  } else {
    this.accountHolder = accountHolder;
  } if (typeof accountType !== 'string'){
    console.log('Account Type must be a string');
  } else {
    this.accountType = accountType;
  } if (Number.isInteger(balance)){
    this.balance = balance;
  } else {
    console.log('Balance must be a number');
  }
}

bankAccount.prototype.purchase = function purchase(amount){
  if (!Number.isInteger(amount)){
    console.log('amount must be a number');
  } else if (this.balance < amount){
    console.log("you can't do that");
  } else {
    this.balance = this.balance - amount;
  }
};

bankAccount.prototype.deposit = function deposit(amount){
  if (!Number.isInteger(amount)){
    console.log('deposit amount must be a number');
  } else {
      this.balance = this.balance + amount;
  }
};

var susieAccount = new bankAccount('Susie', 'Checking', 50);
console.log(susieAccount);
// var bobAccount = new bankAccount(12, 20, '20');
// console.log(bobAccount);
susieAccount.purchase(20);
console.log(susieAccount);
susieAccount.purchase(10);
console.log(susieAccount);
susieAccount.purchase(10);
console.log(susieAccount);
susieAccount.deposit(100);
console.log(susieAccount);
