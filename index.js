const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example
};

console.log("Hello World!");

const game = new Phaser.Game(config);

class Example extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image("background", "background.png");
    }
    
    create() {
        this.add.image(800, 600, 'background');
    }
}