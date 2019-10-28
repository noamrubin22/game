class SteppingStone {
    constructor() {
        console.log("steppingstones constructor");
        this.x = width;
        this.y = height - 200;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        fill("pink");
        stroke(0);
        rect(this.x, this.y, this.width, this.height);
        this.x -= 4;
    }
}