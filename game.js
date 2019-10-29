class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.steppingstones = [];
        // treasure
    };

    preload() {
        console.log("game preload");
        this.background.preload();
        this.player.preload();
    };

    setup() {
        this.player.setup()
    };

    draw() {
        this.background.draw();
        this.player.draw();

        // set timing for steppingstones
        if (frameCount % 100 === 0) {
            console.log("create new steppingstone");
            this.steppingstones.push(new SteppingStone());
        }

        this.steppingstones.forEach((steppingstone, index) => {
            // if player touches steppingstone
            if (this.isCollision(steppingstone, this.player)) {
                // crash stone into particles
                // increase score
                // remove steppingstone
                this.steppingstones.splice(index, 1);
            }
            steppingstone.draw();

        });
    };

    isCollision(steppingstone, player) {
        if (player.y + player.height < steppingstone.y || player.y > steppingstone.y + steppingstone.height) {
            return false;
        };
        if (player.x + player.width < steppingstone.x || player.x > steppingstone.x + steppingstone.width) {
            return false;
        }
        return true;
    }
}