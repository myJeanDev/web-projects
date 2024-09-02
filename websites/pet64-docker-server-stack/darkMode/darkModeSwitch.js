let dark = true;
let switchContainer = document.createElement("div");
let switchButton = document.createElement("div");
switchContainer.classList.add("switchContainer");
switchButton.classList.add("switchButton");
switchContainer.appendChild(switchButton);
document.body.appendChild(switchContainer);
switchContainer.addEventListener("click",()=>{
    if(dark === false){
        makeDark();
    }else{
        makeLight();
    }
});

function makeDark(){
    dark=true;
        switchContainer.style.border = "1px solid rgb(240,240,240)";
        switchButton.style.background = "rgb(240,240,240)";
        switchButton.style.right = "0";
        switchButton.style.transform = "translateY(-50%) translateX(100%)";
        switchContainer.style.background = "rgb(50,50,50)";
        console.log("Dark");
        let styler = document.getElementById("styler");
        styler.setAttribute("href", "darkMode/darkStyle.css");
            $(document).ready(function () {
  $.ajax({
      type: "POST",
      url: 'darkMode/darkModeSwitch.php',
      data: {
          darkMode: true
      },
  });
});
console.log("madeDark: "+ dark);
}
function makeLight(){
        dark=false;
        switchContainer.style.border = "1px solid rgb(50,50,50)";
        switchButton.style.background = "rgb(50,50,50)";
        switchButton.style.left = "0";
        switchButton.style.transform = "translateY(-50%) translateX(0%)";
        switchContainer.style.background = "transparent";
        let styler = document.getElementById("styler");
        styler.setAttribute("href", "../style.css");
            $(document).ready(function () {
                $.ajax({
                    type: "POST",
                    url: 'darkMode/darkModeSwitch.php',
                    data: {
                        darkMode: false
                    },
                });
            });
console.log("madeLight: "+ dark);
}

function checkCurrentState(){
            $(document).ready(function() {
            $.ajax({
                url : "darkMode/darkModeCheck.php",
                type : 'GET',
                success: function(result){
                    console.log("DARKMODE: " + result);
                    if(result === "true"){
                        makeDark();
                    }else{
                        makeLight();
                    }
                }
            });
        });
}
checkCurrentState();