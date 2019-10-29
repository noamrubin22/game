// initialize variables
let mic;
let fft;
let neededFreq;
let spectrum;
let indeXx;
let canvas;
let mode;
let soundFile;
let peakDetect;
// let spectralCentroid;

function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    // game has not started, so mode should be 0
    mode = 0;
    canvas = createCanvas(1200, 1100);
    canvas.parent("canvas");
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
        soundFile.play();
        soundFile.loop();
        // start audiocontext
        getAudioContext().resume();
    }
}

const game = new Game();