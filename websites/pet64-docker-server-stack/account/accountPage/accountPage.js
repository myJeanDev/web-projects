let galleryArray = [];
let gatheredData = [];

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function rand(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function pullUserData() {
$(document).ready(function() {
  $.ajax({
   url : "../../gridPhp/pullUserDots.php",
   type : 'GET',
    success: function (result) {
        gatheredData = result.split("@");
        let myArray =[];
        for(let key = 0; key <gatheredData.length;key++){
            myArray.push(gatheredData[key].split("|"));
        }
        for(let arrayKey = 0; arrayKey<myArray.length;arrayKey++){
            createGalleryGrid(myArray[arrayKey]);
        }
   }
  });
}); 
};

function stringToArray(array) {
    let rows = array.split("#");
    let storage = [];
  for(let columns = 0; columns < rows.length;columns++){
    storage[columns] = rows[columns].split("");
  }
  return storage;
}
function mapConversion(map) {
  let reduction = 2;
  let newMap = [];
  let average = 0;
  for (let x = 0; x < map.length; x += reduction){
    newMap[x/reduction] = [];
    for (let y = 0; y < map[x].length; y += reduction){
      average = 0;
      for (let checkX = 0; checkX < reduction; checkX++){
        for (let checkY = 0; checkY < reduction; checkY++){
          if (map[x+checkX][y+checkY] == 1) {
            average++;
          }
        }
      }
      if (average > (reduction*reduction)-reduction) {
        newMap[x / reduction][y / reduction] = 1;
      } else if (average == (reduction*reduction)/2) {
        newMap[x/reduction][y/reduction] = .5;
      }else{
        newMap[x/reduction][y/reduction] = 0;
      }
    }
  }
  return newMap;
}
function createGalleryGrid(array) {
  let parent = new grid(stringToArray(array[3]),mapConversion(stringToArray(array[3])),array[1],array[2],array[0],array[4]);
}
function createDots(map, parent){
    for (let x = 0; x < map.length-1; x++) {
      parent.array[x] = [];
      for (let y = 0; y < map.length-1; y++) {
        let active = map[x][y];
        parent.array[x][y] = new dot(parent, x, y, map.length-1, active);
      }
    }
};

function grid(originalMap,map, author, date, title, uniqueId) {
  this.container = document.createElement("div");
  this.textContainer = document.createElement("div");
  this.title = document.createElement("div");
  this.author = document.createElement("div");
  this.body = document.createElement("div");
  this.originalMap = originalMap;
  this.uniqueId = uniqueId;
  this.map = map;
  this.array = [];
  this.create = (that) => {
    renderLinkIcon(that.container, uniqueId);
    that.container.classList.add("galleryRow");
    that.container.appendChild(that.body);
    that.container.appendChild(that.textContainer);
    that.textContainer.appendChild(that.title);
    that.textContainer.appendChild(that.author);
    that.title.classList.add("galleryText");
    that.textContainer.classList.add("galleryTextContainer");
    that.body.classList.add("galleryGrid");
    that.title.innerHTML = title;
    that.author.innerHTML = author + "~"+date;
    that.author.classList.add("galleryTextSmaller");
    createDots(map,that);
    document.getElementById("galleryContainer").appendChild(that.container);
    that.body.addEventListener("click",()=>{
        pageDisplay(that.originalMap, that.uniqueId,that.container);
    });
  };
  this.rowBounceNumber = map.length/2;
  this.bounceAnimation = (n, that)=>{
        for(let m=0; m < that.array.length;m++){
            for(let k=0; k < this.rowBounceNumber;k++){
                let percentString = that.array[m][k].body.style.top;
                let removedPercent = percentString.toString().replace('%','');
                removedPercent -= n;
                that.array[m][k].body.style.top = removedPercent +"%";
            }
        }
    setTimeout(()=>{
        this.bounceAnimation(n*-1, that);
    },rand(2500,4500));
    }
  this.bounceAnimation(3,this);
  this.create(this);
}
function dot(parent, x, y, count, active) {
  this.body = document.createElement("div");
  this.dot = document.createElement("div");
  this.active = active;
  this.createSelf = (that) => {
    if (active == 1) {
      that.dot.classList.add("activeDot");
    } else if (active == .5) {
      that.dot.classList.add("halfActiveDot");
    }
    that.body.classList.add("dotBody");
    that.body.appendChild(that.dot);
    that.dot.classList.add("dot");
    that.body.style.width = (300/count)*.29 + "%";
    that.body.style.height = (300/count)*.29 + "%";
    that.body.style.left = (x/count) * 100 + "%";
    that.body.style.top = (y / count) * 100 + "%";
    parent.body.appendChild(that.body);
  };
  this.createSelf(this);
}
function renderLinkIcon(node,uniqueId) {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('viewBox', '0 0 512 512');
  iconSvg.setAttribute('stroke', 'black');
  iconSvg.classList.add('heartIcon');

  iconPath.setAttribute(
    'd',
    'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '12');

  function heart(){
        this.liked = "false";
    }
  let heartObj = new heart();

    function likeCheck(uniqueId){
        $(document).ready(function() {
            $.ajax({
                url : "../../gridPhp/likeCheck.php?code="+encodeURIComponent(uniqueId),
                type : 'GET',
                success: function(result){
                    heartObj.liked = result;
                    colorHearts();
                }
            });
        });
    }
    likeCheck(uniqueId);

function colorHearts(){
    if(heartObj.liked == "true"){
        iconSvg.classList.add("heartIconFilled");
    }
    if(heartObj.liked == "false"){
        iconSvg.classList.remove("heartIconFilled");
    }
}

  iconSvg.appendChild(iconPath);
  iconSvg.addEventListener("click",()=>{
      if(heartObj.liked == "false"){
          heartObj.liked = "true";
          iconSvg.classList.add("heartIconFilled");
              $(document).ready(function () {
                $.ajax({
                    type: "POST",
                    url: '../../gridPhp/addLike.php',
                    data: {
                        code: uniqueId
                    },
                });
              });
      }else{
          heartObj.liked = "false";
          iconSvg.classList.remove("heartIconFilled");
          $(document).ready(function () {
                $.ajax({
                    type: "POST",
                    url: '../../gridPhp/removeLike.php',
                    data: {
                        code: uniqueId
                    },
                });
              });
      }
  });
  return node.appendChild(iconSvg);
}
function pageDisplay(map,uniqueId, columnRow) {
    let previewBoxContainer = document.createElement("div");
    let previewBox = {
        body: document.createElement("div"),
        array: [],
    };
    
    let controlPanel = document.createElement("div");
    controlPanel.classList.add("controlPanel");
    
    let deleteButton = document.createElement("div");
    deleteButton.classList.add("controlButtonFlat");
    deleteButton.classList.add("shadow");
    deleteButton.addEventListener("click",()=>{
        let confirm = document.createElement("div");
            previewBox.body.appendChild(confirm);
            confirm.classList.add("controlButtonFlat");
            confirm.classList.add("shadow");
            confirm.style.zIndex = "6";
            confirm.style.position = "absolute";
            confirm.style.left = "50%";
            confirm.style.top = "50%";
            confirm.style.transform = "translateY(-50%) translateX(-50%)";
            let sure = document.createElement("p");
            let sureText = document.createTextNode("Confirm");
            sure.appendChild(sureText);
            sure.classList.add("alignText");
            sure.classList.add("noselect");
            confirm.appendChild(sure);
            confirm.addEventListener("click",()=>{
                $(document).ready(function () {
                    $.ajax({
                        type: "POST",
                        url: '../../gridPhp/deleteDots.php',
                    data: {
                        code: uniqueId
                    },
                    });
                });
                document.getElementById("galleryContainer").removeChild(columnRow);
                document.body.removeChild(previewBoxContainer);
            });
    });
    
    let profileSetButton = document.createElement("div");
    profileSetButton.classList.add("controlButtonFlat");
    profileSetButton.classList.add("shadow");
        profileSetButton.addEventListener("click",()=>{
        setProfilePicture(uniqueId);
    });
    
    let editLink = document.createElement('a');
    editLink.innerHTML="Edit";
    editLink.href="../../canvas/page.php";
    editLink.title="Edit";
    
    editLink.classList.add("controlButtonFlat");
    editLink.classList.add("shadow");
    controlPanel.classList.add("shadow");
    controlPanel.appendChild(profileSetButton);
    controlPanel.appendChild(editLink);
    controlPanel.appendChild(deleteButton);
    
    editLink.addEventListener("click",()=>{
                $(document).ready(function () {
                $.ajax({
                    type: "POST",
                    url: '../../gridPhp/setEditMapCode.php',
                    data: {
                        code: uniqueId
                    },
                });
              });
    });
    
    
    let plus = document.createElement("p");
    let plusText = document.createTextNode("Delete");
    plus.appendChild(plusText);
    plus.classList.add("alignText");
    plus.classList.add("noselect");
    deleteButton.appendChild(plus);
    
    let exitButton = document.createElement("div");
    exitButton.classList.add("buttonSmaller");
    exitButton.classList.add("shadow");
    exitButton.classList.add("exitButton");
    exitButton.innerHTML = "x";
    exitButton.addEventListener("click",()=>{
        document.body.removeChild(previewBoxContainer);
    });
    previewBoxContainer.classList.add("previewBoxContainer");
    previewBox.body.classList.add("previewBox");
    createDots(map,previewBox);
    previewBox.body.appendChild(exitButton);
    previewBox.body.appendChild(controlPanel);
    previewBoxContainer.appendChild(previewBox.body);
    document.body.appendChild(previewBoxContainer);
    
    //INPUT BOUNCE NUMBER PROVIDED BY USER
    let rowBounceNumber = previewBox.array.length/2;
    function bounceAnimation(n){
        for(let m=0; m < previewBox.array.length;m++){
            for(let k=0; k<rowBounceNumber;k++){
                let percentString = previewBox.array[m][k].body.style.top;
                let removedPercent = percentString.toString().replace('%','');
                removedPercent -= n;
                previewBox.array[m][k].body.style.top = removedPercent +"%";
            }
        }
    setTimeout(()=>{
        bounceAnimation(n*-1);
    },1000);
    }
    bounceAnimation(-1.3999999999);
    //INPUT BOUNCE NUMBER PROVIDED BY USER
}

function setProfilePicture(uniqueId){
    let profilePicture = document.getElementById("profilePicture");
        $(document).ready(function () {
                    $.ajax({
                        type: "POST",
                        url: '../../gridPhp/setProfilePicture.php',
                    data: {
                        code: uniqueId
                    },
                    });
                });
        pullProfilePicture();
}
function pullProfilePicture() {
        removeAllChildren(document.getElementById("profilePicture"));
$(document).ready(function() {
  $.ajax({
   url : "../../gridPhp/pullProfilePicture.php",
   type : 'GET',
    success: function (result) {
        let profilePictureArray = result.split("&");
        console.log("Profile: " + profilePictureArray);
        let parent = new profileGrid(stringToArray(profilePictureArray[1]), mapConversion(stringToArray(profilePictureArray[1])), profilePictureArray[0]);
   }
  });
}); 
};
function profileGrid(originalMap,map,uniqueId) {
  this.container = document.createElement("div");
  this.body = document.createElement("div");
  this.originalMap = originalMap;
  this.uniqueId = uniqueId;
  this.map = map;
  this.array = [];
  this.create = (that) => {
    that.container.classList.add("galleryRow");
    that.container.appendChild(that.body);
    that.body.classList.add("galleryGrid");
    createDots(map,that);
    document.getElementById("profilePicture").appendChild(that.container);
  };
  this.rowBounceNumber = map.length/2;
  
  this.bounceAnimation = (n, that)=>{
        for(let m=0; m < that.array.length;m++){
            for(let k=0; k < this.rowBounceNumber;k++){
                let percentString = that.array[m][k].body.style.top;
                let removedPercent = percentString.toString().replace('%','');
                removedPercent -= n;
                that.array[m][k].body.style.top = removedPercent +"%";
            }
        }
    setTimeout(()=>{
        this.bounceAnimation(n*-1, that);
    },2500);
    }
  this.bounceAnimation(3,this);
  this.create(this);
}

pullProfilePicture();
pullUserData();