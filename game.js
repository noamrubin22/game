class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.steppingstones = [];
        this.level = 1;
        this.levelchanger = new LevelChanger();
    };

    preload() {
        console.log("game preload");
        this.background.preload();
        this.player.preload();
        console.log(this.level)
        // this.steppingstone.preload();
    };

    setup() {
        this.background.assignBackgroundLevel(this.level)
        this.player.setup();
        // this.messagebox.setup();
    };

    draw() {
        this.background.draw();
        this.player.draw();
    };
};