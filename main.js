// initialize variables
let mic;
let fft;
let neededFreq;
let spectrum;
let indeXx;
let canvas;
let mode;
let peakDetect;
let soundFile2;
let butterfly;
let butterfly2;
let butterfly3;
let why;
// let spectralCentroid;

function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    // game has not started, so mode should be 0
    mode = 0;
    canvas = createCanvas(1100, 700);
    canvas.parent("canvas");
    textSize(50);
    game.setup();
}

function draw() {
    // clear();
    // load startscreen
    if (mode == 0) {
        game.background.draw();
    };

    text("PRESS ENTER TO START", 300, 450)
    // if enter button is pushed
    if (mode == 1) {
        game.draw();

        if (game.level == 1) {
            game.background.assignBackgroundLevel(game.level);
            // set timing for steppingstones
            if (frameCount % 100 === 0) {
                why = height / 2;
                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone(why));
                // console.log(game.steppingstones);
            } else if (frameCount % 120 === 0) {
                why = height - 280;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (game.player.score == 20) {
                game.level = 2;
            }
        } else if (game.level == 2) {
            game.background.assignBackgroundLevel(game.level);
            // set timing for steppingstones
            if ((frameCount % 65 === 0)) {
                // create new stone with different height
                why = height / 2;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (game.player.score == 40) {
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
            if (game.player.score == 60) {
                game.level = 4
            }
        } else if (game.level == 4) {
            game.background.assignBackgroundLevel(game.level);
            // set timing for steppingstones
            if ((frameCount % 100 === 0)) {
                why = height / 3;
                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone(why));
            }
            if (game.player.score == 400) {
                game.level = 5;
            }
        }



        // CHECK FOR COLISSION , REMOVE & ADD STONE, ADJUST SCORE
        game.steppingstones.forEach((steppingstone, index) => {
            // if player touches steppingstone
            if (steppingstone.isCollision(steppingstone, game.player)) {

                // image(butterfly3, this.x, this.y, this.width, this.height);
                // crash stone into particles

                // remove steppingstone when touched
                game.steppingstones.splice(index, 1);
                // console.log("colission");
                // increase score
                game.player.score += 10;

            };
            // steppingstone.preload();
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

const game = new Game();