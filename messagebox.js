class MessageBox {
    constructor() {
        this.height = 150;
        this.width = 250;
        this.x = 0;
        this.y = 0;
        // this.scores = game.player.score;
    }

    preload() {
        this.messageBox = loadImage("assets/score.png");
    }
    draw() {
        // image(this.messageBox, this.x, this.y, this.width, this.height);
        // textSize(28);
        // textFont('Helvetica');
        // text("SCORE:", 40, 50);
        // fill(255);
        // text('LEVEL', 40, 80);

    }
}