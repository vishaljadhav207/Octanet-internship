var object1 = $("#img2");
var object2 = $("#img4");

var layer = $("#main");

layer.mousemove(function (e) {
  var valueX = (e.pageX * -1) / 20;
  var valueY = (e.pageY * -1) / 20;

  object1.css({
    transform:
      "translate(-50%,-50%) translate3d(" + valueX + "px," + valueY + "px,0)",
  });
});

layer.mousemove(function (e) {
  var valueX = (e.pageX * -1) / 20;
  var valueY = (e.pageY * -1) / 20;
  object2.css({
    transform:
      "translate(-50%,-50%) translate3d(" + valueX + "px," + valueY + "px,0)",
  });
});
