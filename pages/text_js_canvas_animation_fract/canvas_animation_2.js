// рисуем фрактал

var canvas2 = document.getElementById("canvas-2");
var ctx2 = canvas2.getContext("2d");

const width = canvas2.width;
const height = canvas2.height;

// рисуем круг
const circle2 = function (x, y, radius) {
  if (radius) {
    ctx2.beginPath();
    ctx2.arc(x, y, radius, 0, Math.PI * 2);
    ctx2.fill();
  } else {
    ctx2.beginPath();
    ctx2.arc(x, y, 1, 0, Math.PI * 2);
    ctx2.fill();
  }
};

ctx2.fillStyle = "red";
var a1 = 30;
var a2 = 50;
var a = circle2(a1, a2, 3);

var b1 = 1200;
var b2 = 100;
var b = circle2(b1, b2, 3);

var c1 = 720;
var c2 = 1400;
var c = circle2(c1, c2, 3);

x1 = 50;
x2 = 300;
var xRamdom = circle2(x1, x2, 4);


ctx2.fillStyle = "black";

setInterval(function () {
  var i = Math.floor(Math.random() * 3);
  // console.log(i);

  if (i === 0) {
    x1 = (x1 + a1) / 2;
    x2 = (x2 + a2) / 2;
    circle2(x1, x2);
    // console.log("a");
  }
  if (i === 1) {
    x1 = (x1 + b1) / 2;
    x2 = (x2 + b2) / 2;
    circle2(x1, x2);
    // console.log("b");
  }
  if (i === 2) {
    x1 = (x1 + c1) / 2;
    x2 = (x2 + c2) / 2;
    circle2(x1, x2);
    // console.log("c");
  }

  // console.log(x1 + " " + x2);
}, 30);
