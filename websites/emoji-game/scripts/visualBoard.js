class VisualBoard{
    constructor(in_Game){
        this.currentGame = in_Game;
        this.size = this.currentGame.boardStateManager.currentState.length;
        this.createBoardTemplate();
        this.createGoalBoardTemplate();
        this.updateGoalBoardFromState();
        this.updateVisualBoardFromState();
    }

    createGoalBoardTemplate(){
        for(let i = 0; i < this.size; i++){
            let row = document.createElement("div");
            row.classList.add("row");
            document.getElementById("goalSpace").appendChild(row);
            for(let j = 0; j < this.size; j++){
                let board_cell = document.createElement("div");
                board_cell.classList.add("goal_board_cell");
                board_cell.id = i + "g" + j;
                row.appendChild(board_cell);
                let text_div = document.createElement("div");
                text_div.classList.add("goal_cell_text");
                board_cell.appendChild(text_div);
            }
        }
    }

    createBoardTemplate(){
        for(let i = 0; i < this.size; i++){
            let row = document.createElement("div");
            row.classList.add("row");
            document.getElementById("playSpace").appendChild(row);
            for(let j = 0; j < this.size; j++){
                let board_cell = document.createElement("div");
                board_cell.classList.add("board_cell");
                board_cell.id = i + " " + j;
                row.appendChild(board_cell);
                let text_div = document.createElement("div");
                text_div.classList.add("board_cell_text");
                text_div.classList.add("shake");
                board_cell.appendChild(text_div);
            }
        }
    }

    updateVisualBoardFromState(){
        let state = this.currentGame.boardStateManager.currentState;
        for(let i = 0; i < state.length; i++){
            for(let j = 0; j < state[i].length; j++){
                let textElement = document.getElementById(i + " " + j).firstChild;
                textElement.innerHTML = state[i][j].emoji;
            }
        }
    }
    updateGoalBoardFromState(){
        let goalState = this.currentGame.boardStateManager.goalState;
        for(let i = 0; i < goalState.length; i++){
            for(let j = 0; j < goalState[i].length; j++){
                let textElement = document.getElementById(i + "g" + j).firstChild;
                textElement.innerHTML = goalState[i][j].emoji;
            }
        }
    }
    updateVisualBoardAtIndex(in_emojiObject, in_i, in_j){
        let textElement = document.getElementById(in_i + " " + in_j).firstChild;
        textElement.classList.remove("shake");
        textElement.innerHTML = in_emojiObject.emoji;
        textElement.style.animation = "spawn " + ((this.currentGame.speed/1000)/2) + "s forwards";

        textElement.addEventListener('animationend', () => {
            textElement.style.animation = null;
            textElement.classList.add("shake");
          });
    }
    
}