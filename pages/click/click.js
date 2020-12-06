// function clichHandler(event) {
//   console.log("Клик " + event.pageX + " " + event.pageY);
//   $("body").append("<span> клик" + event.pageX + " " + event.pageY + " </span>");
// }

// $("h1").click(clichHandler);

////////

function mouseM(event) {
  $("h1").offset({
    left: event.pageX,
    top: event.pageY,
  });
}
$("html").click(mouseM);
