class Background {
    constructor() {
        console.log("background constructor");
        this.xGround = 0;
        this.xButterflies = 0;
        this.xTrees = 0;
        this.xWeeds = 0;
        this.xPurpleWeeds = 0;
        this.xPurpleHalf = 0;
        this.xPurpleFull = 0;
    }

    preload() {
        console.log("background preload");
        this.bgStartScreen = loadImage("assets/background.png");
        this.bgGround = loadImage("assets/1.png");
        this.bgButterflies = loadImage("assets/2.png");
        this.bgTrees = loadImage("assets/3.png");
        this.bgWeeds = loadImage("assets/4.png");
        this.bgPurpleWeeds = loadImage("assets/5.png");
        this.bgPurpleHalf = loadImage("assets/6.png");
        this.bgPurpleFull = loadImage("assets/7.png");
    }

    draw() {
        clear();
        // move background
        this.xPurpleFull -= 2;
        image(this.bgPurpleFull, this.xPurpleFull, 0, width);
        image(this.bgPurpleFull, this.xPurpleFull + width, 0, width);

        //make sure background is coming back
        if (this.xPurpleFull <= -width) {
            this.xPurpleFull = 0;
        }

        this.xPurpleHalf -= 1.8;
        image(this.bgPurpleHalf, this.xPurpleHalf, 0, width);
        image(this.bgPurpleHalf, width + this.xPurpleHalf, 0, width);
        if (this.xPurpleHalf <= -width) {
            this.xPurpleHalf = 0;
        }

        this.xPurpleWeeds -= 1.3;
        image(this.bgPurpleWeeds, this.xPurpleWeeds, 0, width);
        image(this.bgPurpleWeeds, width + this.xPurpleWeeds, 0, width);
        if (this.xPurpleWeeds <= -width) {
            this.xPurpleWeeds = 0;
        }

        this.xWeeds -= 1.6;
        image(this.bgWeeds, this.xWeeds, 0, width);
        image(this.bgWeeds, width + this.xWeeds, 0, width);
        if (this.xWeeds <= -width) {
            this.xWeeds = 0;
        }

        // // for purpl
        // this.xTrees -= 1;
        // image(this.bgTrees, this.xTrees, 0, width);
        // image(this.bgTrees, width + this.xTrees, 0, width);
        // if (this.xTrees <= -width) {
        //     this.xTrees = 0;
        // }

        this.xButterflies -= 1.9;
        image(this.bgButterflies, this.xButterflies, 0, width);
        image(this.bgButterflies, width + this.xButterflies, 0, width);
        if (this.xButterflies <= -width) {
            this.xButterflies = 0;
        }

        this.xGround -= 4;
        image(this.bgGround, this.xGround, 0, width);
        image(this.bgGround, width + this.xGround, 0, width);
        if (this.xGround <= -width) {
            this.xGround = 0;
        }
    }
}