class Player {
    constructor() {
        this.x = 0;
        this.score = 0;
        // this.y = height/2
        this.easing = 0.12;
    };

    preload() {
        console.log("player preload");
        butterfly = loadImage("assets/butterfly1.png")
        butterfly2 = loadImage("assets/butterfly2.png")
        butterfly3 = loadImage("assets/butterfly3.png")
        // soundFile = loadSound("assets/hismoney.mp3")
        //;
        // soundFile2 = loadSound("assets/beat.mp3");
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
        text("LEVEL " + level, 40, 80);

        //use volume as input
        let volume = mic.getLevel();

        // scale input volume and change y position
        let audioHeight = map(volume * 4, 0, 1, height, 0);

        // adds easing to the player's position
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
        // };

        // fft.analyze();
        // peakDetect.update(fft);
        // console.log(peakDetec t);
        // soundFile.processPeaks(function (tempos) {
        //     console.log(tempos)
        // });
        // console.log(arr);

        // if (peakDetect.isDetected) {
        // console.log(peakDetect.isDetected)
        if (level == 1) {
            game.background.assignBackgroundLevel(level);
            // set timing for steppingstones
            if (frameCount % 100 === 0) {
                why = height / 2;
                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone(why));
            } else if (frameCount % 120 === 0) {
                why = height - 280;
                game.steppingstones.push(new SteppingStone(why));
            }
        }
        // change level
        if (this.score == 20) {
            level = 2;
        }


        if (level == 2) {
            game.background.assignBackgroundLevel(level);
            // set timing for steppingstones
            if ((frameCount % 65 === 0)) {
                // create new stone with different height
                why = height / 2;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (this.score == 40) {
                level = 3
            }
        }

        if (level == 3) {
            game.background.assignBackgroundLevel(level);
            // set timing for steppingstones
            if (frameCount % 30 === 0) {
                // create new stone with different height
                why = height / 2;
                game.steppingstones.push(new SteppingStone(why));
            }
            // change level
            if (this.score == 60) {
                level = 4
            }
        }

        if (level == 4) {
            game.background.assignBackgroundLevel(level);
            // set timing for steppingstones
            if ((frameCount % 100 === 0)) {
                why = height / 3;
                // console.log("create new steppingstone");
                game.steppingstones.push(new SteppingStone(why));
            }
            if (this.score == 400) {
                level = 5;
            }
        }

        game.steppingstones.forEach((steppingstone, index) => {
            // if player touches steppingstone
            if (this.isCollision(steppingstone, this.player)) {

                // image(butterfly3, this.x, this.y, this.width, this.height);
                // crash stone into particles

                // remove steppingstone
                game.steppingstones.splice(index, 1);
                console.log("colission");
                // increase score
                this.score += 10;

            };
            // steppingstone.preload();
            steppingstone.draw();
            // if steppingstone leaves the canvas
            if (steppingstone.x < -steppingstone.width) {
                // decrease score 
                this.score -= 10;
                // and remove from array
                game.steppingstones.splice(index, 1);
            }
        });
    };

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