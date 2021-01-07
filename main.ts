controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dardo = sprites.createProjectileFromSprite(img`
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
        `, MiNave, 200, 0)
    dardo.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 200)
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let espectro: Sprite = null
let dardo: Sprite = null
let MiNave: Sprite = null
MiNave = sprites.create(img`
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
MiNave.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
MiNave.setPosition(10, 54)
controller.moveSprite(MiNave, 200, 200)
game.onUpdateInterval(500, function () {
    espectro = sprites.create(img`
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
    // Sólo vivirá 2 segundos
    espectro.lifespan = 2000
    espectro.setPosition(180, randint(0, 120))
    espectro.setVelocity(-100, 0)
})
