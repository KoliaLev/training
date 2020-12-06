var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


// for (var i = 0; i < 6; i++){
//     ctx.fillStyle = 'red';
//     ctx.fillRect(10*i, 10*i, 10, 10);
// }

// for (i; i < 20; i++){
//     ctx.lineWidth = 0.1*i;
//     ctx.strokeStyle = 'green';
//     ctx.strokeRect(10*i, 10*i, 10, 10);
// }



// ctx.strokeStyle = "red";
// ctx.lineWidth = 4;
// ctx.strokeRect(100, 100, 50, 50);
// ctx.beginPath();
// ctx.moveTo(125, 150);
// ctx.lineTo(125, 250);

// ctx.moveTo(125, 180);
// ctx.lineTo(80, 150);
// ctx.moveTo(125, 180);
// ctx.lineTo(170, 150);

// ctx.moveTo(125, 250);
// ctx.lineTo(100, 300);
// ctx.moveTo(125, 250);
// ctx.lineTo(150, 300);
// ctx.stroke();


var circle = function (x, y, radius, fillCircle) {
    if (fillCircle) {
       ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fill(); 
    } else {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.stroke();
    }
    
}


// circle(150, 70, 30, 0);

// circle(150, 70, 5, 1);
// circle(140, 60, 5, 1);
// circle(160, 60, 5, 1);

// circle(150, 150, 50, 0);

// circle(150, 130, 5, 1);
// circle(150, 150, 5, 1);
// circle(150, 170, 5, 1);


// var drawSnowman = function (x, y) {
//     circle(x, y-80, 30, 0);

//     circle(x, y-80, 5, 1);
//     circle(x-10, y-90, 5, 1);
//     circle(x+10, y-90, 5, 1);

//     circle(x, y, 50, 0);

//     circle(x, y-20, 5, 1);
//     circle(x, y, 5, 1);
//     circle(x, y+20, 5, 1);
// }

// drawSnowman(100, 100);
// drawSnowman(200,100)

ctx.lineWidth = 4;
// ctx.beginPath();
// ctx.moveTo(10, 10);

// ctx.lineTo(60, 60);
// ctx.lineTo(60, 90);

// ctx.stroke();

// //////
// var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];


// var drawPoints = function (points) {
//     ctx.beginPath();

//     for (var i = 0; i < points.length; i++){
//         ctx.lineTo(points[i][0], points[i][1]);
//         console.log(points[i]);

//     }

//     ctx.stroke();
// }

// var mysteryPoints = [[50, 50], [50, 100], [25, 120], [100, 50],
// [70, 90], [100, 90], [70, 120]];
// drawPoints(mysteryPoints);

///////


$("#canvas").mousemove(function (event) {
    ctx.lineWidth = 1;
    circle(event.pageX-6, event.pageY-6, 4, 0)
    console.log(event.PageX+' '+ event.PageY);
})