let lautstaerke = 0
basic.forever(function () {
    lautstaerke = input.soundLevel()
    if (lautstaerke > 160) {
        basic.showIcon(IconNames.Sad)
    } else if (lautstaerke > 60) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
