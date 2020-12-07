// Летающая пчела

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// var size = 0;
// setInterval(function () {
//     ctx.clearRect(0, 0, 300, 300);
//     ctx.fillRect(200, 200, -size, -size);
//     size++;
//     if (size > 200) {
//         size = 0;
//     }
// }, 30);

////////

// рисуем круг
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, fillCircle);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

// функция для случайного изменения координат
var update = function (coordinate) {
    coordinate += Math.random() * 4 - 2;

    if (coordinate > 280) {
        coordinate -= Math.random() * 2;
    }
    if (coordinate < 20) {
        coordinate += Math.random() * 2;
    }

    return coordinate;
};

// отрисовка пчелы
var drawBee = function (x, y) {
    ctx.lineWidth = 4;
    ctx.fillStyle = "gold";

    circle(x, y, 15, 0);
    circle(x, y, 13, 1);

    circle(x - 10, y - 20, 9, 0);
    circle(x + 10, y - 20, 9, 0);

    circle(x - 4, y, 4, 0);
    circle(x + 4, y, 4, 0);
};

//  конструктор пчелы. получает координаты и рисует пчелу
var Bee = function (x, y) {
    this.x = x;
    this.y = y;

    drawBee(x, y);
};

// Прототип пчелы. сдвиг на случайное небольшое число.
Bee.prototype.fly = function () {
    this.x = update(this.x);
    this.y = update(this.y);
    drawBee(this.x, this.y);

    ctx.strokeRect(0, 0, 300, 300);
};

var bee1 = new Bee(20, 20);
var bee2 = new Bee(100, 100);
var bee3 = new Bee(200, 200);

//  вызываем с интервалом сдвиги трех пчел
setInterval(function () {
    ctx.clearRect(0, 0, 300, 300);
    bee1.fly();
    bee2.fly();
    bee3.fly();
}, 30);

// // Рисуем пчелу
// var drawBee = function (x, y) {
//     ctx.lineWidth = 4;
//     ctx.fillStyle = 'gold';

//     circle(x, y, 15, 0)
//     circle(x, y, 13, 1);

//     circle(x-10, y-20, 9, 0);
//     circle(x+10, y-20, 9, 0);

//     circle(x-4, y, 4, 0);
//     circle(x+4, y, 4, 0);

// }

// ///////////////

// ////////////////

// // функция для случайного изменения координат
// var update = function (coordinate) {
//     coordinate += Math.random() * 4 - 2;

//     if (coordinate > 280) {
//         coordinate -= Math.random() * 2;
//     }
//     if (coordinate < 20) {
//         coordinate += Math.random() * 2;
//     }

//     return coordinate;

// };

// // Летающая пчела
// var drawBeeFly = function (x, y) {

//     setInterval(function () {

//         ctx.clearRect(0, 0, 300, 300);
//         x = update(x);
//         y = update(x);
//         drawBee(x, y);

//        ctx.strokeRect(0,0,300,300)
//     }, 30)

//     ctx.strokeRect(0,0,300,300)
// };

// drawBeeFly(100, 200);
