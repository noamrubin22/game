class LevelChanger {
    constructor(level) {
        this.x = 0;
        this.y = 0;
        this.level = level;
    }

    preload() {
        this.bgStartScreen = loadImage("assets/level1/background.png");
    }
    setup() {
        game.background.preload();
    };
    draw() {
        clear();
        image(this.bgStartScreen, this.x, this.y, 1100, 700);
    }
};