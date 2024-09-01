let submitButton = document.getElementById("submitButton");
let fileButton = document.getElementById("file");
let bigBox = document.getElementById("bigBox");
fileButton.addEventListener("change", () => {
  let fileDisplay = document.getElementById("fileDisplay");
  var files = document.getElementById("file").files;
  if (files.length > 0) {
    submitButton.style.opacity = "100%";
    submitButton.style.transform = "translateY(0px);";
    submitButton.style.pointerEvents = "all";
    submitButton.style.cursor = "pointer";
    for (var i = 0; i < files.length; i++) {
      fileDisplay.innerHTML += "o ";
      fileDisplay.innerHTML += " ";
      fileDisplay.innerHTML += files[i].name;
      fileDisplay.innerHTML += " ";
      fileDisplay.innerHTML += " o";
      fileDisplay.innerHTML += "</br>";
    }
  }
});
