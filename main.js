// initialize microphone
let mic;

function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    createCanvas(800, 540);
    game.setup();
}

function draw() {
    game.draw();
}

const game = new Game();