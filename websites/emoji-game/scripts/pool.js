class Pool{
    constructor(in_Game, in_pool){
        this.startPool = in_pool;
        this.currentGame = in_Game;
        this.currentPool = in_pool;
        this.populatePool();
    }
    resetPool(){
        this.currentPool  = this.startPool;
        this.removeAllChildren();
        this.populatePool();
    }
    populatePool(){
        for (let i=0;i < this.currentPool.length;i++) {
            let pool_cell = document.createElement("span");
            pool_cell.classList.add("pool_cell");
            pool_cell.innerHTML = this.currentPool[i].emoji;
            document.getElementById("emojiPool").appendChild(pool_cell);
        }
    }
    removeAllChildren() {
        // Check if the provided element is valid
        let element = document.getElementById("emojiPool");
        if (element && element.nodeType === 1) {
          // Remove all child elements
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
        } else {
          console.error('Invalid element provided or element is not an HTML element.');
        }
      }
}

function createPoolFromMap(in_pool, in_countMap){
    let resultArray = [];
    for(let i = 0; i < in_pool.length; i++){
        let poolObj = new PoolObject(in_pool[i], in_countMap[i], i);
        resultArray[i] = poolObj;
    }
    return resultArray;
}


class PoolObject{
    constructor( in_emoji, in_count, in_spot){
        this.emoji = in_emoji;
        this.count = in_count;
        this.spot = in_spot;
    }
}