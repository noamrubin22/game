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
    // game has not started, so mode should be 0
    mode = 0;
    canvas = createCanvas(1100, 700);
    canvas.parent("canvas");
    textSize(25);
    textFont("Georgia");
    textStyle(NORMAL);
    // setInterval(timeIsUp, 800);
    game.setup();
}

function draw() {
    // load startscreen
    if (mode == 0) {
        game.background.draw();
    };
    fill(color(500, 150));
    // image(this.mariposa, 100, 100);

    let instructions = "try to catch as many light orbs as possible in the given time. use your voice or any other sound to make the player move. catching a light orb will increase your playing-time.";
    text(instructions, 30, height - 300, 444, 300, 50)
    text("press enter to start, and enjoy!", 50, height - 100, 444, 200, 50)

    // if enter button is pushed
    if (mode == 1) {
        game.draw();

        // start timer
        timeIsUp();
        if (timer >= 60) {
            let newTime = timer - 60
            if (newTime < 10) {
                newTime = "0" + newTime;
            }
            text("1:" + newTime, width - 100, 60);
        } else if (timer <= 60 && timer >= 10) {
            text("0:" + timer, width - 100, 60);
        } else {
            console.log("TEN NINE..")
            text("0:0" + timer, width - 100, 60);
        }
        // when timer is 0 game over
        if (timer == 0) {
            text('GAME OVER', width / 3, height / 2 + 100);
            // go to gameover screen, show score and level
            game.background.assignBackgroundLevel(game.level);
            text(`you reached level ${game.level} and your score is  ${game.player.score}`, width / 4, height / 2);
            noLoop();
        }

        if (game.level == 1) {
            game.background.assignBackgroundLevel(game.level);
            // set timing for steppingstones
            if (frameCount % 100 === 0) {
                why = height / 2;

                game.steppingstones.push(new SteppingStone(why));

            } else if (frameCount % 120 === 0) {
                why = height - 280;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (game.player.score == 100) {
                game.level = 2;
            }
        } else if (game.level == 2) {
            game.background.assignBackgroundLevel(game.level);
            // set timing for steppingstones
            if ((frameCount % 120 === 0) && (frameCount % 150 === 0)) {
                // create new stone with different height
                why = height / 2;
                game.steppingstones.push(new SteppingStone(why));
            } else if (frameCount % 60 === 0) {
                why = height - 280;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (game.player.score == 300) {
                game.level = 3
            }
        } else if (game.level == 3) {
            game.background.assignBackgroundLevel(game.level);
            // set timing for steppingstones
            if (frameCount % 30 === 0) {
                // create new stone with different height
                why = height / 2;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (game.player.score == 500) {
                currentFrameCount = frameCount;
                game.level = 4
            }
        } else if (game.level == 4) {
            // activate frequency measurer
            game.player.voice = 1;
            // upload background pic
            game.background.assignBackgroundLevel(game.level);
            push()
            textFont("Georgia");
            text("use your voice", 0, this.textY, 600, 200);
            pop()

            // set timing for steppingstones
            if ((frameCount > currentFrameCount + 100) && (frameCount % 10 === 0) && (frameCount < currentFrameCount + 500)) {
                why = 100;
                game.steppingstones.push(new SteppingStone(why));
            } else if ((frameCount % 100 === 0) && (frameCount % 30 === 0) && (frameCount < currentFrameCount + 2000)) {
                why = height - 200;
                game.steppingstones.push(new SteppingStone(why));
            } else if ((frameCount > currentFrameCount + 100) && (frameCount % 50 === 0) && (frameCount < currentFrameCount + 1000)) {
                why = height - 150;
                game.steppingstones.push(new SteppingStone(why))
            } else if ((frameCount % 66 === 0) && (frameCount < currentFrameCount + 1000)) {
                why = 300;
                game.steppingstones.push(new SteppingStone(why))

            }
        };

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
            };
            steppingstone.draw();
            // if steppingstone leaves the canvas
            if (steppingstone.x < -steppingstone.width) {
                // decrease score 
                game.player.score -= 10;
                // and remove from array
                game.steppingstones.splice(index, 1);
            }
        });
    };
};


function keyPressed() {
    if (keyCode === ENTER) {
        mode = 1;
        level = 1;

        // start audiocontext
        getAudioContext().resume();
    }
}

function timeIsUp() {
    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
        console.log(timer);
    }
}

const game = new Game();