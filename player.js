class Player {
    constructor() {
        this.x = 0;
        this.score = 0;
        this.easing = 0.12;
    };

    preload() {
        console.log("player preload");
        butterfly = loadImage("assets/butterfly1.png")
        butterfly2 = loadImage("assets/butterfly2.png")
        butterfly3 = loadImage("assets/butterfly3.png")
    };

    setup() {
        console.log("player setup")
        this.width = 80;
        this.height = 80;
        this.y = 650;
        this.x = width / 4;

        // initialize microphone input
        mic = new p5.AudioIn();
        mic.start();


        // let steppingstone = new Steppingstone(height / 2, 1);
        // if (level == 2) {
        // game.background.preload();
        // }

        // initialize peakdetecter
        // fft = new p5.FFT();
        // peakDetect = new p5.PeakDetect();
    };

    draw() {
        // adjust score and level
        textSize(28);
        textFont('Helvetica');
        text("SCORE: " + this.score, 40, 50);
        fill(255);
        text("LEVEL " + game.level, 40, 80);

        //use scaled volume as input for y position
        let volume = mic.getLevel();
        let audioHeight = map(volume * 4, 0, 1, height, 0);

        // add easing to the player's position to slow down
        const target = height - (audioHeight / 1.5);
        this.y = this.y + (target - this.y) * this.easing;

        // change butterfly images to make him fly
        if (frameCount % 5 == 0) {
            // draw player using volume as y position
            image(butterfly, this.x, this.y, this.width, this.height);
        } else {
            //draw player using volume as y position
            image(butterfly2, this.x, this.y, this.width, this.height);
        };
    };
    // fft.analyze();
    // peakDetect.update(fft);
    // console.log(peakDetec t);
    // soundFile.processPeaks(function (tempos) {
    //     console.log(tempos)
    // });
    // console.log(arr);

    // if (peakDetect.isDetected) {
    // console.log(peakDetect.isDetected)
};