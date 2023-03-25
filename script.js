"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP



// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = " "; // innterHtml is bit similar to text context . innterHTML return everything including the html , but here  it is used as a setter
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
 </div>
 `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];

////////////////////////////////////////////////////Slice Method ////////////////////////////////
console.log(arr.slice(2)); // this retures new arrya but only the extracted part



console.log(arr.slice(2, 4));
console.log(arr.slice(-1)); // thats how we can take last element

console.log(arr.slice(1, -2)); // -2 will extract except the last two element
console.log(arr.slice()); // when  you want to change multiple method here then  use slice mehtod
console.log([...arr]);
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////Splice Method /////////////////////////////////////

// console.log(arr.splice(-1)); // In Splice Method the Extracted Method got remove from the original Array
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

const arr2 = ["j", "i", "h", "g", "j"];
console.log(arr2.reverse());
console.log(arr2); // so this reverse method  manipulated the original array (arr2)

///////////////////////////////////////////Concat  Method /////////////////////////////////////

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

///////////////////////////////////////////Join  Method /////////////////////////////////////

console.log(letters.join(" - "));
*/
///////////////////////////////////////////  Looping Arrays_For EAch /////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(` Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(` Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("   -------------ForEach------------     ");
movements.forEach(function (mov, i, arr) {
  // here the name doesn't matter but what  matter is the order  , the  first one is the Current Element , the seconed one is index and the
  // thrid one is the entire arrya
  if (mov > 0) {
    console.log(` Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(` Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// on iteration 0 : function(200) this  will call the value of 200
// on iteration 1 : function(450) this  will call the value of 450
// so on and so forth

///////////////////////////////////////////  Looping Arrays_For EAch on maps and sets /////////////////////////////////////
//Maps
/*
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "EURO"],
  ["GBP", "Pound Sterling "],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// sets
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
