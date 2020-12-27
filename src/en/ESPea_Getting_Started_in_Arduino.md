[← ESPea Main Page](ESPea.md)

In order to upload code to the ESP8266 and use the serial console,
connect any data-capable micro USB cable to the ESPea and the other side
to your computer's USB port. Install the required [CP2104 USB
driver](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)
to have the COM/Serial port appear properly.

## Install the Arduino IDE 1.6.8 or greater

Download [Arduino IDE from Arduino.cc (1.6.8 or
greater)](http://www.arduino.cc/en/Main/Software)\! You can use your
existing IDE if you have already installed it

## Install the ESP8266 Board Package

There is some ways to install hardware package, choose one you like

  - [Using Boards
    Manager](https://github.com/esp8266/arduino#installing-with-boards-manager)
  - [Using git
    version](https://github.com/esp8266/arduino#using-git-version)
  - [Using
    PlatformIO](https://github.com/esp8266/arduino#using-platformio)

## Setup ESP8266 Support

  - After install hardware package, you will see NodeMCU boards in the
    Tools→Board:xxx.
  - Choose NodeMCU 1.0 and the matching COM port for CP2104

## Blink Test

  - Choose the example in File -\> Examples -\> ESP8266 -\> Blink
  - Now you can simply upload\!
  - The sketch will start immediately - you'll see the LED blinking.
