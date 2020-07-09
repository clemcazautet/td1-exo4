input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        led.unplot(x, y)
        y += -1
        x = 5
        led.plot(x, y)
    }
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    if (x == 4) {
        led.unplot(x, y)
        y += 1
        x = -1
        led.plot(x, y)
    }
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
