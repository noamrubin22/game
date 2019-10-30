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
        console.log(level);
        if (level === 1) {
            this.bgStartScreen = loadImage("assets/level1/background.png");
            this.bgGround = loadImage("assets/level1/1.png");
            this.bgButterflies = loadImage("assets/level1/2.png");
            this.bgTrees = loadImage("assets/level1/3.png");
            this.bgWeeds = loadImage("assets/level1/4.png");
            this.bgPurpleWeeds = loadImage("assets/level1/5.png");
            this.bgPurpleHalf = loadImage("assets/level1/6.png");
            this.bgPurpleFull = loadImage("assets/level1/7.png");
        } else if (level === 2) {
            this.bgStartScreen = loadImage("assets/level2/background.png");
            this.bgGround = loadImage("assets/level2/1.png");
            this.bgButterflies = loadImage("assets/level2/2.png");
            this.bgTrees = loadImage("assets/level2/3.png");
            this.bgWeeds = loadImage("assets/level2/4.png");
            this.bgPurpleWeeds = loadImage("assets/level2/5.png");
            this.bgPurpleHalf = loadImage("assets/level2/6.png");
            this.bgPurpleFull = loadImage("assets/level2/7.png");
        } else if (level === 3) {
            this.bgStartScreen = loadImage("assets/level3/background.png");
            this.bgGround = loadImage("assets/level3/1.png");
            this.bgButterflies = loadImage("assets/level3/2.png");
            this.bgTrees = loadImage("assets/level3/3.png");
            this.bgWeeds = loadImage("assets/level3/4.png");
            this.bgPurpleWeeds = loadImage("assets/level3/5.png");
            this.bgPurpleHalf = loadImage("assets/level3/6.png");
            this.bgPurpleFull = loadImage("assets/level3/7.png");
        } else if (level === 4) {
            this.bgStartScreen = loadImage("assets/level4/background.png");
            this.bgGround = loadImage("assets/level4/1.png");
            this.bgButterflies = loadImage("assets/level4/2.png");
            this.bgTrees = loadImage("assets/level4/3.png");
            this.bgWeeds = loadImage("assets/level4/4.png");
            this.bgPurpleWeeds = loadImage("assets/level4/5.png");
            this.bgPurpleHalf = loadImage("assets/level4/6.png");
            this.bgPurpleFull = loadImage("assets/level4/7.png");
        } else {
            this.bgPurpleFull = loadImage("assets/level4/background.png");
        }
    }

    draw() {
        clear();
        // move background
        this.xPurpleFull -= 2;
        image(this.bgPurpleFull, this.xPurpleFull, 0, width, height);
        image(this.bgPurpleFull, this.xPurpleFull + width, 0, width, height);

        //make sure background is coming back
        if (this.xPurpleFull <= -width) {
            this.xPurpleFull = 0;
        }

        this.xPurpleHalf -= 1.8;
        image(this.bgPurpleHalf, this.xPurpleHalf, 0, width, height);
        image(this.bgPurpleHalf, width + this.xPurpleHalf, 0, width, height);
        if (this.xPurpleHalf <= -width) {
            this.xPurpleHalf = 0;
        }

        this.xPurpleWeeds -= 1.3;
        image(this.bgPurpleWeeds, this.xPurpleWeeds, 0, width, height);
        image(this.bgPurpleWeeds, width + this.xPurpleWeeds, 0, width, height);
        if (this.xPurpleWeeds <= -width) {
            this.xPurpleWeeds = 0;
        }

        this.xWeeds -= 1.6;
        image(this.bgWeeds, this.xWeeds, 0, width, height);
        image(this.bgWeeds, width + this.xWeeds, 0, width, height);
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
        image(this.bgButterflies, this.xButterflies, 0, width, height);
        image(this.bgButterflies, width + this.xButterflies, 0, width, height);
        if (this.xButterflies <= -width) {
            this.xButterflies = 0;
        }

        this.xGround -= 4;
        image(this.bgGround, this.xGround, 0, width, height);
        image(this.bgGround, width + this.xGround, 0, width, height);
        if (this.xGround <= -width) {
            this.xGround = 0;
        }
    }
}