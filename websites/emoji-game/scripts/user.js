class User {
    constructor(in_Game){
        this.currentGame = in_Game;
        this.setFollower(" ");
        this.initilizeEventListeners();
        this.initilizeMouseFollowing();
    }

    setFollower(in_emoji){
        document.getElementById("follower").innerHTML = in_emoji;
    }

    initilizeMouseFollowing(){
        //Move follower with mouse
        var computedStyle = window.getComputedStyle(document.getElementById("follower"));
        var fontSizeString = computedStyle.fontSize;
        var fontSizeNumeric = parseFloat(fontSizeString);
        document.addEventListener('mousemove', function(event) {
            document.getElementById("follower").style.left = event.clientX - fontSizeNumeric/2 + 'px';
            document.getElementById("follower").style.top = event.clientY - fontSizeNumeric/2 + 'px';
        });
    }

    initilizeEventListeners(){
        var poolItem = null
        //Handle click interactions
        document.addEventListener("mousedown",(event)=>{

            //grab an emoji
            if(event.target.className == "pool_cell"){
                poolItem = event.target;
                this.setFollower(event.target.innerHTML);

            //place the emoji
            }else if(event.target.className == "board_cell" && document.getElementById("follower").innerHTML != " "){
                let positionString = event.target.id;
                let splitPositionString = positionString.split(' ');
                let positionI = splitPositionString[0];
                let positionJ = splitPositionString[1];

                poolItem.classList.add("gray");
                var playGame = true;
                var poolElements = document.getElementsByClassName("pool_cell");
                for(var i =0; i < poolElements.length; i++){
                    if(!(poolElements[i].classList.contains("gray"))){
                        playGame = false;
                    }
                }
                if(playGame == true){
                    this.currentGame.is_running = true;
                    this.currentGame.mainLoop();
                } 


                var newEmojiObject = createEmojiObject(this.currentGame, document.getElementById("follower").innerHTML, positionI, positionJ);
                this.currentGame.boardStateManager.updateBoardAtIndex(newEmojiObject, positionI, positionJ);
                this.setFollower(" ");

            }else{
                this.setFollower(" ");
            }
        });
    }
}