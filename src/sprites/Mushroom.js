import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {

    // Touch Controls
    if (game.input.activePointer.isDown) {
      if (game.input.x >= 200 && this.x < 350) {
        this.x += 10
      } else if (game.input.x < 200 && this.x > 50) {
        this.x += -10
      }
    }

    // Keyboard Controls
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.x > 50) {
      this.x += -10
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.x < 350) {
      this.x += 10
    }

  }
}
