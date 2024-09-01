function createStarBackground(){
    for(i=0; i < 100; i++){
        let star = document.createElement("span");
        star.style.zIndex=0;
        star.innerHTML = "⭐";
        star.style.color = "white";
        star.style.position = "absolute";
        star.style.opacity = getRandomNumber(1,50) + "%";
        star.style.fontSize = getRandomNumber(1,6) +"px";
        star.style.left = getRandomNumber(0,100)+"%";
        star.style.top = getRandomNumber(0,100)+"%";
        star.classList.add("twinkle");
        document.getElementById("starBackground").appendChild(star);
    }
}
createStarBackground();