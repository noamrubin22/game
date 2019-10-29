class Player {
    constructor() {
        this.x = 100;
        // this.y = 650;
        this.score = 0;
    };

    preload() {
        // image
    };

    setup() {
        this.width = 50;
        this.height = 50;
        this.y = 650;
        // this.y = -900;

        // initialize microphone input
        mic = new p5.AudioIn();
        mic.start();
        this.x = width / 4
    };

    draw() {
        // clear();
        //use volume as input
        let volume = mic.getLevel();
        fill("purple");
        stroke(0);

        // store frequency
        // spectrum = fft.analyze();

        // let neededLowMidFreq = fft.getEnergy("lowMid");
        // let neededMidFreq = fft.getEnergy("highMid");

        // scale input volume
        let audioHeight = map(volume * 2.5, 0, 1, height, 0)
        // console.log(audioHeight);
        this.y = height - (audioHeight / 2)
        // draw player using volume as y position
        rect(this.x, this.y, 50, 50);
        // console.log(this.y);
        // // console.log(spectrum);

        // let neededLowFreq = fft.getEnergy("bass");
        // // console.log("mid", neededMidFreq);
        // if (neededMidFreq > 70) {
        //     // console.log("highmid", neededMidFreq);
        // }

        // if (neededLowMidFreq > 110) {
        // console.log("lowMid", neededLowMidFreq);
        // }


        // rect(width / 2, height - neededFreq, 50, 50);

        //moves rectangle up , using frequency
        // spectrum.forEach((frequency) => {
        //     rect(width / 4, height - frequency, 50, 50);

        // });
    }
}