var timerValue = 59;
var startButton;

function setup() {
    //   createCanvas(400, 100);
    //   textAlign(CENTER);
    setInterval(timeIt, 1000);
}

function draw() {
    background(220);
    if (timerValue <= 60) {
        text("0:" + timerValue, width / 2, height / 2);
    }

    if (timerValue == 0) {
        text('GAME OVER', width / 2, height / 2 + 15);
    }
}

function timeIt() {
    if (timerValue > 0) {
        timerValue--;
    }
}