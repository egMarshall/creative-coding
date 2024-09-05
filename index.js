let x = 5;
let year = 2024;
let nextYear = year + 1;

let dinner = "pizza";
let sentence = "I am going to eat " + dinner + " for dinner.";

function add(a, b) {
  return a + b;
}

let multiply = (a, b) => {
  return a * b;
};

console.log(add(3, 4));
console.log(multiply(3, 4));

//--------------------------------------------

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.fillStyle = "blue";
// context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
context.beginPath();
context.rect(100, 100, 400, 400);
context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();
