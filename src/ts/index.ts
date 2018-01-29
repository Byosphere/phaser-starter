require('./../scss/index.scss');

import 'pixi';
import 'p2';
import 'phaser-ce';

export class Game {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {preload: this.preload, create: this.create});
    }

    preload() {
        // TODO
    }

    create() {
        // TODO
    }
};

window.onload = () => {
    var game = new Game();
};