class Player {
    constructor() {
        this.x = 100;
    };

    preload() {
        // image
    };

    setup() {
        this.width = 10;
        this.height = 10;
        this.y = height - 100;

        mic = new p5.AudioIn();
        mic.start();
    };

    draw() {
        clear();
        let volume = mic.getLevel();
        fill("purple");
        stroke(0);

        let audioHeight = map(volume * 3, 0, 1, height, 0)
        rect(width / 2, audioHeight - 200, 50, 50)
    }
}