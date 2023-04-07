/*let admin;
let name = "John";

admin = name;

alert(admin);

let thePlanetEarth = "Earth";
let currentUserName = "John";

const BIRTHDAY = "08-05-1989";
let age = computeAge(BIRTHDAY);

-+, -, 

let x = 10;
x = x / 2;

console.log(x);
alert(x);

let x = "10"; /*string concatenation- its a series of character */
/*let y = "20";
let z = "The result is: " + x + y;
console.log(z);
*/
/*
let x = 10;
let y = 20;
let z = x === y;
console.log(z);

let a = true;
let b = false;
let result = true && false;// && basta may mag false kahit alin jan magging false.

console.log(result);

0 means false
let result = !; ! or not means nirereverse nya ung value.

console.log(result);


let user = "wfrotj";
let result = user ?? undefined;

console.log(result); //nullish coalescing.

let isUserLoggedIn = false;
let  usernameandPasswordIsNotRegistered = false;
if (isUserLoggedIn) {
  console.log("Homepage");
} else {
  console.log("Login Page");
} else if (usernameandPasswordIsNotRegistered) {
     console.log("Registration page")
} else { console.log("Login page")};
-------------------

let year = prompt("In which year was the ECMASCRIPT-2015 specs published?");

if ((year = 2015)) {
  alert("You guessed it right!");
} else {
  alert("Try again next time!");
} 

let year = prompt("In which year was the ECMASCRIPT-2015 specs published?");

if (year < 2015) {
  alert("You guessed it right!");
} else if (year > 2015) {
  alert("That is to late");
} else {
  alert("Exactly!");
} 

let accessAllowed;
let age = prompt("How old are you?");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
console.log(accessAllowed);  

let age = prompt("What is your age?");

if (age < 3) {
  console.log("Toddler");
} else if (age > 3 && age 10) {
  console.log("Kids");
} else if (age > 10 && age < 19) {
  console.log("teenagers");
} else if (age > 19 && age < 29) {
  console.log("Young adults");
} else {
  console.log("Adult");
}
*/

/*
let grade = prompt("What is your grade?");

if (grade >= 98 && 100 <= 100) {
     console.log("With Highest Honors")
} else if (grade 95-97) {
     console.log("With High Honors");
} else if (grade 90-94) {
     console.log("With Honors")
}

This is the correct one
let grade = prompt("Enter your grade:");

if (grade >= 98 && grade <= 100) {
  console.log("Highest Honors");
} else if (grade >= 95 && grade <= 97) {
  console.log("High Honors");
} else if (grade >= 90 && grade <= 94) {
  console.log("Honors");
} else {
  console.log("Bawi next life");
}

let currentDay = prompt("What is the current day?");



if (currentDay = "Sunday"){
     console.log("It's Sunday, time to relax!")
} else if (currentDay == "Monday") {
     console.log("Happy Monday");
} else if (currentDay == "Tuesday"){
     console.log("It's Tuesday. You got this!")
} else if (currentDay == "Wednesdau") {
     console.log("Hump day already!")
}

switch (currentDay) {
     case "Sunday";
     console.log("It's Sunday, time to relax")
}-------

let grade = prompt("What is your grade?");

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    85;
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}


let month = prompt("What case do you want?");

switch (month) {
  case 0:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Summer");
  case 6:
  case 7:
  case 8:
    console.log("Spring");
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Something went wrong");
}


const squared = (number) => {
  return (x = number * number);
};

console.log(squared(5));

const isTodayThursday = () => {
  const date = new Date();
  let day = date.getDay();

  return day === 4;
};

console.log(isTodayThursday());
*/
/*
let grade = prompt("what is your grade?");

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  default:
    console.log("F for fota");
}*/
/*
----------------
const button = document.getElementById("mybtn");
const name = prompt("what is your name?");
const intro = `It's a pleasure to meet you, ${name}`;
alert(intro);

function greet() {
  const x = `Thank you for submmitting your report, ${name}`;
  alert(x);
}

button.addEventListener("click", greet);

const grade = Number(prompt("what is your grade?"));

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  case grade >= 0:
    console.log("F");
  default:
    alert("I did not receive right information");
}

const month = prompt("what your birth month?");

switch (true) {
  case 0:
    console.log("Happy new year!");
    break;
  case 1:
    console.log("Happy hearts day!");
    break;
  case 2:
    console.log("Its summer time!");
    break;
  case 3:
    console.log("April fools!");
    break;
  case 4:
    console.log("Its may time festival");
    break;
}*/

/*

const surname = (str) => {
  let lastName = str.toLowerCase();
  return lastName.toUpperCase();
};

console.log(surname("rodrigo"));

const middle = (str) => str.charAt(str.length - 2);

console.log(middle("abcd"));*/
/*
const input = (str) => {
  let name = str.toLowerCase();
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(input("wilbert"));

function reverseString(str) {
  let result = "";

  for (let i = str.length; i >= 0; i--) {
    result = result + str.charAt(i);
  }
  return result;
}
console.log(reverseString("bert"));

const cars = ["Saab", "Volvo", "Honda", "BMW", "Toyota"];

console.log(cars[4]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);

const citrus = fruits.slice(2);

console.log(citrus);*/

/*
fruits.pop()//deleting the last value in an array
fruits.unshift()//adding value at the beginning of  an array
fruits.shift()//deleting the first value in an array
fruits.push()//addign value at the ending in an array
fruits.splice()//deleting item in an array in any position just indicate the loctation
fruits.slice()// the main difference between slice and splice is . The slice method remove the idex and you should input the start index and the end. however splice is you have to input the start index and how many items you want to get.
fruits.join()//combine all values of an array
fruist.reverse()//reverse the character.*/
/*
const array1 = ["helmet", "Accesssories", "Parts"];
const array2 = ["arai", "hjc", "ls2", "agv"];
const array3 = ["Manila", "Quezon", "Makati"];

const myArray = array1.concat(array2).concat(array3);
const newArray = myArray.flat();

console.log(newArray);

const nickName = (str) => {
  let result = "";

  for (i = 0; i >= i; i++);
  return result;
};

console.log(nickName("wilbert"));

array1.reverse();
console.log(array1);*/

const cars = ["honda", "suzuki", "toyota"];

for (const car of cars) {
  console.log(car);
}

cars.reverse();
console(cars.join(" "));

function reverseString(str) {
  let result = "";
  for (i = str.length; i >= 1; i++) {
    result = result + str.charAt(i);
  }
  return result;
}

console.log(reverseString("wilbert"));

function reverseString(str) {
  let result = "";

  for (let i = str.length; i >= 0; i--) {
    result = result + str.charAt(i);
  }
  return result;
}
console.log(reverseString("bert"));

const name = (str) => {
  let nick = str.toLowerCase();
  str.toLowerCase;
};

function reverseStrin(str) {
  let result = "";
  for (let i = str.length - 1; i <= 0; ) {
    result = result + str.charAt(i);
  }
  return result;
}
console.log(reverseString("john"));
