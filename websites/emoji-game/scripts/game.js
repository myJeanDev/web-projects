//input level, this will check with the level database and populate based on that
//Levels will have: initial state, emoji pool, goal state

//the game is the overall shell
//we then create the board_state, pool, and goal from the level library
var demo = true

class Game {
    constructor() {
        this.level = 0;
        this.is_running = true;
        this.speed = 800;
        var mapData = this.fetchData();
        this.User = new User(this);
        this.pool;
    }

    async fetchData() {
        try {
            var mapData = {}
            if (demo) {
                {
                    mapData = {
                        "name": "Crab_Grass",
                        "start": [
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"]
                        ],
                        "poolmap": ["🦀", "🔥", "🐄"],
                        "poolcount": [1, 1, 1],
                        "goal": [
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            ["🌱", "🌱", "🌱", "🌱", "🌱", "🌱"],
                            [" ", " ", " ", " ", " ", "🦀"]
                        ]
                    }
                }
            } else {
                const response = await fetch('maps/mapData.json');
                const data = await response.json();
                mapData = data.map01;
            }


            var startMap = createStateFromMap(mapData.start);
            var goalMap = createStateFromMap(mapData.goal);

            this.boardStateManager = new BoardStateManager(this, startMap, goalMap);
            this.visualBoard = new VisualBoard(this);

            var poolObjects = createPoolFromMap(mapData.poolmap, mapData.poolcount);
            this.pool = new Pool(this, poolObjects);

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }

    activateEmojis() {
        for (let i = 0; i < this.boardStateManager.currentState.length; i++) {
            for (let j = 0; j < this.boardStateManager.currentState[i].length; j++) {
                let currentEmojiObject = this.boardStateManager.currentState[i][j];
                if (currentEmojiObject.can_act == true) {
                    currentEmojiObject.can_act = false;
                    currentEmojiObject.act();
                    currentEmojiObject.lifeSpanCounter();
                }

            }
        }

        for (let i = 0; i < this.boardStateManager.currentState.length; i++) {
            for (let j = 0; j < this.boardStateManager.currentState[i].length; j++) {
                this.boardStateManager.currentState[i][j].can_act = true;
            }
        }
    }
    mainLoop() {
        if (this.is_running) {
            setTimeout(() => {
                this.activateEmojis();
                this.visualBoard.updateVisualBoardFromState(this.boardStateManager.currentState);
                updateTextCopyFromBoard(this.boardStateManager.currentState);
                this.mainLoop();
                console.log("🔁");
            }, this.speed);
        } else {
            console.log("game over");
        }
    }
}