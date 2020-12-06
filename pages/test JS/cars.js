

// Конструктор для создания автомобиля
// приинимает значения координат и скорость
// внутри функция dr для отрисовки авто. + вызов этой функ.
var Car = function (x, y, spead) { 
    this.x = x;
    this.y = y;
    this.spead = spead;
    this.dr = function () {
        var carHtml = '<img src="./img/car.png">';
            this.carElement = $(carHtml);

            this.carElement.css({
                position: "absolute",
                left: this.x,
                top: this.y,
            });

            $("body").append(this.carElement);
    }
    this.dr();
   
}



        // Car.prototype.draw = function () {
        //     var carHtml = '<img src="./img/car.png">';
        //     this.carElement = $(carHtml);

        //     this.carElement.css({
        //         position: "absolute",
        //         left: this.x,
        //         top: this.y,
        //     });

        //     $("body").append(this.carElement);
        // }


//  метод для сдвига авто
Car.prototype.moveRight = function (shift) {
    var randomShift = Math.floor(Math.random()*shift)
    this.x += randomShift;

     this.carElement.css({
        left: this.x,
        top: this.y,
    });

}

//  метод для сдвига авто
Car.prototype.moveLeft = function () {
    this.x -= this.spead;

    this.carElement.css({
        left: this.x,
    })
}

//  метод для сдвига авто
Car.prototype.moveDown = function () {
    this.y += this.spead;

    this.carElement.css({
        top: this.y,
    })
}

//  метод для сдвига авто
Car.prototype.moveUp = function () {
    this.y -= this.spead;

    this.carElement.css({
        top: this.y,
    })
}



var tesla = new Car(20, 20, 1);
var nissan = new Car(20, 200, 0.5);




setInterval(function(){tesla.moveRight(5)},30)
setInterval(function(){nissan.moveRight(5)},30)

    // setInterval(function(){nissan.moveUp()},50)
    // setInterval(function(){nissan.moveLeft()},50)





var ddd = document.getElementById("qwerty");
ddd.addEventListener("DOM_VK_UP")

function moveQwerty (e) {
    this.y -= 1;

    this.carElement.css({
        top: this.y,
    })
}