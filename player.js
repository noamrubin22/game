class Player {
    constructor() {
        this.x = 0;
        this.score = 0;
        // this.y = height/2
        this.easing = 0.12;
    };

    preload() {
        butterfly = loadImage("assets/butterfly.jpg")
        // soundFile = loadSound("assets/hismoney.mp3");
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
        // draw player

        //use volume as input
        let volume = mic.getLevel();
        fill("purple");
        stroke(0);

        // scale input volume and change y position
        let audioHeight = map(volume * 2, 0, 1, height, 0);

        // this.y = height - (audioHeight / 1.5);
        const target = height - (audioHeight / 1.5);

        // adds easing to the player's position
        // this.x = this.x + (((this.x) * this.easing));

        // this.y = (((height / 2 + 80) - this.y) * this.easing);
        this.y = this.y + (target - this.y) * this.easing;


        // draw player using volume as y position
        image(butterfly, this.x, this.y, this.width, this.height);
        // rect(this.x, this.y, 50, 50);

        fft.analyze();
        peakDetect.update(fft);
        // console.log(peakDetec t);
        // soundFile.processPeaks(function (tempos) {
        //     console.log(tempos)
        // });
        // console.log(arr);

        // if (peakDetect.isDetected) {
        // console.log(peakDetect.isDetected)
        if (level == 1) {
            // set timing for steppingstones
            if ((frameCount % 120 === 0) || (frameCount % 100 === 0)) {
                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone());
                console.log(this.score)
            }
            if (this.score == 30) {
                level = 2;
                game.background.preload();
            }
        }

        if (level == 2) {
            // set timing for steppingstones
            if (frameCount % 200 === 0) {
                // reset score

                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone());
            }
            if (this.score == 60) {
                level = 3
                game.background.preload();
            }
        }

        if (level == 3) {
            console.log("level 3")
            // set timing for steppingstones
            if (frameCount % 100 === 0) {
                // reset score

                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone());
            }
            if (this.score == 80) {
                level = 4
                game.background.preload();

            }
        }


        if (level == 4) {
            console.log("level 3")
            // set timing for steppingstones
            if ((frameCount % 100 === 0) && (frameCount % 20 === 0)) {
                // reset score

                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone());
            }

        }



        game.steppingstones.forEach((steppingstone, index) => {
            // if player touches steppingstone
            if (this.isCollision(steppingstone, this.player)) {

                // crash stone into particles

                // remove steppingstone
                game.steppingstones.splice(index, 1);

                // increase score
                this.score += 10;
                document.body.getElementsByTagName("h2")[0].innerText = "SCORE: " + this.score;

            };
            steppingstone.draw();
        });
    };


    // isCollision(steppingstone) {
    //     if (this.y + this.height < (steppingstone.y) || this.y > steppingstone.y + steppingstone.height) {
    //         return false;
    //     };
    //     if (this.x + this.width < (steppingstone.x) || this.x > steppingstone.x + steppingstone.width) {
    //         return false;
    //     }
    //     return true;
    // };

    isCollision(steppingstone) {
        if (this.y + this.height < (steppingstone.y) || this.y > steppingstone.y + steppingstone.height) {
            return false;
        };
        if (this.x + this.width < (steppingstone.x) || this.x > steppingstone.x + steppingstone.width) {
            return false;
        }
        return true;
    };
};