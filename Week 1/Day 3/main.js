// Prints to the console
console.log('Hello we are connected!');

// Variables in JS

// let can be reassigned
let a = 0;
console.log(a);
a = 'Hello World!';
console.log(a);

// const can't be reassigned
const myName = 'Aaron';
console.log(myName);

// Uncaught TypeError: Assignment to constant variable.
// myName = 'Aaron';
// console.log(myName);

// var
// We ignore var for the most part

// Data Types in JavaScript

// Primitives
// Stored in the location on the stack

// string
// number
// boolean
// null (intentionally empty value)
// undefined (variable unassigned)

// Reference
// Dynamically allocated memory
// A pointer to a location memory

// arrays
// object
// literals
// everything else

// JavaScript itself is loosely typed
let variable = 0;
console.log(variable);
variable = 'A string';
console.log(variable);
// number variable became a string

// String Concatenation and Methods

// const firstName = 'Aaron';
// const lastName = 'Gonzalez';
// const age = 21;
// const greeting = 'Hello my name is Aaron';
// const tags = 'software, programming, engineering';

// let fullName = firstName + lastName;
// console.log(fullName);

// let newFullName = firstName + ' ' + lastName;
// console.log(newFullName);

// Appending
let val;
val = 'John ';
val += 'Doe';
console.log(val);

// ToUpperCase
let city = 'johannesburg';
let city2 = 'cape town';
val = city.toUpperCase();
console.log(city);
console.log(val);

// ToLowerCase
let town = 'BENONI';
val = town.toLowerCase();
console.log(town);
console.log(val);

// Index of a character in a string
let index = town.charAt(2);
console.log(index);

// get substrings
console.log(town.substring(0, 3));
console.log(town.substring(3, 6));

// slice strings
let longWord = 'antidiestablishmentarianism';
console.log(longWord.slice(0, 5));
console.log(longWord.slice(-5));

// includes()
console.log(longWord.includes('est'));
console.log(longWord.includes('zzz'));

// Template Literals

const firstName = 'Aaron';
const lastName = 'Gonzalez';
const age = 21;
const greeting = 'Hello my name is Aaron';
const tags = 'software, programming, engineering';

let html;

html = `
  <ul>
    <li> First Name: ${firstName}</li>
    <li> Last Name: ${lastName}</li>
    <li> Age: ${age}</li>
    <li> Greeting: ${greeting}</li>
    <li> Tags: ${tags}</li>
  </ul>
`;

document.body.innerHTML = html;

// Math Object

// Math is an object which means it has methods

// Eulors Number
val = Math.E;
console.log(val);
val = Math.PI;
console.log(val);

val = Math.round(2.4);
console.log(val);
val = Math.round(2.8);
console.log(val);
val = Math.ceil(2.4);
console.log(val);
val = Math.floor(2.8);
console.log(val);
val = Math.abs(-28);
console.log(val);
val = Math.pow(2, 8);
console.log(val);

// Truthy and falsy checks

let item = true;
item = null;
item = 0;
item = 1;
item = 'Hello';

if (item) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// IF statements & Comparative operators
let id = '100';

// Equal to
// double equals for value match, triple equals for data type as well
if (id == 100) {
  console.log("You're and ID");
}

// Not Equal to
if (id !== 100) {
  console.log("You're and ID");
}
// Greater than
// >
// Greater than & equal
// >=
// Less than
// <
// Less than and equal
// <=

// AND &&
if (id == 100 && id !== '100') {
  console.log('Hello');
}

// Terniary Operator
let number = 80;
console.log(number == 80 ? 'Hello' : 'Not hello');

let color = 'blue';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  case 'yellow':
    console.log('Color is yellow');
    break;
  default:
    console.log('No color match');
    break;
}

// Arrays

let array = [
  // 'Hello there',
  // {
  //   name: 'Aaron',
  // },
];
array.push(1, 2, 3, 4, 5);
console.log(array);

const length = array.length;
console.log(length);

array.pop();
console.log(array);

array.push('Hello');
console.log(array);

// Objects

let person = {
  name: 'Aaron',
  surname: 'Gonzalez',
  cellPhone: 'Apple',
  getPhoneType: function () {
    return this.cellPhone;
  },
};

console.log(person);
console.log(person.name);
console.log(person.surname);
console.log(person.cellPhone);
// does not execute function
console.log(person.getPhoneType);
// executed the function
console.log(person.getPhoneType());

console.log('Object Keys');
console.log(Object.keys(person));

// For loop
for (let i = 0; i < 10; i++) {
  console.log("I'm at index number: ", i);
}

// While loop
value = 10;
while (value < 20) {
  console.log(`Hello I am value number: ${value}`);
  value += 1;
}

// Sheep example:
for (let i = 0; i < 5; i++) {
  console.log(`Sheep Number: ${i + 1}`);
}

// Functions

// A block a code written for a specific task
// Call your function to execute it
// Can optionally take in parameters

console.log('Functions');

// Function Declaration

function greetMe() {
  console.log('I am saying hello!');
}

greetMe();

function greetMeByName(name) {
  console.log(`Hello: ${name}!`);
}

greetMeByName();
greetMeByName('Aaron');

color = 'blue';

function getColor(color) {
  switch (color) {
    case 'red':
      console.log('Color is red');
      break;
    case 'blue':
      console.log('Color is blue');
      break;
    case 'yellow':
      console.log('Color is yellow');
      break;
    default:
      console.log('No color match');
      break;
  }
}

// No
getColor;
getColor();
getColor(777);
// Yes
getColor(color);
getColor('red');

function concatenateTwoString(string1, string2) {
  return string1 + ' ' + string2;
}

let answer = concatenateTwoString('Hello', 'World!');
console.log(answer);

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray);

// Filter out all even values form this array
let newMyArray = myArray.filter((num) => {
  return num % 2;
});

console.log(newMyArray);

let eight = 8;
let anotherArray = myArray.filter((x) => {
  // return x != 8;
  return x != eight;
});
console.log(anotherArray);

let anotherSillyArray = myArray.filter((x) => x != eight);
console.log(anotherSillyArray);

let todaysDate = new Date();
console.log(todaysDate);

let day = todaysDate.getDay();
console.log('Day: ', day);
let month = todaysDate.getMonth();
// getMonth() return index out of range by 1 value
console.log('Month: ', month + 1);

let year = todaysDate.getFullYear();
console.log('Year: ', year);

function printDate() {
  let now = new Date();
  day = now.getDay();
  console.log(now.getUTCDate());
  // getDay gives the day of the week ie: 3 = Wednesday
  month = now.getMonth();
  // getMonth gives the month but index starts at 0
  year = now.getFullYear();
  console.log('Day: ', day);
  console.log('Month: ', month);
  console.log('Year: ', year);
  console.log(year + '/' + month + '/' + day);
  console.log('Full Date: ', now);

  // Notice the day and month return differently because of how JS works with dates
  // To get todays date exactly we have to convert from the response

  console.log(now.getUTCDate() + '/' + (month + 1) + '/' + year);
}

printDate();

function isPerfectSquare(val) {
  return Math.sqrt(val) % 1 == 0;
}

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(2));
console.log(isPerfectSquare(3));
console.log(isPerfectSquare(4));

for (let i = 0; i < 100; i++) {
  console.log(i);
  console.log(isPerfectSquare(i));
}