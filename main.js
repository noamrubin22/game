// initialize microphone
let mic;
let fft;
let neededFreq;
let spectrum;
// determines whether the game has started
let mode;
// let spectralCentroid;

function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    // game has not started
    mode = 0;
    createCanvas(1200, 1100);
    textSize(50);
    game.setup();
}

function draw() {
    clear();
    // load startscreen
    if (mode == 0) {
        game.background.draw();
    };

    text("PRESS ENTER TO START", 300, 450)
    // if enter button is pushed
    if (mode == 1) {
        game.draw();
    };
};

function keyPressed() {
    if (keyCode === ENTER) {
        mode = 1;
    }
}

const game = new Game();