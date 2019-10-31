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
    clear();
    // load startscreen
    if (mode == 0) {
        game.background.draw();
        // level = 0
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
        level = 1;

        // start audiocontext
        getAudioContext().resume();
    }
}

const game = new Game();