input.onButtonPressed(Button.A, function () {
    basic.showNumber(SCD30.readCO2())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(SCD30.readHumidity())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(SCD30.readTemperature())
})
basic.setLedColor(0xff0000)
SCD30.setCalibration400ppm()
basic.setLedColor(0x00ff00)
basic.forever(function () {
	
})
