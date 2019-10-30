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
        this.player.setup();
        // this.messagebox.setup();
    };

    draw() {
        this.background.draw();
        this.player.draw();
    };
};