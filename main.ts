input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 10)
    _4digit.show(SCD30.readCO2())
    basic.pause(5000)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    _4digit.show(SCD30.readHumidity())
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 170)
    _4digit.show(SCD30.readTemperature())
    basic.pause(5000)
})
let winkel = 0
let _4digit: grove.TM1637 = null
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.setLedColor(0xff0000)
_4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
_4digit.set(7)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
let skippy = 2
basic.showLeds(`
    # . # . #
    . . . . .
    # . . . #
    . . . . .
    # . # . #
    `)
basic.setLedColor(0x00ff00)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.turnRgbLedOff()
basic.clearScreen()
basic.forever(function () {
    skippy += -1
    if (skippy == 0) {
        skippy = 5
        winkel = Math.map(SCD30.readCO2(), 400, 1200, 5, 175)
        pins.servoWritePin(AnalogPin.P1, Math.round(180 - winkel))
    }
    basic.pause(5000)
    _4digit.show(Math.round(SCD30.readTemperature()))
    basic.pause(5000)
    _4digit.show(SCD30.readCO2())
})
