let grid = {
  array: [],
  size: 25,
  container: document.getElementById("cont"),
  containerSize: 700,
  setContainerSize: () => {
    grid.container.style.width = grid.containerSize + "px";
    grid.container.style.height = grid.containerSize + "px";
  },
  create: () => {
    let calc = grid.containerSize / grid.size;
    for (let x = 0; x < grid.size; x++) {
      grid.array[x] = new Array();
      for (let y = 0; y < grid.size; y++) {
        let square = {
          body: document.createElement("DIV"),
          x: x,
          y: y,
          z: 0,
          color: () => {
            square.body.style.background =
              "rgb( " +
              square.z * 10 +
              "," +
              square.z * 10 +
              "," +
              square.z * 10 +
              ")";
          },
        };
        let r = 255 - (y * calc) / 1.5;
        let g = 200 - (x * calc) / 1.5;
        let b = 200;
        square.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
        grid.array[x][y] = square;
        square.body.classList.add("square");
        cont.appendChild(square.body);
        square.body.style.width = calc + "px";
        square.body.style.height = calc + "px";
        square.body.style.left = x * calc + "px";
        square.body.style.bottom = y * calc + "px";
        square.body.addEventListener("mouseover", () => {
          if (user.mouseDown == true) {
            grid.brush(x, y);
          }
        });
      }
    }
  },

  brush: (x, y) => {
    if (user.down) {
      map.array[user.viewX + x][user.viewY + y].z -= 1;
      map.array[user.viewX + x + 1][user.viewY + y + 1].z -= 1;
      map.array[user.viewX + x + 1][user.viewY + y].z -= 1;
      map.array[user.viewX + x][user.viewY + y + 1].z -= 1;
      map.array[user.viewX + x - 1][user.viewY + y - 1].z -= 1;
      map.array[user.viewX + x - 1][user.viewY + y].z -= 1;
      map.array[user.viewX + x][user.viewY + y - 1].z -= 1;
      map.array[user.viewX + x][user.viewY + y - 1].z -= 1;
    } else {
      map.array[user.viewX + x][user.viewY + y].z += 1;
      map.array[user.viewX + x + 1][user.viewY + y + 1].z += 1;
      map.array[user.viewX + x + 1][user.viewY + y].z += 1;
      map.array[user.viewX + x][user.viewY + y + 1].z += 1;
      map.array[user.viewX + x - 1][user.viewY + y - 1].z += 1;
      map.array[user.viewX + x - 1][user.viewY + y].z += 1;
      map.array[user.viewX + x][user.viewY + y - 1].z += 1;
    }
    grid.updateBlock(x, y);
    grid.updateBlock(x + 1, y + 1);
    grid.updateBlock(x - 1, y - 1);
    grid.updateBlock(x + 1, y);
    grid.updateBlock(x - 1, y);
    grid.updateBlock(x, y + 1);
    grid.updateBlock(x, y - 1);
  },
  updateAll: () => {
    for (let x = 0; x < grid.size; x++) {
      for (let y = 0; y < grid.size; y++) {
        grid.updateBlock(x, y);
      }
    }
  },
  updateBlock: (x, y) => {
    grid.array[x][y].z = map.array[user.viewX + x][user.viewY + y].z;
    grid.array[x][y].color();
    grid.array[x][y].body.style.transform =
      "translate3D(0,0," + grid.array[x][y].z + "px)";
    if (map.array[user.viewX + x][user.viewY + y].actor != null) {
      grid.updateActor(true, x, y);
    } else {
      grid.updateActor(false, x, y);
    }
    if (grid.array[x][y].z <= 3) {
      setTimeout(() => {
        grid.array[x][y].body.classList.add("wave");
      }, Math.floor(Math.random() * 100));
    } else {
      grid.array[x][y].body.classList.remove("wave");
    }
  },
  updateActor: (show, x, y) => {
    if (show == true) {
      while (grid.array[x][y].body.firstChild) {
        grid.array[x][y].body.removeChild(grid.array[x][y].body.firstChild);
      }
      grid.array[x][y].body.appendChild(
        map.array[user.viewX + x][user.viewY + y].actor.body
      );
    } else {
      while (grid.array[x][y].body.firstChild) {
        grid.array[x][y].body.removeChild(grid.array[x][y].body.firstChild);
      }
    }
  },
};

