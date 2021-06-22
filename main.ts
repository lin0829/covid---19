sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    vaccine.destroy(effects.warmRadial, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    virus.destroy(effects.ashes, 200)
    scene.cameraShake(6, 200)
})
let virus: Sprite = null
let vaccine: Sprite = null
music.powerUp.play()
game.setDialogTextColor(15)
game.showLongText("目前遭受到新冠病毒的威脅", DialogLayout.Full)
music.baDing.play()
game.showLongText("請問能幫忙救出治癒者嗎~", DialogLayout.Full)
music.baDing.play()
game.showLongText("累積1分能救出一位治癒者", DialogLayout.Full)
music.baDing.play()
game.showLongText("過程中必須小心病毒的攻擊", DialogLayout.Full)
music.baDing.play()
game.showLongText("那我們就開始吧 !", DialogLayout.Full)
scene.setBackgroundImage(assets.image`Temporary asset1`)
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ............eeee................
    ...........eeeeee...............
    ..........eeeeeeee..............
    .........eeeeeeeeee.............
    ........eeeeeeeeeeee............
    ........eeeeeeeeeeee............
    .........edddddddde.............
    ..........ddfddfdd..............
    ..........dddddddd..............
    ..........dddddddd..............
    ...........dddddd...............
    .........d45dddd54d.............
    ........dd45555554dd............
    .......dd.44555544.dd...........
    ......dd..44455444..dd..........
    ..........44444444..............
    ..........44444444..............
    ...........dd..dd...............
    ...........dd..dd...............
    ...........dd..dd...............
    ...........dd..dd...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(16, 73)
controller.moveSprite(mySprite, 100, 0)
info.setLife(10)
music.stopAllSounds()
game.onUpdateInterval(1000, function () {
    virus = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 6 . . . . . . . 
        . . . . . . 7 6 7 6 . . . . . . 
        . . . . . 7 6 7 6 7 6 . . . . . 
        . . . . . . 7 6 7 6 . . . . . . 
        . . . . . . . 7 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    virus.setPosition(randint(10, 150), 0)
    virus.vy = 80
})
game.onUpdateInterval(1000, function () {
    vaccine = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 2 5 5 . . . . . . 
        . . . . . 5 2 2 2 5 . . . . . . 
        . . . . . 5 5 2 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    vaccine.setPosition(randint(20, 100), 0)
    vaccine.vy = 100
})
forever(function () {
    music.playMelody("G F E C5 G F E C5 ", 300)
    music.playMelody("B A B G A B G C5 ", 300)
})
