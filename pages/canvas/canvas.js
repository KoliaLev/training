var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

for (var i = 0; i < 3; i++) {
  ctx.fillRect(10 * i, 10 * i, 10, 10);
}

// рисунок робот
// ctx.fillRect(100, 10, 50, 50);
// ctx.fillRect(120, 60, 10, 20);
// ctx.fillRect(90, 80, 70, 70);
// ctx.fillRect(70, 80, 20, 10);
// ctx.fillRect(160, 80, 20, 10);
// ctx.fillRect(90, 150, 10, 40);
// ctx.fillRect(150, 150, 10, 40);

// ctx.fillStyle = "red";
// ctx.fillRect(100, 100, 50, 50);
//////////////////

//////// часы
ctx.lineWidth = 2;
ctx.strokeStyle = "Green";

var s = 1;
function sek() {
  ctx.beginPath();
  ctx.arc(100, 100, 50, (Math.PI * 3) / 2, (Math.PI * 3) / 2 + (s * (Math.PI * 2)) / 60, false);
  ctx.stroke();
  s++;
}

setInterval(sek, 1000);
/////////////////////////

// var circle = function (x, y, radius) {
//   ctx.beginPath();
//   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//   ctx.stroke();
// };

// ctx.lineWidth = 4;
// ctx.strokeStyle = "Red";
// circle(100, 100, 10);
// ctx.strokeStyle = "Orange";
// circle(100, 100, 20);
// ctx.strokeStyle = "Yellow";
// circle(100, 100, 30);
// ctx.strokeStyle = "Green";
// circle(100, 100, 40);
// ctx.strokeStyle = "Blue";
// circle(100, 100, 50);
// ctx.strokeStyle = "Purple";
// circle(100, 100, 60);
