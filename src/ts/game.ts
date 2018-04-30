import "phaser";

import { Constants } from "./data/constants";
import { Booter } from "./scenes/booter";
import { Preloader } from "./scenes/preloader";
import { TitleScene } from "./scenes/titleScene";

export class Game extends Phaser.Game {

    constructor() {
        super({
            type: Phaser.AUTO,
            width: Constants.GAME_WIDTH,
            height: Constants.GAME_HEIGHT,
            parent: "content",
            physics: {
                default: "arcade",
            },
            pixelArt: true,
            transparent: false,
            scene: [Booter, Preloader, TitleScene],
            title: Constants.GAME_TITLE,
            version: Constants.GAME_VERSION,
            url: "http://mygameurl.com",
            // console banner
            banner: {
                background: [
                    "#fff200",
                    "#38f0e8",
                    "#00bff3",
                    "#ec008c",
                ],
                hidePhaser: true,
                text: "#ffffff",
            },
        });
    }
}
