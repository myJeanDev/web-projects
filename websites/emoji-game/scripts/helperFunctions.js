function getRandomItemFromArray(in_array) {
    if (in_array.length === 0) {
      return undefined;
    }
    var randomIndex = Math.floor(Math.random() * in_array.length);
    return in_array[randomIndex];
  }

function getRandomNumber(min, max) {
    min = typeof min === 'number' ? min : 0;
    max = typeof max === 'number' ? max : 1;
    if (min > max) {
      [min, max] = [max, min];
    }
    return Math.random() * (max - min) + min;
}

function getRandomItemFromArray(arr) {
  // Check if the array is not empty
  if (arr.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  // Generate a random index within the array length
  var randomIndex = Math.floor(Math.random() * arr.length);

  // Return the randomly selected item
  return arr[randomIndex];
}

function createStateFromSingleEmoji(in_size, in_emoji) {
  var nestedArray = [];
  for (var i = 0; i < in_size; i++) {
    var row = [];
    for (var j = 0; j < in_size; j++) {
      var myEmojiObject = createEmojiObject(this, in_emoji, i, j);
      row.push(myEmojiObject);
    }
    nestedArray.push(row);
  }
  return nestedArray;
}

function createStateFromMap(in_map) {
  var nestedArray = [];
  for (var i = 0; i < in_map.length; i++) {
    var row = [];
    for (var j = 0; j < in_map[i].length; j++) {
      var myEmojiObject = createEmojiObject(this, in_map[i][j], i, j);
      row.push(myEmojiObject);
    }
    nestedArray.push(row);
  }
  return nestedArray;
}

function createEmojiObject(in_Game, in_symbol, in_i, in_j){
  let currentClass = emojiMap.get(in_symbol);
  return new currentClass(in_Game, in_i, in_j);
}

function toggleNightMode(){
  let boardCells = document.getElementsByClassName("board_cell_text");
  if(nightMode){
    for(let i =0; i < boardCells.length; i++){
      document.body.classList.remove("noto-emoji-BW");
      boardCells[i].classList.remove("noto-emoji-BW");
      document.getElementById("nightMode").classList.remove("noto-emoji-BW");
      document.getElementById("copyButton").classList.remove("noto-emoji-BW");
      document.getElementById("resetButton").classList.remove("noto-emoji-BW");
    }
  }else{
    for(let i =0; i < boardCells.length; i++){
      document.body.classList.add("noto-emoji-BW");
      boardCells[i].classList.add("noto-emoji-BW");
      document.getElementById("nightMode").classList.add("noto-emoji-BW");
      document.getElementById("copyButton").classList.add("noto-emoji-BW");
      document.getElementById("resetButton").classList.add("noto-emoji-BW");
    }
  }
}

let nightMode = false;

document.getElementById("nightMode").addEventListener("click",()=>{
  if(nightMode){
    document.getElementById("nightMode").innerHTML = "🌕";
    toggleNightMode();
    nightMode = false;
  }else{
    document.getElementById("nightMode").innerHTML = "🌑";
    toggleNightMode();
    nightMode = true;
  }
});