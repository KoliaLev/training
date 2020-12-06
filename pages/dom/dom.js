// var friends = ["діма", "мама", "папа"];
// for (var i = 0; i < friends.length; i++) {
//   $("body").append("<p>" + friends[i] + "</p>");
// }

// $("h1").text("Моя семья");
// $("p").append(" самый лучший");

// // for (var j = 0; j < 5; j++) {
// //   $("h1")
// //     .fadeOut(j * 500)
// //     .fadeIn(j * 500);
// // }

// $("h1").fadeTo(5000, 0.5);

////////////////////////////
// var counter = 5;

// function timer() {
//   console.log("Вы втыкаете уже " + counter + " сек");
//   counter += 5;
// }

// var setInt = setInterval(timer, 5000);

///////////////////////

// анимация по кругу залоговка Н1
var moveOffset = 0;

function moveLeft() {
  moveOffset++;
  if (moveOffset < 201) {
    $("#main-head").offset({ left: moveOffset });
    // console.log(moveOffset);
  }

  if (moveOffset > 199 && moveOffset < 401) {
    $("#main-head").offset({ top: moveOffset - 200 });
    // console.log(moveOffset);
  }

  if (moveOffset > 399 && moveOffset < 601) {
    $("#main-head").offset({ left: 600 - moveOffset });
    // console.log(moveOffset);
  }
  if (moveOffset > 599 && moveOffset < 801) {
    $("#main-head").offset({ top: 800 - moveOffset });
    // console.log(moveOffset);
  }
  if (moveOffset === 801) {
    moveOffset = 0;
  }
}

var i = 0;
var int = function (i) {
  s1 = setInterval(moveLeft, 30 - i);
};

var cle = function () {
  clearInterval(s1);
};

int(0);
//  если непарный клик - запуск таймаута для аним. парный - стоп
var stopStart = function () {
  $("h1").text("Привет привет -  кликов: " + i);
  i++;
  if (i == 10) {
    cle();
    $("h1").text("Ито пабеда!!!!");
    return;
  }

  if (i % 2 == 0) {
    int(i);
    console.log("click " + i);
    console.log(i % 2);
  }
  if (i % 2 == 1) {
    cle();
    console.log("click " + i);
    console.log(i % 2);
  }
};

$("html").click(stopStart);

////////////////////////////