let map = {
  array: [],
  maxHeight: 20,
  size: 200,
  create: () => {
    for (let x = 0; x < map.size; x++) {
      map.array[x] = new Array();
      for (let y = 0; y < map.size; y++) {
        let tile = {
          x: x,
          y: y,
          z: 2,
          actor: null,
        };
        map.array[x][y] = tile;
      }
    }
  },
  smoothMap: () => {
    for (let x = 0; x < map.size; x++) {
      for (let y = 0; y < map.size; y++) {
        if (map.array[x][y].z > 5) {
          if (x == 0 || y == 0 || x > map.size - 4 || y > map.size - 4) {
          } else {
            map.array[x + 1][y + 0].z++;
            map.array[x - 1][y + 0].z++;
            map.array[x + 0][y + 1].z++;
            map.array[x + 0][y - 1].z++;
            map.array[x + 1][y + 1].z++;
            map.array[x - 1][y - 1].z++;
          }
        }
      }
    }
  },
  placeGrass: () => {
    for (let x = 0; x < map.size; x++) {
      for (let y = 0; y < map.size; y++) {
        if (map.array[x][y].z < 20 && map.array[x][y].z > 16) {
          console.log("made Grass");
          actors.createActor("grass", x, y);
        }
      }
    }
  },
  makeMountains: () => {
    // let randomX = Math.floor(Math.random() * map.size - 10);
    // let randomY = Math.floor(Math.random() * map.size - 10);
    let x = map.size / 2;
    let y = map.size / 2;
    let peak = map.maxHeight;
    map.array[x][y].z = peak;
    for (let ring = 0; ring <= 1; ring++) {
      map.array[x + 1][y + 1].z = 50;
      map.array[x + 1][y - 1].z = 50;
      map.array[x + 1][y + 0].z = 50;
    }
  },
  makeEdges: () => {
    for (let x = 0; x < map.size; x++) {
      for (let y = 0; y < map.size; y++) {
        for (let count = 5; count > 0; count--) {
          map.array[x][count].z = 0;
          map.array[count][y].z = 0;
          map.array[x][map.size - count].z = 0;
          map.array[map.size - count][y].z = 0;
        }
      }
    }
  },
};

let user = {
  viewX: map.size / 2,
  viewY: map.size / 2,
  mouseDown: false,
  down: false,
  brushSize: 1,
  checkKey: (e) => {
    e = e || window.event;
    if (e.keyCode == "38" || e.keyCode == "87") {
      if (
        user.viewY + grid.size < map.size ||
        user.viewX + grid.size < map.size
      ) {
        // up arrow
        user.viewX++;
        user.viewY++;
      } else {
      }
    } else if (e.keyCode == "40" || e.keyCode == "83") {
      if (user.viewY > 0 || user.viewX > 0) {
        // down arrow
        user.viewX--;
        user.viewY--;
      }
    } else if (e.keyCode == "37" || e.keyCode == "65") {
      if (user.viewX > 0) {
        // left arrow
        user.viewX--;
        user.viewY++;
      }
    } else if (e.keyCode == "39" || e.keyCode == "68") {
      if (user.viewY + grid.size > 0 || user.viewX + grid.size < map.size) {
        // right arrow
        user.viewX++;
        user.viewY--;
      }
    } else if (e.keyCode == "219") {
      console.log("--");
      user.decreaseBrush();
    } else if (e.keyCode == "221") {
      console.log("++");
      user.increaseBrush();
    } else if (e.keyCode == "32") {
      user.down = !user.down;
    }
    grid.updateAll();
  },
  addCheckKeyEvent: () => {
    document.onkeydown = user.checkKey;
  },
  increaseBrush: () => {
    user.brushSize += 1;
  },
  decreaseBrush: () => {
    user.brushSize -= 1;
  },
};

let actors = {
  createActor: (type, x, y) => {
    let actor = {
      body: null,
      x: 0,
      y: 0,
      z: 0,
      type: null,
    };
    actor.body = document.createElement("DIV");
    actor.x = x;
    actor.y = y;
    actor.type = type;
    actor.body.classList.add("object");
    actor.body.classList.add(type);
    map.array[x][y].actor = actor;
  },
  giveMovement: (actor) => {},
};

function initilize() {
  grid.setContainerSize();
  grid.create();
  map.create();
  map.smoothMap();
  user.addCheckKeyEvent();
  map.makeEdges();
  // map.makeMountains();
  map.placeGrass();
  actors.createActor("pillbug", map.size / 2 + 1, map.size / 2 + 1);
  actors.createActor("house", map.size / 2, map.size / 2);
  grid.updateAll();
  // oceanWaves(15);
}
initilize();

function oceanWaves(up) {
  for (let x = 0; x < grid.size; x++) {
    setTimeout(() => {
      for (let y = 0; y < grid.size; y++) {
        setTimeout(() => {
          grid.array[x][y].body.style.transform =
            "translate3D(0,0," + up + "px)";
          grid.array[x][y].z = up;
        }, y * 100);
      }
    }, x * 100);
  }
  setTimeout(() => {
    oceanWaves(up * -1);
  }, 2000);
}

document.body.onmousedown = function () {
  user.mouseDown = true;
};
document.body.onmouseup = function () {
  user.mouseDown = false;
};
