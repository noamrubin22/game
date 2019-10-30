class SteppingStone {
    constructor() {
        // console.log("steppingstones constructor");
        this.x = width;
        this.y = height / 2;
        this.width = 80;
        this.height = 60;
    }

    draw() {
        fill("pink");
        stroke(0);
        rect(this.x, this.y, this.width, this.height);
        this.x -= 4;
    }

    // removeSteppingStone() {
    //     // generative art?
    //     // remove();
    // }
}