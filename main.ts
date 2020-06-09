sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 5 5 5 5 5 2 . . . . . 
. . . . 2 5 8 7 8 5 2 . . . . . 
. . . . 2 5 7 8 7 5 2 . . . . . 
. . . . 2 5 8 7 8 5 2 . . . . . 
. . . . 2 5 5 5 5 5 2 . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
    dart.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
4 4 4 4 4 4 4 4 . . . . . . . . 
8 8 8 8 8 8 8 8 8 8 . . . . . . 
4 4 4 4 7 5 2 a 4 4 4 . . . . . 
4 4 4 4 7 5 2 a 4 4 4 . . . . . 
8 8 8 8 8 8 8 8 8 8 . . . . . . 
4 4 4 4 4 4 4 4 . . . . . . . . 
2 2 . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . a . . . 
. . . . . . . . 5 a 5 a a . . . 
. . . . 5 3 5 3 5 a 5 a a . . . 
. . . 3 5 3 5 3 5 a 5 a a 2 2 . 
. . . 3 5 3 5 3 5 a 5 a a 2 2 . 
. . . . 5 3 5 3 5 a 5 a a . . . 
. . . . . . . . 5 a 5 a a . . . 
. . . . . . . . . . . . a . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.lifespan = 2000
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(0, 120))
})
