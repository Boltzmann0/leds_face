input.onGesture(Gesture.Shake, function on_gesture_shake() {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function on_forever() {
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.Rollerskate)
    } else {
        basic.clearScreen()
    }
    
})
