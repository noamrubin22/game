// initialize variables
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
let timer = 59;

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

    let instructions = "try to catch as many light orbs as possible, using your voice or any other sound. ";
    text(instructions, 30, height - 300, 444, 300, 50)
    text("press enter to start, and enjoy!", 50, height - 180, 444, 200, 50)

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
            // console.log(timer);
        } else if (timer <= 60) {
            text("0:" + timer, width - 100, 60);
        }
        // when timer is 0 game over
        if (timer == 0) {
            text('GAME OVER', width - 100, 60);
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
            if (game.player.score == 40) {
                game.level = 2;
            }
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
        if (game.player.score == 100) {
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
        if (game.player.score == 180) {
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
        if ((frameCount > 1100) && (frameCount % 10 === 0) && (frameCount < 2000)) {
            why = 100;
            game.steppingstones.push(new SteppingStone(why));
        } else if ((frameCount % 100 === 0) && (frameCount % 30 === 0) && (frameCount < 3000)) {
            why = height - 200;
            game.steppingstones.push(new SteppingStone(why));
        } else if ((frameCount > 1100) && (frameCount % 50 === 0) && (frameCount < 3000)) {
            why = height - 150;
            game.steppingstones.push(new SteppingStone(why))
        } else if ((frameCount % 66 === 0) && (frameCount < 3000)) {
            why = 300;
            // console.log(frameCount);
            game.steppingstones.push(new SteppingStone(why))
        } else if (frameCount > 4000) {
            text(`time is up! your score is: ${game.player.score}`, 350, 350, 500, 500);
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
            timer += 3;
            console.log(timer);
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
// };

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