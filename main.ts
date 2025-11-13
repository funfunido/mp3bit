 basic.forever(function() {
    led.plot(0, 3);
    led.plot(0, 4);
    led.plot(1, 3);
    led.plot(1, 4);
    led.plot(2, 3);
    led.plot(2, 4);
    led.plot(2, 2);
    led.plot(2, 1);
    led.plot(2, 0);
    led.plot(3, 1);
    led.plot(4, 2);
})
let toneHz = 262;

// music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
input.onPinPressed(TouchPin.P2, function () {
    toneHz = 262;
    resetNoise();
})

function resetNoise() {
    music.ringTone(toneHz)
}
//music.beat(BeatFraction.Eighth)

input.onButtonPressed(Button.A, function() {
    music.rest(1);
    toneHz -= 10;
    resetNoise();

})

input.onButtonPressed(Button.B, function () {
    music.rest(1);
    toneHz += 10;
    resetNoise();
})


input.onPinPressed(TouchPin.P0, function() {
    
})