class EmojiBase{
    constructor(in_Game, in_i, in_j){
      this.currentGame = in_Game;
      this.timeAlive = 0;
      this.lifeSpan = -1;
      this.emoji = ' ';
      this.deathEmoji = ' ';
      this.position = [parseInt(in_i),parseInt(in_j)];
      this.can_act = false;
    }
    lifeSpanCounter(){
      if(this.lifeSpan != -1){
        if((this.timeAlive >= this.lifeSpan)){
          this.die();
        }
      }
      this.timeAlive++;
    }
    die(){
      let emptyObject = createEmojiObject(this.currentGame, this.deathEmoji, this.position[0], this.position[1]);
      this.currentGame.boardStateManager.updateBoardAtIndex(emptyObject, this.position[0], this.position[1]);
    }
    act(){
    }

    getAdjacentSpaces(i, j) {
        let adjacentPositions = [];
        if (i > 0) {
          adjacentPositions.push({ x: i - 1, y: j });
        }
        if (i < this.currentGame.boardStateManager.currentState.length - 1) {
          adjacentPositions.push({ x: i + 1, y: j });
        }
        if (j > 0) {
          adjacentPositions.push({ x: i, y: j - 1 });
        }
        if (j < this.currentGame.boardStateManager.currentState[i].length - 1) {
          adjacentPositions.push({ x: i, y: j + 1 });
        }
        return adjacentPositions;
      }
}

//Spawn(emoji): Spawns an emoji on all eligible neighbors
//Move(from->to, trail): Move to an eligible spot, leave behind a trail emoji
//Timer(): Dies after a period of time
//Replacers(): just replaces itself with another emoji


//Fire emoji
//search all neighbors
//select the ones that are flammable
//spawns fires onto those places
//fire after a time replaces itself with ashes


const sharedFunctions = {
  move: function() {
    let newEmojiObject = createEmojiObject(this.currentGame, this.trail, this.position[0], this.position[1]);
    this.currentGame.boardStateManager.updateBoardAtIndex(newEmojiObject, this.position[0], this.position[1]);

    let newPosition = getRandomItemFromArray(this.getAdjacentSpaces(this.position[0], this.position[1]));
    this.currentGame.boardStateManager.updateBoardAtIndex(this, newPosition.x, newPosition.y);
    this.position[0] = newPosition.x;
    this.position[1] = newPosition.y;
  },
  walk: function() {
      console.log("walking!");
  }
};


let flammables = ['🌱'];

class Fire extends EmojiBase{
    constructor(in_Game, in_i, in_j){
      super(in_Game, in_i, in_j);
      this.emoji = '🔥';
      this.deathEmoji = '✨';
      this.priority = 1;
      this.lifeSpan = 2;
      this.speed = 1;
      this.act = this.burn;
    }
    burn(){
        let listOfNeighbors = this.getAdjacentSpaces(this.position[0], this.position[1]);
        for(let i=0; i < listOfNeighbors.length; i++){
          let emojiAtPosition = this.currentGame.boardStateManager.currentState[listOfNeighbors[i].x][listOfNeighbors[i].y].emoji;
          for(let flammableItem = 0; flammableItem < flammables.length; flammableItem++){
            if(emojiAtPosition == flammables[flammableItem]){
              let newEmojiObject = createEmojiObject(this.currentGame, this.emoji, listOfNeighbors[i].x, listOfNeighbors[i].y);
              this.currentGame.boardStateManager.updateBoardAtIndex(newEmojiObject, listOfNeighbors[i].x, listOfNeighbors[i].y);
            }
          }
      }
    }
}

class Sparkles extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
    this.emoji = '✨';
    this.deathEmoji = ' ';
    this.lifeSpan = 1;
  }
}

class Crab extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
      this.emoji = '🦀';
      this.deathEmoji = '💀';
      this.lifeSpan = -1;
      this.trail = ' ';
      this.act = this.move;
    }

    move(){
      //Maybe walking can be singular for each character
      //person only walks right
      //animal only walks left
      //cow walks in a circle
      //ect
      
      //Case1: You walk over a space, destroying that emoji
      //Case2: You cannot walk over a space
      //Case3: You walk over a space, and die because you walked into something that kills
      let movementPattern = [[0,1]];

      let newPosition = [this.position[0] + movementPattern[this.timeAlive % movementPattern.length][0], this.position[1] + movementPattern[this.timeAlive % movementPattern.length][1]];
      if(newPosition[0] < this.currentGame.boardStateManager.currentState.length && newPosition[0] >= 0){
        if(newPosition[1] < this.currentGame.boardStateManager.currentState.length && newPosition[1] >= 0){
          let newEmojiObject = createEmojiObject(this.currentGame, this.trail, this.position[0], this.position[1]);
          this.currentGame.boardStateManager.updateBoardAtIndex(newEmojiObject, this.position[0], this.position[1]);

          this.currentGame.boardStateManager.updateBoardAtIndex(this, newPosition[0], newPosition[1]);
          this.position[0] = newPosition[0];
          this.position[1] = newPosition[1];
        }
      }
    }
}

class Cow extends EmojiBase{
  //if cow doesn't eat a plant after 2 turns it will die
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
      this.emoji = '🐄';
      this.deathEmoji = '💀';
      this.lifeSpan = -1;
      this.trail = ' ';
      this.act = this.move;
    }

    move(){
      let movementPattern = [[0,1],[0,1],[1,0],[1,0],[0,-1],[0,-1],[-1,0],[-1,0]];

      let newPosition = [this.position[0] + movementPattern[this.timeAlive % movementPattern.length][0], this.position[1] + movementPattern[this.timeAlive % movementPattern.length][1]];
      if(newPosition[0] < this.currentGame.boardStateManager.currentState.length && newPosition[0] >= 0){
        if(newPosition[1] < this.currentGame.boardStateManager.currentState.length && newPosition[1] >= 0){
          let newEmojiObject = createEmojiObject(this.currentGame, this.trail, this.position[0], this.position[1]);
          this.currentGame.boardStateManager.updateBoardAtIndex(newEmojiObject, this.position[0], this.position[1]);

          this.currentGame.boardStateManager.updateBoardAtIndex(this, newPosition[0], newPosition[1]);
          this.position[0] = newPosition[0];
          this.position[1] = newPosition[1];
        }
      }
    }
}

class FootPrint extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
    this.emoji = '👣';
  }
}

class Seedling extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
      this.emoji = '🌱';
    }
}

class Cloud extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
    this.emoji = '☁️';
  }
}

class Empty extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
    this.emoji = ' ';
  }
}
class Rock extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
    this.emoji = '🪨';
  }
}

class Skull extends EmojiBase{
  constructor(in_Game, in_i, in_j){
    super(in_Game, in_i, in_j);
    this.emoji = '💀';
  }
}

const emojiMap = new Map([
  ['🔥', Fire],
  ['🦀', Crab],
  ['🌱', Seedling],
  ['☁️', Cloud],
  ['👣', FootPrint],
  [' ', Empty],
  ['🪨', Rock],
  ['✨', Sparkles],
  ['💀', Skull],
  ['🐄', Cow],
]);