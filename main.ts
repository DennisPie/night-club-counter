input.onButtonPressed(Button.A, function () {
    people += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(people)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    people += -2
})
input.onGesture(Gesture.Shake, function () {
    people = 0
})
let people = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    `)
people = 0
basic.forever(function () {
    if (people == 100) {
        music.playMelody("D E F G F E F C5 ", 120)
        basic.showString("GOOD JOB")
    }
})
