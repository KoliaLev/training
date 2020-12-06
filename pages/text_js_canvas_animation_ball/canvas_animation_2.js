var canvas2 = document.getElementById("canvas-2");
var ctx2 = canvas2.getContext("2d");

const width = canvas2.width;
const height = canvas2.height;

// рисуем круг
const circle2 = function (x, y, radius, fillCircle) {
  ctx2.beginPath();
  ctx2.arc(x, y, radius, 0, Math.PI * 2, fillCircle);
  if (fillCircle) {
    ctx2.fill();
  } else {
    ctx2.stroke();
  }
};

const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

const ramdomColor = function () {
  return colors[Math.floor(Math.random() * colors.length)];
};

// конструктор мяча
const Ball = function (x, y) {
  this.x = x;
  this.y = y;
  this.xSpeed = Math.random() * 10 - 5;
  this.ySpeed = Math.random() * 10 - 5;
  this.color = ramdomColor();
};

Ball.prototype.draw = function () {
  ctx2.fillStyle = this.color;
  circle2(this.x, this.y, 3, 1);
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkColision = function () {
  if (this.x > width - 1 || this.x < 1) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y > height - 1 || this.y < 1) {
    this.ySpeed = -this.ySpeed;
  }
};

const ball = [];
// var ball2 = new Ball(100, 200);
// var ball3 = new Ball(250, 250);

const balls = function (maxBall) {
  for (var i = 0; i < maxBall; i++) {
    ball[i] = new Ball(i * 10, i * 10);
    ball[i].draw();
    // console.log(ball[i]);
  }
};

balls(40);

console.log(ball.length);

setInterval(function () {
  ctx2.clearRect(0, 0, width, height);

  for (let j = 0; j < ball.length; j++) {
    ball[j].draw();
    ball[j].move();
    ball[j].checkColision();
  }

  ctx2.strokeRect(0, 0, width, height);
}, 30);
