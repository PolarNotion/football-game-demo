/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Enemy from '../sprites/Enemy'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    game.physics.startSystem(Phaser.Physics.ARCADE)

    game.score = 0
    game.scoreDisplay = game.add.text(this.world.centerX, this.world.centerY, "0", {
      font: "65px Arial",
      fill: "#ff0044",
      align: "center"
    })


    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: 550,
      asset: 'mushroom',
    })

    this.enemy = new Enemy({
      game: this.game,
      x: Math.floor(Math.random() * 400) + 1, 
      y: -20,
      asset: 'mushroom',
    })

    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.enemy)
    game.input.activePointer.capture = true
    game.physics.enable(this.mushroom, Phaser.Physics.ARCADE)
    game.physics.enable(this.enemy, Phaser.Physics.ARCADE)
  }

  update() {
    game.physics.arcade.collide(this.mushroom, this.enemy, function() {
      game.destroy()
    })
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
