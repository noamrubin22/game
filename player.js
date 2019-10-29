class Player {
    constructor() {
        this.x = 100;
        this.score = 0;
        this.easing = 0.0003;
    };

    preload() {
        // image
        soundFile = loadSound("assets/hismoney.mp3");
        // soundFile2 = loadSound("assets/beat.mp3");
    };

    setup() {
        this.width = 50;
        this.height = 50;
        this.y = 650;
        this.x = width / 4;

        // initialize microphone input
        mic = new p5.AudioIn();
        mic.start();

        // initialize peakdetecter
        fft = new p5.FFT();
        peakDetect = new p5.PeakDetect();
    };

    draw() {
        //use volume as input
        let volume = mic.getLevel();
        fill("purple");
        stroke(0);

        // scale input volume and change y position
        let audioHeight = map(volume * 1.5, 0, 1, height, 0);
        this.y = height - (audioHeight / 2);

        // adds easing to the player's position
        this.x = this.x + ((this.width * this.easing));
        this.y = this.y + ((height - this.y) * this.easing);

        // draw player using volume as y position
        rect(this.x, this.y, 50, 50);

        fft.analyze();
        peakDetect.update(fft);
        // console.log(peakDetec t);
        // soundFile.processPeaks(function (tempos) {
        //     console.log(tempos)
        // });
        // console.log(arr);

        if (peakDetect.isDetected) {
            // console.log(peakDetect.isDetected)

            // console.log("create new steppingstone");
            game.steppingstones.push(new SteppingStone());
        }

        // // set timing for steppingstones
        // if (frameCount % 100 === 0) {

        game.steppingstones.forEach((steppingstone, index) => {
            // if player touches steppingstone
            if (this.isCollision(steppingstone, this.player)) {

                // crash stone into particles

                // remove steppingstone
                game.steppingstones.splice(index, 1);

                // increase score
                this.score = this.score + 10;
                document.body.getElementsByTagName("h2")[0].innerText = "SCORE: " + this.score;

            };
            steppingstone.draw();
        });
    };

    isCollision(steppingstone) {
        if (this.y + this.height < steppingstone.y || this.y > steppingstone.y + steppingstone.height) {
            return false;
        };
        if (this.x + this.width < steppingstone.x || this.x > steppingstone.x + steppingstone.width) {
            return false;
        }
        return true;
    };
};