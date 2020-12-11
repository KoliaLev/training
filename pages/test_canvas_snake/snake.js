// игра змейка

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const blockSize = 10;
const row = width / blockSize;
const col = height / blockSize;

// рисуем рамку
const drawBorder = function () {
    ctx.lineWidth = col;
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};

//  отрисовка счета
const drawScore = function () {
    ctx.textBaseline = "top";
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Счет: " + score, blockSize, blockSize);
};

// конец игры
var gameOver = function () {
    clearInterval(intervalID);
    ctx.font = "56px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Это фиаско!", width / 2, height / 2);
};

// -------------
// конструктор блока
var Block = function (col, row) {
    this.x = col;
    this.y = row;
};

// рисуем блок квадрат
Block.prototype.draw = function () {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x * blockSize, this.y * blockSize, blockSize, blockSize);
};

//  рисуем круг
const circle = function (x, y, radius) {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
};

// рисуем блок круг
Block.prototype.drawCircle = function () {
    circle(this.x * blockSize + blockSize / 2, this.y * blockSize + blockSize / 2, blockSize / 2);
};

// проверка блоков на совпадение
Block.prototype.equal = function (otherBlock) {
    return this.x === otherBlock.x && this.y === otherBlock.y;
};
//
// --------------

// --------------
//  конструктор яблока
var Apple = function () {
    this.position = new Block(2, 5);
};

// рисуем блоко вызывая для тукущей позиции метод драв блока
Apple.prototype.draw = function () {
    this.position.drawCircle();
};

// метод для сдвига яблока в случайную позицию
Apple.prototype.move = function () {
    const randomX = Math.floor(Math.random() * (col - 2) + 1);
    const randomY = Math.floor(Math.random() * (row - 2) + 1);
    this.position = new Block(randomX, randomY);
};
//
// --------------

// --------------
// конструктор змейка - масив блоков
var Snake = function () {
    this.s = [new Block(4, 3), new Block(3, 3), new Block(2, 3)];
    this.direction = "right";
    this.nextDirection = "right";
};

//  рисуем змейку. прорисовуем блоки масива
Snake.prototype.draw = function () {
    for (let i = 0; i < this.s.length; i++) {
        this.s[i].draw();
    }
};

// движение змейки, добавляет елемент в начало масива, соответственно к направлению
// и убирает последний елем масива
Snake.prototype.move = function () {
    var head = this.s[0];
    let newHead;

    this.direction = this.nextDirection;

    if (this.direction === "right") {
        newHead = new Block(head.x + 1, head.y);
        // console.log("head.x = " + head.x);
        // console.log("head.y = " + head.y);
        // console.log("newHead= " + newHead);
    } else if (this.direction === "left") {
        newHead = new Block(head.x - 1, head.y);
    } else if (this.direction === "up") {
        newHead = new Block(head.x, head.y - 1);
    } else if (this.direction === "down") {
        newHead = new Block(head.x, head.y + 1);
    }

    if (snake.getCollision(newHead)) {
        console.log("Это фиаско!!!");
        gameOver();
    }

    this.s.unshift(newHead); // добавляется новая голова змеи в начало масива змейки
    console.log(this.s);

    if (newHead.equal(apple.position)) {
        // проверяется не совпадает ли новая голова змеи с яблоком
        score++;
        apple.move();
    } else {
        this.s.pop(); // иначе удаляется последний элемент змейки
    }
};

// принимается направление
Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    } else if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (
        newDirection === "left" ||
        newDirection === "right" ||
        newDirection === "down" ||
        newDirection === "up"
    ) {
        this.nextDirection = newDirection;
    }
};

// проверка на столкновение
// если столкновение произошло возвращает true
Snake.prototype.getCollision = function (head) {
    let rightCollision = head.x === col - 1;
    // console.log(rightCollision);
    let leftCollision = head.x === 0;
    // console.log(leftCollision);
    let upCollision = head.y === 0;
    // console.log(upCollision);
    let downCollision = head.y === row - 1;
    // console.log(downCollision);

    let wallCollision = rightCollision || leftCollision || upCollision || downCollision;
    for (let i = 0; i < this.s.length; i++) {
        if (head.equal(this.s[i])) {
            var selfCollision = true;
        }
    }
    // console.log(selfCollision);
    return wallCollision || selfCollision;
};
//
// -------------------

let apple = new Apple();
apple.move();
let snake = new Snake();
var score = 0;

const keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};

//  запускает функцию чтения клавиатуры
$("body").keydown(function (event) {
    const newDirection = keyActions[event.keyCode];
    console.log(newDirection);
    snake.setDirection(newDirection);
});

const intervalID = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.draw();
    snake.move();
    apple.draw();
    drawBorder();
}, 200);

