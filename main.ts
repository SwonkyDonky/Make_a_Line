input.onButtonPressed(Button.A, function () {
    if (dot.get(LedSpriteProperty.X) != 2) {
        game.gameOver()
    }
    if (dot.get(LedSpriteProperty.Y) == 4) {
        dot = game.createSprite(0, 3)
        time = 500
        game.addScore(1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (dot.get(LedSpriteProperty.Y) == 3) {
        dot = game.createSprite(0, 2)
        time = 250
        game.addScore(1)
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (dot.get(LedSpriteProperty.Y) == 2) {
        dot = game.createSprite(0, 1)
        time = 100
        game.addScore(1)
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (dot.get(LedSpriteProperty.Y) == 1) {
        dot = game.createSprite(0, 0)
        time = 40
        game.addScore(1)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (dot.get(LedSpriteProperty.Y) == 0) {
        basic.showIcon(IconNames.Happy)
        basic.showString("You won!")
        game.addScore(1)
        dot.delete()
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    game.pause()
    basic.pause(2000)
    game.pause()
})
let time = 0
let dot: game.LedSprite = null
dot = game.createSprite(0, 4)
time = 750
game.setScore(0)
basic.forever(function () {
    dot.move(1)
    basic.pause(time)
    dot.ifOnEdgeBounce()
})
