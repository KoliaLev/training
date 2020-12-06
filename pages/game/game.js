var getRamdomNamber = function (size) {
  return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

var getDistanceHint = function (getDistance) {
  if (getDistance < 10) {
    return "Обожжешся!";
  } else if (getDistance < 20) {
    return "Очень горячо!";
  } else if (getDistance < 40) {
    return "Горячо";
  } else if (getDistance < 80) {
    return "Тепло";
  } else if (getDistance < 100) {
    return "Холодно";
  } else if (getDistance < 300) {
    return "Очень холодно";
  } else return "Замерзнешь";
};

console.log(target);

var width = 600;
var height = 600;

var target = {
  x: getRamdomNamber(width),
  y: getRamdomNamber(height),
};

var clicks = 0;

$("#map").click(function (event) {
  clicks++;
  var distance = getDistance(event, target);
  var distanceHint = getDistanceHint(distance);
  console.log("дист " + distance);
  $("#distance").text(distanceHint);
  if (distance < 8) {
    alert("Поздравляем! Вы нашли клад!!! Использовано кликов: " + clicks);
  }
});
