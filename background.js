class Background {
    constructor() {
        console.log("background constructor");
        this.xFlowers = 0;
        this.xClouds = 0;
        this.bgFlowers;
        this.bgClouds;

    }

    preload() {
        console.log("background preload");
        this.bgFlowers = loadImage("assets/flowers.jpg");
        this.bgClouds = loadImage("assets/background-clouds.png");
        console.log(this.bgClouds, 10, 10);
    }

    draw() {
        // clear();
        // move background
        this.xFlowers -= 1;
        image(this.bgFlowers, this.xFlowers + width, 0, width);
        //make sure flowers are coming back
        if (this.xFlowers <= -width) {
            this.xFlowers = 0;
        }

        // for clouds
        this.xClouds -= 2;
        // load and position images
        image(this.bgClouds, this.xClouds, 30, 100, 100);
        image(this.bgClouds, width + this.xClouds, 30, 100, 100);

        // if clouds leave the canvas
        if (this.xClouds <= -width) {
            this.xClouds = 0;
        }

    }
}