let wordHolder = document.getElementById("wordHolder");
let wordElm = document.getElementById("word");
let submitElm = document.getElementById("submission");
let wordBankElm = document.getElementById("wordBankHolder");
let scoreDisplay = document.getElementById("scoreDisplay");


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

let wordManager = {
  wordBankArray: [],
  goalArray: [],
  randomArray: [],
  submissionArray: [],
  removeItem: (array, value) => {
    let i = 0;
    while (i < array.length) {
      if (array[i] === value) {
        array.splice(i, 1);
      } else {
        ++i;
      }
    }
    return array;
  },
  updateObjectIndex: () => {
    for (let key = 0; key < wordManager.submissionArray.length; key++) {
      wordManager.submissionArray[key].index = key;
      console.log(wordManager.submissionArray[key].index);
    }
  },
  cull: (array, length) => {
    while (array.length > length) {
      array.pop();
    }
    return array;
  },
  combine: (array1, array2) => {
    return array1.concat(array2);
  },
  shuffle: (array) => {
    console.log("shuffling definition of word...")
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  },
  visualize: (array, location) => {
    console.log("adding visuals for definition...")
    for (let x = 0; x < array.length; x++) {
      let wordBox = {
        body: document.createElement("DIV"),
        word: array[x],
        inBank: true,
        index: 0,
      };
      wordBox.body.addEventListener("click", () => {
        if (wordBox.inBank == true) {
          //places word in submission
          wordBox.body.classList.remove("wordBankWord");
          wordBox.body.classList.add("submissionWord");
          submitElm.appendChild(wordBox.body);
          wordManager.submissionArray.push(wordBox);
          wordManager.updateObjectIndex();
          console.log(wordManager.submissionArray);
          wordBox.inBank = false;
        } else {
          wordBox.body.classList.remove("submissionWord");
          wordBox.body.classList.add("wordBankWord");
          location.appendChild(wordBox.body);
          wordManager.submissionArray.splice(wordBox.index, 1);
          wordManager.updateObjectIndex();
          console.log(wordManager.submissionArray);
          wordBox.inBank = true;
        }
      });
      wordBox.body.classList.add("wordBankWord");
      wordBox.body.innerHTML = wordBox.word;
      location.appendChild(wordBox.body);
    }
  },
};

let scoreKeeper = {
  score: 0,
  scorePlacement: () => {
    console.log("Scoring Placement");
    let count = 0;
    loop();
    function loop() {
      if (count < wordManager.submissionArray.length) {
        if (
          wordManager.goalArray[count] ==
          wordManager.submissionArray[count].word
        ) {
          wordManager.submissionArray[count].body.classList.add("correct");
          if (wordManager.submissionArray[count].word.length >= 5) {
            scoreKeeper.score++;
            scoreKeeper.score++;
            scoreKeeper.score++;
            scoreKeeper.score++;
          } else {
            scoreKeeper.score++;
            scoreKeeper.score++;
            scoreKeeper.score++;
          }
        } else {
          if (
            wordManager.goalArray[count - 1] ==
            wordManager.submissionArray[count].word ||
            wordManager.goalArray[count + 1] ==
            wordManager.submissionArray[count].word ||
            wordManager.goalArray[count + 2] ==
            wordManager.submissionArray[count].word ||
            wordManager.goalArray[count - 2] ==
            wordManager.submissionArray[count].word
          ) {
            wordManager.submissionArray[count].body.classList.add("close");
            if (wordManager.submissionArray[count].word.length >= 5) {
              scoreKeeper.score++;
              scoreKeeper.score++;
            } else {
              scoreKeeper.score++;
            }
          } else {
            scoreKeeper.score--;
            wordManager.submissionArray[count].body.classList.add("wrong");
          }
        }
        count++;
        console.log(scoreKeeper.score);
        scoreDisplay.innerHTML = "";
        scoreDisplay.innerHTML = scoreKeeper.score;
        localStorage.setItem("score", scoreKeeper.score);
        setTimeout(loop, 200);
      } else {
        console.log("end Of loop");
        setTimeout(() => {
          nextWord();
        }, 500);
        return;
      }
    }
  },
};

let wordAPI = {
  grabWord() {
    console.log("grabbing random word: using random-word-api...");
    let request = new XMLHttpRequest();
    request.open("GET", "https://random-word-api.herokuapp.com/word", true);
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        if (data != null) {
          wordAPI.defineWord(data.toString()); //this calls the define function
          console.log("WORD:", data.toString());
        }
        return data.toString();
      } else {
        console.log("error");
      }
    };
    request.send();
  },
  defineWord: (word) => {
    console.log("defining <" + word + "> using dictionary-api...");
    wordElm.innerHTML = word;
    let request = new XMLHttpRequest();
    request.open(
      "GET",
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      true
    );
    request.onload = function () {
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        data.forEach((word) => {
          meaningStructure(0);
          function meaningStructure(n) {
            let definition =
              word.meanings[0].definitions[n].definition || "NothingHere";
            if (definition == "NothingHere") {
              console.log("error: could not definitions short enough.");
              wordAPI.grabWord();
              return;
            }
            definition = definition.toString().replace(/[^a-zA-Z ]/g, "");
            definition = definition.toLowerCase();
            definition = definition.split(" ");
            if (definition.length > 40) {
              console.log("grabbing definition n+1: length of definition too long");
              meaningStructure(n + 1);
            } else {
              console.log("definition's length is within allowed range");
              wordManager.goalArray = definition;
              manageWords();
            }
          }
          return "done";
        });
      } else {
        console.log("error: failed to define <" + word + ">.");
        wordAPI.grabWord();
      }
    };
    request.send();
  },
};

async function initilize() {
  wordHolder.addEventListener("click", () => {
    scoreKeeper.scorePlacement();
  });
  wordAPI.grabWord();
}
function manageWords() {
  let g = new Array();
  g.push(...wordManager.goalArray);
  g = wordManager.shuffle(g);
  g = wordManager.cull(g, 20);
  wordManager.visualize(g, wordBankElm);
}
function nextWord() {
  function removeSubmission() {
    let count = 0;
    loop();
    function loop() {
      console.log("Remove", count);
      if (count < wordManager.submissionArray.length) {
        wordManager.submissionArray[count].body.classList.add("remove");
        count++;
        setTimeout(loop, 100);
      } else {
        setTimeout(() => {
          wordManager.wordBankArray = [];
          wordManager.goalArray = [];
          wordManager.randomArray = [];
          wordManager.submissionArray = [];
          removeAllChildNodes(submitElm);
          removeAllChildNodes(wordBankElm);
          wordAPI.grabWord();
        }, wordManager.submissionArray.length * 90 + 500);
        console.log("end of loop.");
        return;
      }
    }
  }
  removeSubmission();
}
initilize();
scoreKeeper.score = localStorage.getItem("score");
scoreDisplay.innerHTML = "";
scoreDisplay.innerHTML = scoreKeeper.score;
