[← BlueDuino Rev2 Tutorial Page](BlueDuino_Rev2_Tutorial.md)

A simple chat demo for iOS to talk to Arduino.

### Software Requirements

  - Xcode
  - Arduino IDE

### HOW TO

  - Install the [AB_BLE
    library](https://github.com/AprilBrother/BlueDuino-Library) to
    Arduino. Here's a guide for [Installing an Arduino
    Library](https://learn.sparkfun.com/tutorials/installing-an-arduino-library).
  - Open Arduino IDE, set baud rate to 9600
  - Git clone the
    [BLEChatDemo-iOS](https://github.com/AprilBrother/BLEChatDemo-iOS),
    open the project with Xcode and compile to your iPhone.
      - Scan for the "ZeroBeacon" device and connect it
      - Type some strings to send, it will appear in Arduino's serial
        monitor
      - Type some strings in serial monitor and send, it will appear in
        iPhone's textfield.

<img src="http://7fvk57.com1.z0.glb.clouddn.com/chat.png-640.jpg">