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
        // level 1
        this.bgStart = loadImage("assets/level1/background.png");
        this.img1 = loadImage("assets/level1/1.png");
        this.img2 = loadImage("assets/level1/2.png");
        this.img3 = loadImage("assets/level1/3.png");
        this.img4 = loadImage("assets/level1/4.png");
        this.img5 = loadImage("assets/level1/5.png");
        this.img6 = loadImage("assets/level1/6.png");
        this.img7 = loadImage("assets/level1/7.png");
        // level 2
        this.bgScreen = loadImage("assets/level2/background.png");
        this.img11 = loadImage("assets/level2/1.png");
        this.img12 = loadImage("assets/level2/2.png");
        this.img13 = loadImage("assets/level2/3.png");
        this.img14 = loadImage("assets/level2/4.png");
        this.img15 = loadImage("assets/level2/5.png");
        this.img16 = loadImage("assets/level2/6.png");
        this.img17 = loadImage("assets/level2/7.png");
        // level 3
        this.bgStartSc = loadImage("assets/level3/background.png");
        this.img21 = loadImage("assets/level3/1.png");
        this.img22 = loadImage("assets/level3/2.png");
        this.img23 = loadImage("assets/level3/3.png");
        this.img24 = loadImage("assets/level3/4.png");
        this.img25 = loadImage("assets/level3/5.png");
        this.img26 = loadImage("assets/level3/6.png");
        this.img27 = loadImage("assets/level3/7.png");
        // level 4
        this.bgStartScreen = loadImage("assets/level4/background.png");
        this.img31 = loadImage("assets/level4/1.png");
        this.img32 = loadImage("assets/level4/2.png");
        this.img33 = loadImage("assets/level4/3.png");
        this.img34 = loadImage("assets/level4/4.png");
        this.img35 = loadImage("assets/level4/5.png");
        this.img36 = loadImage("assets/level4/6.png");
        this.img37 = loadImage("assets/level4/7.png");
        this.bgFull = loadImage("assets/level4/background.png");

    }

    draw() {
        clear();
        // move background
        this.xPurpleFull -= 1.0;
        image(this.bgPurpleFull, this.xPurpleFull, 0, width, height);
        image(this.bgPurpleFull, this.xPurpleFull + width, 0, width, height);

        //make sure background is coming back
        if (this.xPurpleFull <= -width) {
            this.xPurpleFull = 0;
        }

        this.xPurpleHalf -= 1.2;
        image(this.bgPurpleHalf, this.xPurpleHalf, 0, width, height);
        image(this.bgPurpleHalf, width + this.xPurpleHalf, 0, width, height);
        if (this.xPurpleHalf <= -width) {
            this.xPurpleHalf = 0;
        }

        this.xPurpleWeeds -= 1.8;
        image(this.bgPurpleWeeds, this.xPurpleWeeds, 0, width, height);
        image(this.bgPurpleWeeds, width + this.xPurpleWeeds, 0, width, height);
        if (this.xPurpleWeeds <= -width) {
            this.xPurpleWeeds = 0;
        }

        this.xWeeds -= 2.0;
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

        this.xButterflies -= 2.4;
        image(this.bgButterflies, this.xButterflies, 0, width, height);
        image(this.bgButterflies, width + this.xButterflies, 0, width, height);
        if (this.xButterflies <= -width) {
            this.xButterflies = 0;
        }

        this.xGround -= 3.8;
        image(this.bgGround, this.xGround, 0, width, height);
        image(this.bgGround, width + this.xGround, 0, width, height);
        if (this.xGround <= -width) {
            this.xGround = 0;
        }
    }

    assignBackgroundLevel(level) {
        /* changes background variables based on level */
        if (level === 1) {
            this.bgGround = this.img1
            this.bgButterflies = this.img2
            this.bgTrees = this.img3
            this.bgWeeds = this.img4
            this.bgPurpleWeeds = this.img5
            this.bgPurpleHalf = this.img6
            this.bgPurpleFull = this.img7
        } else if (level === 2) {
            this.bgGround = this.img11
            this.bgButterflies = this.img12
            this.bgTrees = this.img13
            this.bgWeeds = this.img14
            this.bgPurpleWeeds = this.img15
            this.bgPurpleHalf = this.img16
            this.bgPurpleFull = this.img17
        } else if (level === 3) {
            this.bgGround = this.img21
            this.bgButterflies = this.img22
            this.bgWeeds = this.img24
            this.bgPurpleWeeds = this.img25
            this.bgPurpleHalf = this.img26
            this.bgPurpleFull = this.img27;
        } else if (level === 4) {
            this.bgGround = this.img31;
            this.bgButterflies = this.img32;
            this.bgTrees = this.img33;
            this.bgWeeds = this.img34;
            this.bgPurpleWeeds = this.img35;
            this.bgPurpleHalf = this.img36;
            this.bgPurpleFull = this.img37;
        }
    }
}