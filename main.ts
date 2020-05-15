edubitSoundBit.onEvent(SoundSensorCompareType.MoreThan, 800, function () {
    Mode += 1
})
let Speed = 0
basic.showIcon(IconNames.Heart)
let Mode = 0
basic.forever(function () {
    Speed = pins.map(
    edubitPotentioBit.readPotValue(),
    0,
    1023,
    0,
    255
    )
    if (Mode % 2 == 0) {
        edubitMotors.brakeMotor(MotorChannel.M1)
    } else {
        edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, Speed)
    }
})
