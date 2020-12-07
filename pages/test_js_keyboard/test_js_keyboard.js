//  анимация мяча, управление с клавиаруры.

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

const Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.spead = 5;
    this.xSpead = this.spead;
    this.ySpead = 0;
};

Ball.prototype.move = function () {
    this.x += this.xSpead;
    this.y += this.ySpead;

    if (this.x < 0) {
        this.xSpead = -this.xSpead;
    } else if (this.x > width) {
        this.xSpead = -this.xSpead;
    }

    if (this.y < 0) {
        this.ySpead = -this.ySpead;
    } else if (this.y > height) {
        this.ySpead = -this.ySpead;
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 10, true);
};

Ball.prototype.setDirection = function (direction, speads) {
    if (direction === "up") {
        this.xSpead = 0;
        this.ySpead = -this.spead;
    } else if (direction === "down") {
        this.xSpead = 0;
        this.ySpead = this.spead;
    } else if (direction === "left") {
        this.xSpead = -this.spead;
        this.ySpead = 0;
    } else if (direction === "right") {
        this.xSpead = this.spead;
        this.ySpead = 0;
    } else if (direction === "stop") {
        this.xSpead = 0;
        this.ySpead = 0;
    } else if (direction === undefined && speads) {
        // console.log("direction " + direction);
        // console.log(speads);
        $("P").text("Cкорость " + speads);
        this.spead = speads;
    }
};

const ball = new Ball();

const keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};

const keySpeads = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9,
};

$("body").keydown(function (event) {
    const direction = keyActions[event.keyCode];
    const speads = keySpeads[event.keyCode];
    console.log(speads);
    ball.setDirection(direction, speads);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.move();
    ball.draw();
    // console.log(ball);
}, 30);
