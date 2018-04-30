import "phaser";

export class Booter extends Phaser.Scene {

    constructor() {
        super({ key: "booter" });
    }

    public preload() {
        // TODO
    }

    public create() {
        this.scene.start("preloader");
    }
}
