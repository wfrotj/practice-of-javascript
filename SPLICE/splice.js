//splice method in an array allows you to remove the specific index/character by putting the start index and indicate how many items you want to remove
//example

const vegetables = ["carrot", "cabbage", "lettuce"];

vegetables.splice(0, 1);
console.log(vegetables);

const animals = ["cow", "pig", "dog"];
animals.splice(0, 1);
console.log(animals);

//slice method in an array allows you to remove index/character by putting index number
//example
/*
const friends = ["ayeh", "monja", "crispin"];

console.log(friends.splice(0, 2));

const shapes = ["circle", "square", "diamond"];

console.log(shapes);*/

const mammals = ["cow", "pig", "dog"];

console.log(mammals.slice(0, 1));
