let lista = 0
input.onGesture(Gesture.Shake, function () {
    let n = 0
    lista = randint(1, 6)
    basic.showNumber(n)
    basic.pause(1000)
    basic.clearScreen()
})
