// In order to use the push array method. you have to put it with the array elemetn like this. name.push()
//push method will allow you to add additional index or character at the END.
//example.

const students = ["annika", "yunah", "wilbert", "anne"];
students.push("zjarrell");

console.log(students);

const cars = ["honda", "toyota", "suzuki"];
cars.push("geely");
console.log(cars);

//lets try it to combine with user input

//input will be coming from a user using prompt

let feelings = Number(
  prompt(
    "In a scale of 1 to 10. Where 10 is the highest. How would you describe you feelings right now?"
  )
);

switch (feelings) {
  case 10:
  case 9:
  case 8:
    alert("Its nice to hear that!");
    break;
  case 7:
  case 6:
  case 5:
    alert("I hope you will be fine soon!");
  case 4:
  case 3:
  case 2:
    alert("Are you sure you want to continue taking this exam?");
  case 1:
  case 0:
    alert("Lets reschedule your exam some day.");
  default:
    alert("I did get the right answer");
}
