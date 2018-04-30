import "phaser";

export class Preloader extends Phaser.Scene {

    constructor() {
        super({ key: "preloader" });
    }

    public preload() {
        // TODO
    }

    public create() {
        this.scene.start("titlescene");
    }

}
