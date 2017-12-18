import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    this.y += 15
    if (this.y > 650) {
      this.y = -50
      this.x = Math.floor(Math.random() * 400) + 1
      game.score += 1
      console.log(game)
      game.scoreDisplay.setText(`${game.score}`)
    }
  }
}
