
var Game = {
  preload: function () {
    this.load.image('background', 'img/background.png');
    this.load.image('houses', 'img/houses.png');
    this.load.image('clouds1', 'img/clouds1.png');
    this.load.image('clouds2', 'img/clouds2.png');
  },

  create: function () {
    this.game.add.sprite(0, 0, 'background')
    this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'houses').autoScroll(-70, 0)
    this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'clouds1').autoScroll(-40, 0)
    this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'clouds2').autoScroll(-90, 0)

    var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    spaceKey.onDown.add(this.restartGame, this)
    this.game.input.onTap.add(this.restartGame, this)
  },

  restartGame: function() {
    this.game.state.start('Game')
  }
}



var game = new Phaser.Game(480, 800, Phaser.AUTO, 'game')
game.state.add('Game', Game)
game.state.start('Game')