let years = [2015, 2016, 2017, 2018, 2019, 2020];
let menu = ["pizza", "pasta", "salad", "soup"];

for (item in menu) {
  console.log(menu[item]);
}

for (let i = 0; i < years.length; i++) {
  console.log(years[i]);
}

menu.forEach((item) => {
  console.log(item);
});

years.map((year) => {
  console.log(year);
});

let something = true;
if (something) {
  // doSomething();
} else {
  // doSomethingElse();
}

//--------------------------------------------

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.lineWidth = 4;
const width = 60;
const height = 60;
const gap = 20;
let x, y;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 100 + (width + gap) * i;
    y = 100 + (height + gap) * j;

    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();

    if (Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke();
    }
  }
}
