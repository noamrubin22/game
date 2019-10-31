class SteppingStone {
    constructor(why) {
        console.log("constructor steppingstone")
        this.x = width;
        this.y = why;
        this.width = 80;
        this.height = 60;
    }

    preload() {
        console.log("preload steppingstone")
        // this.orbOfLight = loadImage("assets/light2.jpg");
        game.background.preload();
    }

    draw() {
        push();
        noFill()
        stroke('cyan');

        circle(this.x, this.y, this.width - 20)
        // image(this.orbOfLight, this.x, this.y, this.width, this.height);
        this.x -= 4;
        pop();
    };

    // image(this.orbOfLight, this.x, this.y, this.width, this.height);

    isCollision(steppingstone) {
        /* checks if player touches stone */
        if (game.player.y + game.player.height < (steppingstone.y) || game.player.y > steppingstone.y + steppingstone.height) {
            return false;
        };
        if (game.player.x + game.player.width < (steppingstone.x) || game.player.x > steppingstone.x + steppingstone.width) {
            return false;
        }
        return true;
    };
};