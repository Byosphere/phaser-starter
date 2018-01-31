import "p2";
import "pixi";
import "phaser-ce";

import { Constants } from "./utils/constants";

import { Booter } from "./states/booter";
import { Preloader } from "./states/preloader";
import { MainMenu } from "./states/main-menu";

export class Game extends Phaser.Game {

    constructor() {
        super(Constants.GAME_WIDTH, Constants.GAME_HEIGHT, Phaser.AUTO, "content");

        this.state.add("Boot", Booter, false);
        this.state.add("Preloader", Preloader, false);
        this.state.add("MainMenu", MainMenu, false);

        this.state.start("Boot");
    }

}
