let Rock = 0
input.onGesture(Gesture.Shake, function () {
    Rock = randint(1, 3)
    if (Rock == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (Rock == 2) {
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    music.play(music.createSoundExpression(WaveShape.Square, 588, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
