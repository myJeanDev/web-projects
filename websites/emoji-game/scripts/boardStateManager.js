class BoardStateManager{
    constructor(in_Game, in_startState, in_goalState){
        this.currentGame = in_Game;
        this.currentState = this.initilizeEmptyState(in_startState.length);
        this.startState = in_startState;
        this.currentState = this.initilizeStateFromEmojis(in_startState);
        this.goalState = in_goalState;
        this.initilizeResetButton();
    }

    initilizeEmptyState(in_size) {
        var nestedArray = [];
        for (var i = 0; i < in_size; i++) {
          var row = [];
          for (var j = 0; j < in_size; j++) {
            var myEmojiObject = new EmojiBase();
            row.push(myEmojiObject);
          }
          nestedArray.push(row);
        }
        return nestedArray;
    }

    initilizeStateFromEmojis(in_state){
        var nestedArray = [];
        for (var i = 0; i < in_state.length; i++) {
          var row = [];
          for (var j = 0; j < in_state[i].length; j++) {
            row.push(in_state[i][j]);
          }
          nestedArray.push(row);
        }
        return nestedArray;
    }

    updateBoardAtIndex(in_emojiObject, in_i, in_j){
      this.currentState[in_i][in_j] = in_emojiObject;
      this.currentGame.visualBoard.updateVisualBoardAtIndex(in_emojiObject, in_i, in_j);
      updateTextCopyFromBoard(this.currentState);
  }

  initilizeResetButton(){
    document.getElementById("resetButton").addEventListener("click",()=>{
      this.resetBoard();
      this.currentGame.pool.resetPool();
      this.currentGame.is_running = false;
    });
  }

  resetBoard(){
    this.currentState = this.initilizeStateFromEmojis(this.startState);
    this.currentGame.visualBoard.updateVisualBoardFromState();
  }
}