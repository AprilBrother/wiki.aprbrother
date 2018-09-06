[← ESPea Main Page](ESPea_And_Shields.md)

## Description

ESPea is a new Wi-Fi development board from AprilBrother technologies.
It uses the ESP8266EX chipset as the main micro-controller and supports
the Arduino environment.

At the ESPea's heart is an ESP8266 WiFi microcontroller clocked at 80
MHz and at 3.3V logic. This microcontroller contains a Tensilica chip
core as well as a full WiFi stack. You can program the microcontroller
using the Arduino IDE for an easy-to-run Internet of Things core. We
wired up a high-quality SiLabs CP2104 USB-Serial chip that an upload
code at a blistering 921600 baud for fast development time. It also has
auto-reset so no noodling with pins and reset button pressings. The
CP2104 has better driver support than the CH340 and can do very high
speeds without stability issues.

<img src="http://i1.aprbrother.com/2.jpg-640.jpg">

## Features

  - Measures 25.6mm x 34mm without headers soldered in
  - 4MB of FLASH (32 MBit)
  - ESP8266 @ 80MHz with 3.3V logic/power
  - Built in WiFi 802.11 b/g/n
  - 3.3V regulator with 500mA peak current output
  - CP2104 USB-Serial converter onboard with 921600 max baudrate for
    speedy uploading
  - Auto-reset support for getting into bootload mode before firmware
    upload
  - 9 x GPIO pins - can also be used as I2C and SPI
  - 1 x analog inputs 1.0V max
  - 2 mounting holes
  - Reset button

Comes fully assembled and tested, with a USB interface that lets you
quickly use it with the Arduino IDE or NodeMCU
Lua.

## Pinouts

<img src="http://i1.aprbrother.com/espea-pinouts.png-640.jpg">

## Getting Started

  - [Getting Started in
    Arduino](ESPea_Getting_Started_in_Arduino.md)
  - [Getting Started in
    NodeMCU](ESPea_Getting_Started_in_NodeMCU.md)
  - [Getting Started in
    MicroPython](ESPea_Getting_Started_in_MicroPython.md)

## Tech Documents And Driver

  - [ESPea files for hardware](https://github.com/AprilBrother/ESPea)
  - [Fritzing part
    file](https://github.com/AprilBrother/fritzing-parts/tree/master/products)
  - [Driver for
    CP2104](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)
  - [Support Forum](http://bbs.aprbrother.com/c/wifi)