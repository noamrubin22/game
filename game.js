class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.steppingstones = [];
        this.level = 1;
    };

    preload() {
        console.log("game preload");
        this.background.preload();
        this.player.preload();
    };

    setup() {
        this.background.assignBackgroundLevel(this.level)
        this.player.setup();
    };

    draw() {
        this.background.draw();
        this.player.draw();
    };
};