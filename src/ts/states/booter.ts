import "phaser-ce";

export class Booter extends Phaser.State {

    public preload() {
        // Customize your game settings here

        //  Unless you specifically need to support multitouch I would recommend setting this to 1
        this.game.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.game.stage.disableVisibilityChange = false;

        // Scaling mode
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        // Centering game
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        // No antialiasing
        Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

        // Load your assets for the preloader here
    }

    public create() {
        // Starting the 'Preloader' state
        this.game.state.start("Preloader");
    }
}