////////////////////////////////////////////////
// // рамка
// ctx.lineWidth = "40";
// ctx.strokeStyle = "burlywood";
// ctx.strokeRect(0, 0, width, height);

// // сетка
// for (var i = 20; i < height; i += 20) {
//     ctx.lineWidth = "1";
//     ctx.beginPath();
//     ctx.moveTo(0, i);
//     ctx.lineTo(width, i);
//     ctx.moveTo(i, 0);
//     ctx.lineTo(i, height);
//     ctx.stroke();
// }

// // рисуем яблоко
// var apple = 0;
// var drawApple = function (score) {
//     if (score > apple) {
//         apple += 1;
//         xAppleCoord = Math.floor(Math.random() * (19 - 1) + 1);
//         yAppleCoord = Math.floor(Math.random() * (19 - 1) + 1);
//     }

//     // console.log(xAppleCoord + " " + yAppleCoord);

//     for (let j = 1; j < 19; j++) {
//         if (xAppleCoord === j) {
//             xAppleCoord = (j * width) / 20 + 10;
//             break;
//         }
//     }

//     for (let k = 1; k < 19; k++) {
//         if (yAppleCoord === k) {
//             yAppleCoord = (k * height) / 20 + 10;
//             break;
//         }
//     }

//     ctx.beginPath();
//     ctx.fillStyle = "green";
//     ctx.arc(xAppleCoord, yAppleCoord, 10, 0, Math.PI * 2, 1);
//     ctx.fill();
//     console.log(xAppleCoord + " " + yAppleCoord);
// };

// //  конструктор змеи.
// const Snake = function (x, y) {
//     this.xCoord = x;
//     this.yCoord = y;
//     this.spead = 20;
//     this.xSpead = 0;
//     this.ySpead = 0;
//     this.snakeWidth = 1; // длинна змеи
// };

// // рисуем змею
// Snake.prototype.drawSnake = function () {
//     ctx.fillStyle = "blue";
//     ctx.fillRect(this.xCoord, this.yCoord, 20, 20);
// };

// // Snake.prototype.eat = function () {
// //     if (this.xCoord === )

// // }

// //  сдвиг змеи
// Snake.prototype.move = function () {
//     if (this.xCoord - this.spead < -1 || this.xCoord + this.spead > width - 19) {
//         clearInterval(m);
//         $(".mes1").text("Это фиаско братааан!!!");
//         return false;
//     } else if (this.yCoord - this.spead < -1 || this.yCoord + this.spead > height - 19) {
//         clearInterval(m);
//         $(".mes1").text("Это фиаско братааан!!!");
//         return false;
//     } else {
//         this.xCoord += this.xSpead;
//         this.yCoord += this.ySpead;
//     }
//     console.log(this.xCoord + " " + this.yCoord);
// };

// // направление змеи с клавиатуры
// Snake.prototype.setDirection = function (direction) {
//     if (direction === "left") {
//         this.xSpead = -this.spead;
//         this.ySpead = 0;
//     } else if (direction === "right") {
//         this.xSpead = this.spead;
//         this.ySpead = 0;
//     } else if (direction === "up") {
//         this.xSpead = 0;
//         this.ySpead = -this.spead;
//     } else if (direction === "down") {
//         this.xSpead = 0;
//         this.ySpead = this.spead;
//     } else if (direction === "stop") {
//         this.xSpead = 0;
//         this.ySpead = 0;
//     }
// };

// sn = new Snake(40, 40);

// const keyActions = {
//     32: "stop",
//     37: "left",
//     38: "up",
//     39: "right",
//     40: "down",
// };

// //  запускает функцию чтения клавиатуры
// $("body").keydown(function (event) {
//     const direction = keyActions[event.keyCode];
//     console.log(direction);
//     sn.setDirection(direction);
// });

// let score = 1;
// const m = setInterval(function () {
//     ctx.clearRect(20, 20, width - 40, height - 40);

//     // сетка
//     for (var i = 20; i < height; i += 20) {
//         ctx.lineWidth = "1";
//         ctx.beginPath();
//         ctx.moveTo(0, i);
//         ctx.lineTo(width, i);
//         ctx.moveTo(i, 0);
//         ctx.lineTo(i, height);
//         ctx.stroke();
//     }

//     ctx.lineWidth = "40";
//     ctx.strokeStyle = "burlywood";
//     ctx.strokeRect(0, 0, width, height);

//     drawApple(score);
//     sn.move();
//     sn.drawSnake();

//     if (sn.xCoord === xAppleCoord - 10 && sn.yCoord === yAppleCoord - 10) {
//         score++;
//         $(".mes2").text("Счет: " + score);
//     }
// }, 500);
