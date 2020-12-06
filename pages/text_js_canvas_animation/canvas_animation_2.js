var canvas2 = document.getElementById('canvas-2');
var ctx2 = canvas2.getContext('2d');

var circle2 = function (x, y, radius, fillCircle) {
    ctx2.beginPath();
    ctx2.arc(x, y, radius, 0, Math.PI * 2, fillCircle);
    if (fillCircle) {
        ctx2.fill();
    } else {
        ctx2.stroke();
    }

}


var Ball = function (x,y) {
    this.x = x;
    this.y = x;
    this.xSpeed = -2;
    this.ySpeed = 3;
}

Ball.prototype.draw = function () {
    circle2(this.x, this.y, 3, 1);
    
}

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

Ball.prototype.checkColision = function () {
    if (this.x > 299 || this.x < 1) {
        this.xSpeed = -this.xSpeed ;
    }
    if (this.y > 299 || this.y < 1) {
        this.ySpeed = -this.ySpeed ;
    }
};

var ball = new Ball(10,10);
var ball2 = new Ball(100, 200);
var ball3 = new Ball(250, 250);


setInterval(function () {
    ctx2.clearRect(0, 0, 300, 300)
    
    ball.draw();
    ball.move();
    ball.checkColision();
    ball2.draw();
    ball2.move();
    ball2.checkColision();
    ball3.draw();
    ball3.move();
    ball3.checkColision();
   

    ctx2.strokeRect(0,0,300,300)
}, 50);
