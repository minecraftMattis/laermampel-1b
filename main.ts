let lautstaerke = 0
radio.setGroup(1)
basic.forever(function () {
    lautstaerke = input.soundLevel()
    if (lautstaerke > 134) {
        radio.sendNumber(lautstaerke)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
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
