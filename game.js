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
        if (frameCount % 220 === 0) {
            console.log("create new steppingstone");
            this.steppingstones.push(new SteppingStone());
            // console.log(this.steppingstones);
        }

        this.steppingstones.forEach((steppingstone) => {
            // console.log("draw steppingstone");
            steppingstone.draw();
        });
    };
}