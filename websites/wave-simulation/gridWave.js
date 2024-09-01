let cont = document.getElementById("cont");
cont.style.width = window.innerWidth + 50 + "px";
cont.style.height = window.innerHeight + "px";
let xRange = document.getElementById("xRange");
let isCleared = true;
let clearAll = false;
let rowArray = [];
let x = "null";
let squareWidth = 0;
let pushHalf = 0;
let pushQuarter = 0;
let pushCount = 0;
let loopCount = 0;
let frontArray = [];
let backArray = [];
let stackingDistance = 0;
let loopSpeed = 0;

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
}

function createVisuals(rowCount, squareCount) {
  for (let x = 0; x < rowCount; x++) {
    let row = document.createElement("DIV");
    row.classList.add("backrow");
    row.style.transition = "all 1s";
    cont.appendChild(row);
    rowArray.push(row);
    for (let y = 0; y < squareCount; y++) {
      let square = document.createElement("DIV");
      if (y % 2 == 0) {
        square.classList.add("rowColor1");
      } else {
        square.classList.add("rowColor2");
          let rowDivided = x / rowCount;
          let rowOpacityInvert = Math.abs(rowDivided - 1);
          square.style.background =
            "rgba(255, 172, 28," + " " + rowOpacityInvert + ")";
        }
        rowArray[x][y] = square;
        row.appendChild(square);
      }
    }
squareWidth = rowArray[0][0].clientWidth;
pushHalf = squareWidth / 2;
pushQuarter = squareWidth / 4;
pushCount = rowArray[0][0].clientWidth * loopCount;
frontArray = rowArray.slice(0, Math.ceil(rowArray.length / 2));
frontArray = frontArray.reverse();
backArray = rowArray.slice(Math.ceil(rowArray.length / 2));
   }
function setSlideSpeed(speed){
    rowArray.forEach((object) => {
    object.style.transition = "all" + " " + speed | 1 + "s";
    });
}

let patterns = {
  wave: ()=>{
    if(clearAll == true){
    }else{
        console.log("Pattern: WAVE");
        rowArray[loopCount].style.marginLeft = pushHalf + "px";
        loopCount++;
        if (loopCount >= rowArray.length) {
          loopCount = 0;
          pushHalf *= -1;
        }
        setTimeout(patterns.wave, loopSpeed);
    }
  },
  split: ()=>{
    if(clearAll == true){
    }else{
    console.log("opposites");
    if (loopCount % 2 == 0) {
      squareWidth *= -1;
    } else {
      squareWidth *= -1;
    }
    rowArray[loopCount].style.marginLeft = squareWidth + "px";
    loopCount++;
    if (loopCount >= rowArray.length) {
      loopCount = 0;
      squareWidth *= -1;
    }
    setTimeout(patterns.split, loopSpeed);
    }
  },
  half: ()=>{
    if(clearAll == true){
    }else{
      stackingDistance = pushHalf * (loopCount + 1);
      frontArray[loopCount].style.marginLeft = stackingDistance + "px";
      backArray[loopCount].style.marginLeft = stackingDistance * -1 + "px";
      loopCount++;
      if(loopCount >= rowArray.length/2){
      }else{
        setTimeout(patterns.half, loopSpeed);
      }
      }
    },
  random: ()=>{
    if(clearAll == true){
    }else{
        console.log("Pattern: random");
        let r = Math.round(randomNumber(0,rowArray.length-1));
        console.log(r);
        rowArray[r].style.marginLeft = pushHalf + "px";
        loopCount++;
        if (loopCount >= rowArray.length) {
          loopCount = 0;
          pushHalf *= -1;
        }
        setTimeout(patterns.random, loopSpeed);
    }
  }
}


let choices = {
  clear: document.getElementById("clear"),
  wave: document.getElementById("wave"),
  split: document.getElementById("split"),
  half: document.getElementById("half"),
  random: document.getElementById("random")
}

function clearVisuals(){
  loopCount = 0;
  clearAll = true;
  rowArray.forEach((object) => {
    object.style.marginLeft = "0px";
  });
  waitForLoops();
}

function waitForLoops(){
  let waitCount = 0;
  waitLoop();
  function waitLoop(){
    if(waitCount<2){
      waitCount++;
      setTimeout(waitLoop,500);
    }else{
      console.log("READY");
      waitCount = 0;
      clearAll = false;
      isCleared = true;
      changeClearButtonColor();
    }
  }
}
function changeClearButtonColor(){
  if(isCleared == true){
    clear.style.background = "transparent";
    clear.style.color = "orange";
  }else{
    clear.style.background = "orange";
    clear.style.color = "black";
  }
}



function addChoices(){
    choices.clear.addEventListener("click",()=>{
        if(isCleared == false){
         clearVisuals();
        }
    });
    choices.wave.addEventListener("click",()=>{
        if(isCleared == true){
          isCleared = false;
          patterns.wave();
        }
        changeClearButtonColor();
    });
    choices.split.addEventListener("click",()=>{
        if(isCleared == true){
          isCleared = false;
          patterns.split();
        }
        changeClearButtonColor();
    });
    choices.half.addEventListener("click",()=>{
        if(isCleared == true){
          isCleared = false;
          patterns.half();
        }
        changeClearButtonColor();
    });
    choices.random.addEventListener("click",()=>{
        if(isCleared == true){
          isCleared = false;
          patterns.random();
        }
        changeClearButtonColor();
    });
}

  function clearBars() {
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
    rowArray = [];
    x = "null";
    squareWidth = 0;
    pushHalf = 0;
    pushQuarter = 0;
    pushCount = 0;
    loopCount = 0;
    frontArray = [];
    backArray = [];
    stackingDistance = 0;

}

xRange.addEventListener('input', function (evt) {
  clearVisuals();
  clearBars();
  if(this.value>25){
    loopSpeed = .01*1000;
  }else{
    loopSpeed = 1*1000;
  }
  createVisuals(this.value,this.value,5);
});


addChoices();
loopSpeed = 1*1000;
createVisuals(10, 50, 5);