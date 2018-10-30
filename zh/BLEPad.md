## Description

The BLEPad is an Arduino compatible microcontroller development board
based on the ATmega32U4 IC with Bluetooth 4.0. a.k.a. Bluetooth Low
Energy (BLE), built in. You can choose board type LilyPad Arduino USB
from Arduino IDE to start programming. It's the easiest way to get
Bluetooth 4.0 in your project\!

The BLEPad differs from previous LilyPad boards in that the ATmega32u4
has built-in USB communication, eliminating the need for a separate
USB-to-serial adapter. This allows the BLEPad to appear to a connected
computer as a mouse and keyboard, in addition to a virtual (CDC) serial
/ COM port. It also has other implications for the behavior of the
board;

<img src="//i1.aprbrother.com/blepad_2.jpg-640.jpg">

## Getting Started

In the [Getting Started](BLEPad_Getting_Started.md) section,
you can find all the information you need to configure your board, use
the Arduino Software (IDE), and start to tinker with coding and
electronics.

## Features

  - Built-in ultra mini size DA14580 BLE module
  - ATmega32U4 running at 3.3V/8MHz
  - Supported Arduino IDE 1.6.x
  - On-Board micro-USB connector for programming
  - 4 x 10-bit ADC pins
  - 9 x Digital I/Os (4 are PWM capable)
  - Rx and Tx Hardware Serial Connections
  - A JST connector for a 3.7V LiPo battery
  - A reset button
  - An external antenna pin for BLE module
  - Application BLE sensor/iBeacon simulation

## Specification

<table>
<tbody>
<tr class="odd">
<td><p>Microcontroller</p></td>
<td><p><a href="http://www.atmel.com/devices/atmega32u4.aspx">Atmel ATmega32U4</a></p></td>
</tr>
<tr class="even">
<td><p>Operating Voltage</p></td>
<td><p>3.3V</p></td>
</tr>
<tr class="odd">
<td><p>Input Voltage</p></td>
<td><p>5V (USB)<br />
3.8-6V (VBUS)<br />
Note: Use either one power source at a time, otherwise you will damage the board.</p></td>
</tr>
<tr class="even">
<td><p>Clock Speed</p></td>
<td><p>8MHz</p></td>
</tr>
<tr class="odd">
<td><p>Connectivity</p></td>
<td><p>WIFI<br />
micro-USB<br />
Serial<br />
I2C<br />
SPI</p></td>
</tr>
<tr class="even">
<td><p>Flash Memory</p></td>
<td><p>32KB (of which 4 KB used by bootloader)</p></td>
</tr>
<tr class="odd">
<td><p>SRAM</p></td>
<td><p>2.5k</p></td>
</tr>
<tr class="even">
<td><p>EEPROM</p></td>
<td><p>1k</p></td>
</tr>
<tr class="odd">
<td><p>Dimensions</p></td>
<td><p>31mm x 31mm</p></td>
</tr>
<tr class="even">
<td><p>I/O Pins</p></td>
<td><p>18</p></td>
</tr>
<tr class="odd">
</tr>
</tbody>
</table>

## Communication

The BLEPad has a number of facilities for communicating with a computer,
another Arduino, or other microcontrollers. The 32U4 also allows for
serial (CDC) communication over USB and appears as a virtual com port to
software on the computer. The chip also acts as a full speed USB 2.0
device, using standard USB COM drivers. On Windows, a .inf file is
required\>. The Arduino software includes a serial monitor which allows
simple textual data to be sent to and from the Arduino board. The RX and
TX LEDs on the board will flash when data is being transmitted via the
USB connection to the computer.

A [SoftwareSerial
library](https://www.arduino.cc/en/Reference/SoftwareSerial) allows
serial communication on any of the BLEPad's digital pins. The BLEPad
also supports I2C (TWI). The Arduino software includes a Wire Library to
simplify use of the I2C bus. The BLEPad appears as a generic keyboard
and mouse, and can be programmed to control these input devices using
the [Keyboard and
Mouse](https://www.arduino.cc/en/Reference/MouseKeyboard) classes.

## Tech Documents

  - [BLEPad Tutorial And
    Examples](https://github.com/AprilBrother/BLEPad_UART/tree/master/examples)
  - [Hookup Guide](BLEPad_Hookup_Guide.md)
  - [BLEPad
    Schematic](https://github.com/AprilBrother/BLEPad/raw/master/hardware/blepad.pdf)
  - [AT commands for BLE module (written in Chinese, support peripheral
    and central
    role)](https://github.com/AprilBrother/BLEPad/raw/master/hardware/hj580-combo.pdf)
    - For the BLEPads shipped after 2017.11
  - [AT commands for BLE module (written in
    Chinese)](https://github.com/AprilBrother/BLEPad/raw/master/hardware/hj580-peripheral.pdf)
  - [Datasheet
    (ATmega32U4)](http://dlnmh9ip6v2uc.cloudfront.net/datasheets/Dev/Arduino/Boards/ATMega32U4.pdf)
  - [Support Forum](http://bbs.aprbrother.com/c/arduino)
