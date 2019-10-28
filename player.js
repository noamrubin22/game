class Player {
    constructor() {
        this.x = 100;
    };

    preload() {
        // image
    };

    setup() {
        this.width = 100;
        this.height = height;
        // this.y = -900;

        // initialize microphone input
        mic = new p5.AudioIn();
        mic.start();

        // initialize FFT input (microphone)
        fft = new p5.FFT();
        fft.setInput(mic);

    };

    draw() {
        // clear();
        //use volume as input
        // let volume = mic.getLevel();
        fill("purple");
        stroke(0);

        // store frequency
        spectrum = fft.analyze();
        // let octaves = fft.getOctaveBands();

        // octaves.forEach((octave) => {
        //     rect(width / 4, height - octave, 50, 50);
        //     console.log(octave);
        // });
        // // console.log(octaves);
        // let neededLowMidFreq = fft.getEnergy("lowMid");
        // let neededMidFreq = fft.getEnergy("highMid");
        // // scale input volume
        // let audioHeight = map(volume * 3, 0, 1, height, 0)
        // // draw player using volume as y position
        // rect(width / 4, height - 130 - neededMidFreq, 50, 50);
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
        spectrum.forEach((frequency) => {
            rect(width / 4, height - frequency, 50, 50);

        });
    }
}