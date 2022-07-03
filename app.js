setInterval(animateBox, 1000);

function animateBox() {
  var element = document.getElementById("box");

  (rect = element.getBoundingClientRect()), (move = 10); // in pixel

  var goRight = rect.right + move <= window.innerWidth ? true : false;
  var goBottom = rect.bottom + move <= window.innerHeight ? true : false;

  var goBottomRight = goRight && goBottom ? true : false;

  /*
   * The logic of the solution is: When the box touches the edge,
   * change the box's going direction to upperLeft.
   * As the function is getting called every second, the values
   * get reset. That's why when the box move 1 step to upperLeft, it
   * gets spaces to go downRight again. That's why, we need to set
   * the 'goDirection' value globally and check every time, if the
   * box has 'left' position 0. If it's 0, move the again to bottomRight.
   */

  if (typeof goDirection == "undefined") goDirection = "bottomRight";

  if (goDirection == "topLeft") {
    if (rect.left == 0) goDirection = "bottomRight";
    if (rect.left > 0) goDirection = "topLeft";
  } else if (goDirection == "bottomRight") {
    goDirection = goBottomRight ? "bottomRight" : "topLeft";
  }

  if (goDirection == "bottomRight") {
    element.style.top = rect.top + move + "px";
    element.style.left = rect.left + move + "px";
  } else if (goDirection == "topLeft") {
    element.style.top = rect.top - move + "px";
    element.style.left = rect.left - move + "px";
  }
}
