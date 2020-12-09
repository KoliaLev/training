// игра змейка

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// рамка
ctx.lineWidth = "40";
ctx.strokeStyle = "burlywood";
ctx.strokeRect(0, 0, width, height);

// сетка
for (var i = 20; i < height; i += 20) {
    ctx.lineWidth = "1";
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
}

// рисуем яблоко
var apple = 0;
var drawApple = function (score) {
    if (score > apple) {
        apple += 1;
        xAppleCoord = Math.floor(Math.random() * (19 - 1) + 1);
        yAppleCoord = Math.floor(Math.random() * (19 - 1) + 1);
    }

    // console.log(xAppleCoord + " " + yAppleCoord);

    for (let j = 1; j < 19; j++) {
        if (xAppleCoord === j) {
            xAppleCoord = (j * width) / 20 + 10;
            break;
        }
    }

    for (let k = 1; k < 19; k++) {
        if (yAppleCoord === k) {
            yAppleCoord = (k * height) / 20 + 10;
            break;
        }
    }

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(xAppleCoord, yAppleCoord, 10, 0, Math.PI * 2, 1);
    ctx.fill();
    console.log(xAppleCoord + " " + yAppleCoord);
};

//  конструктор змеи.
const Snake = function (x, y) {
    this.xCoord = x;
    this.yCoord = y;
    this.spead = 20;
    this.xSpead = 0;
    this.ySpead = 0;
    this.snakeWidth = 1; // длинна змеи
};

// рисуем змею
Snake.prototype.drawSnake = function () {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.xCoord, this.yCoord, 20, 20);
};

// Snake.prototype.eat = function () {
//     if (this.xCoord === )

// }

//  сдвиг змеи
Snake.prototype.move = function () {
    if (this.xCoord - this.spead < -1 || this.xCoord + this.spead > width - 19) {
        clearInterval(m);
        $(".mes1").text("Это фиаско братааан!!!");
        return false;
    } else if (this.yCoord - this.spead < -1 || this.yCoord + this.spead > height - 19) {
        clearInterval(m);
        $(".mes1").text("Это фиаско братааан!!!");
        return false;
    } else {
        this.xCoord += this.xSpead;
        this.yCoord += this.ySpead;
    }
    console.log(this.xCoord + " " + this.yCoord);
};

// направление змеи с клавиатуры
Snake.prototype.setDirection = function (direction) {
    if (direction === "left") {
        this.xSpead = -this.spead;
        this.ySpead = 0;
    } else if (direction === "right") {
        this.xSpead = this.spead;
        this.ySpead = 0;
    } else if (direction === "up") {
        this.xSpead = 0;
        this.ySpead = -this.spead;
    } else if (direction === "down") {
        this.xSpead = 0;
        this.ySpead = this.spead;
    } else if (direction === "stop") {
        this.xSpead = 0;
        this.ySpead = 0;
    }
};

sn = new Snake(40, 40);

const keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};

//  запускает функцию чтения клавиатуры
$("body").keydown(function (event) {
    const direction = keyActions[event.keyCode];
    console.log(direction);
    sn.setDirection(direction);
});

let score = 1;
const m = setInterval(function () {
    ctx.clearRect(20, 20, width - 40, height - 40);

    // сетка
    for (var i = 20; i < height; i += 20) {
        ctx.lineWidth = "1";
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }

    ctx.lineWidth = "40";
    ctx.strokeStyle = "burlywood";
    ctx.strokeRect(0, 0, width, height);

    drawApple(score);
    sn.move();
    sn.drawSnake();

    if (sn.xCoord === xAppleCoord - 10 && sn.yCoord === yAppleCoord - 10) {
        score++;
        $(".mes2").text("Счет: " + score);
    }
}, 500);
