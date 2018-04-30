import { Constants } from "../data/constants";

export class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: "titlescene" });
    }

    public create() {
        this.add.text(5, 5, "titlescene", { fill: Constants.DEFAULT_COLOR });
    }
}
