class SteppingStone {
    constructor(why, level) {
        console.log("constructor steppingstone")
        // console.log("steppingstones constructor");
        this.x = width;
        this.y = why;
        this.width = 80;
        this.height = 60;
        this.level = level;
    }

    preload() {
        console.log("preload steppingstone")
        this.orbOfLight = loadImage("assets/light2.jpg");
        game.background.preload();
    }

    draw() {
        console.log("level", level)
        push();
        noFill()
        stroke('cyan');

        circle(this.x, this.y, this.width - 20)
        // image(this.orbOfLight, this.x, this.y, this.width, this.height);
        this.x -= 4;
        pop();
    }
};

//         if (this.level == 1) {
//             // set timing for steppingstones
//             if (frameCount % 100 === 0) {
//                 why = height / 2;
//                 console.log("hi");
//                 // console.log("create new steppingstone");
//                 game.steppingstones.push(new SteppingStone(why));
//             } else if (frameCount % 120 === 0) {
//                 why = height - 280;
//                 game.steppingstones.push(new SteppingStone(why));
//             }
//         }
//         if (player.score == 20) {
//             level = 2;
//             // game.levelchanger.preload();
//             game.background.preload();
//         }


//         if (level == 2) {
//             // set timing for steppingstones
//             if ((frameCount % 65 === 0)) {
//                 // reset score

//                 // console.log("create new steppingstone");
//                 game.steppingstones.push(new SteppingStone());
//             }
//             if (game.player.score == 200) {
//                 level = 3
//                 game.background.preload();
//             }
//         }

//         if (level == 3) {
//             // set timing for steppingstones
//             if (frameCount % 100 === 0) {
//                 // reset score

//                 // console.log("create new steppingstone");
//                 game.steppingstones.push(new SteppingStone());
//             }
//             if (game.player.score == 300) {
//                 level = 4
//                 game.background.preload();

//             }
//         }

//         if (level == 4) {
//             // set timing for steppingstones
//             if ((frameCount % 100 === 0) && (frameCount % 20 === 0)) {
//                 // reset score

//                 // console.log("create new steppingstone");
//                 game.steppingstones.push(new SteppingStone());
//             }
//             if (game.player.score == 400) {
//                 level = 5;
//                 game.background.preload();
//             }
//         }

//         game.steppingstones.forEach((steppingstone, index) => {
//             // if game.player touches steppingstone
//             if (game.player.isCollision(steppingstone, game.player)) {

//                 // image(butterfly3, game.player.x, game.player.y, game.player.width, game.player.height);
//                 // crash stone into particles

//                 // remove steppingstone
//                 game.steppingstones.splice(index, 1);

//                 // increase score
//                 game.player.score += 10;

//             };
//             // steppingstone.preload();
//             steppingstone.draw();
//             // if steppingstone leaves the canvas
//             if (steppingstone.x < -steppingstone.width) {
//                 // decrease score
//                 game.player.score -= 10;
//                 // and remove from array
//                 game.steppingstones.splice(index, 1);
//             }
//         });
//     };

//     isCollision(steppingstone) {
//         if (game.player.y + game.player.height < (steppingstone.y) || game.player.y > steppingstone.y + steppingstone.height) {
//             return false;
//         };
//         if (game.player.x + game.player.width < (steppingstone.x) || game.player.x > steppingstone.x + steppingstone.width) {
//             return false;
//         }
//         return true;
//     };
// };