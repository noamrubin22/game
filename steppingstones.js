class SteppingStone {
    constructor(why) {
        console.log("constructor steppingstone")
        this.x = width;
        this.y = why;
        this.width = 80;
        this.height = 80;
        this.light = loadImage("assets/light.png");
    }

    preload() {
        console.log("preload steppingstone")
        game.background.preload();
    }

    draw() {
        image(this.light, this.x, this.y, this.width, this.height);
        this.x -= 4;
    };

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