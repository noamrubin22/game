class Player {
    constructor() {
        this.x = 100;
        // this.y = 650;
        this.score = 0;
        this.easing = 0.05;
    };

    preload() {
        // image
    };

    setup() {
        this.width = 50;
        this.height = 50;
        this.y = 650;
        this.x = width / 4

        // initialize microphone input
        mic = new p5.AudioIn();
        mic.start();
    };

    draw() {
        //use volume as input
        let volume = mic.getLevel();
        fill("purple");
        stroke(0);

        // scale input volume and change y position
        let audioHeight = map(volume * 2.5, 0, 1, height, 0)
        this.y = height - (audioHeight / 2)
        // draw player using volume as y position
        rect(this.x, this.y, 50, 50);

        // set timing for steppingstones
        if (frameCount % 100 === 0) {
            console.log("create new steppingstone");
            game.steppingstones.push(new SteppingStone());
        }

        game.steppingstones.forEach((steppingstone, index) => {
            // if player touches steppingstone
            if (this.isCollision(steppingstone, this.player)) {
                // crash stone into particles
                // increase score

                // adds easing to the players position
                this.x = this.x + ((steppingstone.x - this.x) * this.easing);
                this.y = this.y + ((steppingstone.y - this.y) * this.easing);

                // remove steppingstone
                game.steppingstones.splice(index, 1);
            };
            steppingstone.draw();
        });
    };

    isCollision(steppingstone, ) {
        if (this.y + this.height < steppingstone.y || this.y > steppingstone.y + steppingstone.height) {
            return false;
        };
        if (this.x + this.width < steppingstone.x || this.x > steppingstone.x + steppingstone.width) {
            return false;
        }
        return true;
    };
};