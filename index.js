const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    left -= 1;
    dodger.style.left = `${left}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    left += 1;
    dodger.style.left = `${left}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});