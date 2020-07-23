// initialize global variables
let mic;
let fft;
let neededFreq;
let spectrum;
let canvas;
let mode;
let butterfly;
let butterfly2;
let butterfly3;
let why;
let volume;
let target;
let freq;
let currentFrameCount;
let timer = 30;

function preload() {
  console.log("preload");
  game.preload();
  this.mariposa = loadImage("assets/mariposa.png");
  this.textX = 0;
  this.textY = 80;
}

function setup() {
  console.log("setup");
  canvas = createCanvas(1050, 650);
  resetSketch();
  loop();
}

function draw() {
  // load startscreen
  if (mode == 0) {
    game.background.draw();
    fill(color(500, 150));

    let instructions =
      "Catch as many light orbs as you can within the given time. The butterfly responds to frequency: clip your fingers or use a high voice to move it up and use a low voice to bring it down. Catching a light orb will increase your play-time. Make sure you are in a quite environment.";
    rect(width / 4, 50, height - 80, 350, 50);
    push();
    fill(color(255, 202));
    stroke("#222222");
    strokeWeight(4.5);
    text(instructions, 300, 100, 510, 300);
    text("Press enter to start, and enjoy!", 400, 300, 510, 400);
    pop();
  }
  // if enter button is pushed
  if (mode == 1) {
    game.draw();

    // start timer
    timeIsUp();
    if (timer >= 60) {
      let newTime = timer - 60;
      if (newTime < 10) {
        newTime = "0" + newTime;
      }
      text("1:" + newTime, width - 100, 60);
    } else if (timer <= 60 && timer >= 10) {
      text("0:" + timer, width - 100, 60);
    } else {
      text("0:0" + timer, width - 100, 60);
    }
    // when timer is 0 game over
    if (timer == 0) {
      game.background.assignBackgroundLevel(game.level);
      fill(color(500, 150));
      textFont("Georgia");
      let gameOver = "GAME OVER!";
      rect(width / 4, 50, height - 80, 350, 50);
      push();
      fill(color(255, 202));
      stroke("#222222");
      strokeWeight(4.5);
      text(gameOver, 460, 150, 510, 300);
      text(
        `You reached level ${game.level} and your score is  ${game.player.score}`,
        300,
        200,
        510,
        400
      );
      pop();
      // stop game
      noLoop();
      // make sure player can play again
      // mode = 0;
    }

    if (game.level == 1) {
      game.background.assignBackgroundLevel(game.level);
      // set timing for steppingstones
      if (frameCount % 100 === 0) {
        why = height / 5;

        game.steppingstones.push(new SteppingStone(why));
      } else if (frameCount % 120 === 0) {
        why = height - 180;
        game.steppingstones.push(new SteppingStone(why));
      }
      // change level
      if (game.player.score == 100) game.level = 2;
    } else if (game.level == 2) {
      game.background.assignBackgroundLevel(game.level);
      // set timing for steppingstones
      if (frameCount % 150 === 0) {
        // create new stone with different height
        why = height / 4;
        game.steppingstones.push(new SteppingStone(why));
      } else if (frameCount % 60 === 0) {
        why = height - 100;
        game.steppingstones.push(new SteppingStone(why));
      }
      // change level
      if (game.player.score == 200) {
        game.level = 3;
      }
    } else if (game.level == 3) {
      game.background.assignBackgroundLevel(game.level);
      // set timing for steppingstones
      if (frameCount % 30 === 0) {
        // create new stone with different height
        why = height - 100;
        game.steppingstones.push(new SteppingStone(why));
      }
      // change level
      if (game.player.score == 300) {
        currentFrameCount = frameCount;
        game.level = 4;
      }
    } else if (game.level == 4) {
      // upload background pic
      game.background.assignBackgroundLevel(game.level);
      // set timing for steppingstones
      if (
        frameCount > currentFrameCount + 100 &&
        frameCount % 10 === 0 &&
        frameCount < currentFrameCount + 500
      ) {
        why = 200;
        game.steppingstones.push(new SteppingStone(why));
      } else if (frameCount % 100 === 0) {
        why = height - 200;
        game.steppingstones.push(new SteppingStone(why));
      } else if (frameCount % 60 === 0) {
        why = height / 4;
        game.steppingstones.push(new SteppingStone(why));
      }
      // change level
      if (game.player.score == 1000) {
        currentFrameCount = frameCount;
        game.level = 5;
      }

      // finishing game screen
      if (game.player.score > 1000 || game.level == 5) {
        // go to win screen, show score and level
        mode = 3;
        fill(color(500, 150));
        rect(width / 4, 50, height - 80, 350, 50);
        push();
        fill(color(255, 202));
        stroke("#222222");
        strokeWeight(4.5);
        textFont("Georgia");
        text("C O N G R A T U L A T I O N S !", 350, 100, 510, 400);
        text(
          `You reached level ${game.level}, your score is ${game.player.score} and you even have ${timer} seconds left `,
          310,
          180,
          510,
          400
        );
        text("press enter to start again", 380, 320, 510, 400);
        console.log(mode);
        pop();
        // remove last steppingstones
        game.steppingstones.forEach((steppingstone, index) => {
          game.steppingstones.splice(index, game.steppingstones.length);
        });
      }
    }
    // CHECK FOR COLISSION , REMOVE & ADD STONE, ADJUST SCORE
    game.steppingstones.forEach((steppingstone, index) => {
      // if player touches steppingstone
      if (steppingstone.isCollision(steppingstone, game.player)) {
        // remove steppingstone when touched
        game.steppingstones.splice(index, 1);
        // increase score
        game.player.score += 10;
        // increase timer
        timer += 1;
      }
      steppingstone.draw();
      // if steppingstone leaves the canvas
      if (steppingstone.x < -steppingstone.width) {
        // decrease score
        game.player.score -= 10;
        // and remove from array
        game.steppingstones.splice(index, 1);

        // show gameover screen when score is negative
        if (game.player.score < 0) {
          mode = 3;
          game.background.assignBackgroundLevel(game.level);
          fill(color(500, 150));
          rect(width / 4, 50, height - 80, 350, 50);
          push();
          fill(color(255, 202));
          stroke("#222222");
          strokeWeight(4.5);
          textFont("Georgia");
          text("game over..", 470, 100, 510, 400);
          text(
            `you reached level ${game.level} and your score is`,
            310,
            180,
            510,
            400
          );
          text(`${game.player.score}`, 510, 220, 510, 400);
          text("press enter to start again", 380, 320, 510, 400);
          pop();
          // remove last steppingstones
          game.steppingstones.forEach((steppingstone, index) => {
            game.steppingstones.splice(index, game.steppingstones.length);
          });
        }
      }
    });
  }
}

function keyPressed() {
  // restart game if game-over
  if (
    (keyCode === ENTER && game.player.score < 0) ||
    (keyCode === ENTER && timer == 0) ||
    (keyCode === ENTER && game.player.score > 1000) ||
    (keyCode === ENTER && game.level == 5)
  ) {
    // reset values
    mode = 0;
    game.level = 1;
    game.player.score = 0;
    time = 30;
    resetSketch();
    console.log("mode after keypress", mode);
  } else if (keyCode === ENTER) {
    mode = 1;
    level = 1;
    game.player.score = 0;
    console.log("keypressed");
    // start audiocontext
    getAudioContext().resume();
  }
}

function resetSketch() {
  mode = 0;
  timer = 30;
  canvas.parent("canvas");
  game.background.assignBackgroundLevel(1);
  textSize(22);
  textFont("Georgia");
  textStyle(NORMAL);
  game.setup();
  loop();
}

function timeIsUp() {
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
    console.log(timer);
  }
}

const game = new Game();
