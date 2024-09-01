console.log("Hello world");
let guide0 = document.getElementById("guide0");
let guide1 = document.getElementById("guide1");
let guide2 = document.getElementById("guide2");
let guide3 = document.getElementById("guide3");
guide0.classList.add("guideMarkerFilled");

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

document.addEventListener("scroll", () => {
  if (getScrollPercent() >= 1) {
    guide0.classList.add("guideMarkerFilled");
  } else {
    guide0.classList.remove("guideMarkerFilled");
  }
  if (getScrollPercent() >= 25) {
    guide1.classList.add("guideMarkerFilled");
  } else {
    guide1.classList.remove("guideMarkerFilled");
  }
  if (getScrollPercent() >= 50) {
    guide2.classList.add("guideMarkerFilled");
  } else {
    guide2.classList.remove("guideMarkerFilled");
  }
  if (getScrollPercent() >= 75) {
    guide3.classList.add("guideMarkerFilled");
  } else {
    guide3.classList.remove("guideMarkerFilled");
  }
});

const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
console.log(height)

function addWhiteBars(){
    let leftBar = document.createElement("div");
    let rightBar = document.createElement("div");
    leftBar.style.background = "rgb(255,255,255)";
    rightBar.style.background = "rgb(255,255,255)";
    leftBar.style.position = "absolute";
    rightBar.style.position = "absolute";
    leftBar.style.left = "0";
    leftBar.style.top = "0";
    leftBar.style.height = height+"px";
    leftBar.style.width = "6rem";
    leftBar.style.zIndex = 0;
    rightBar.style.right = "0";
    rightBar.style.top = "0";
    rightBar.style.height = height+"px";
    rightBar.style.width = "6rem";
    rightBar.style.zIndex = 0;
    document.body.appendChild(leftBar);
    document.body.appendChild(rightBar);
}
// addWhiteBars();