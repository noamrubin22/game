class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.steppingstones = [];
        this.levelchanger = new LevelChanger();
    };

    preload() {
        console.log("game preload");
        this.background.preload();
        this.player.preload();
        // this.steppingstone.preload();
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