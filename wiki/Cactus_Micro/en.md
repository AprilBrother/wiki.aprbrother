<languages/>

## Features

  - Built-in ESP8266 WIFI module (Optional)
  - ATmega32U4 running at 3.3V/8MHz
  - Supported under Arduino IDE v1.0.6
  - On-Board micro-USB connector for programming
  - 4 x 10-bit ADC pins
  - 12 x Digital I/Os (5 are PWM capable)
  - Rx and Tx Hardware Serial Connections

## Getting Started

Open Arduino IDE and choose board "LilyPad USB" to start playing with
your Cactus Micro in just a few easy steps.

## Description

Cactus Micro is our integrated developement board, we have mixed Arduino
with WIFI into a single board. It is targeted for makers to develop low
power Internet-Of-Things (IoT) projects quickly and easily.

The micro-controller unit (MCU) is Atmel ATmega32U4 and the WIFI chip is
ESP8266.

## How It Works

  - The ESP8266 chip communicates with Atmega32U4 through the
    SoftwareSerial or Serial (hardware serial port). It can be switched
    by a jumper. The default port for communicattion is SoftwareSerial
    port (RX: 11, TX: 12)
  - The pin 13 is connected to pin CH_PD of ESP8266. Put the pin 13
    high to enable ESP8266 chip.

## Support

All other questions regarding Cactus Micro, please visit [our
Forum](http://bbs.aprbrother.com/conversations/arduino)

## Technical Details

  - About ESP8266 chip
  - Serial communication

### Cactus Micro Pinout

<img src="http://abcdn1.qiniudn.com/cactus_pinout.jpg">

## Specification

<table>
<tbody>
<tr class="odd">
<td><p>Microcontroller</p></td>
<td><p><a href="http://www.atmel.com/devices/atmega32u4.aspx">Atmel ATmega32U4</a></p></td>
</tr>
<tr class="even">
<td><p>Wireless Chip</p></td>
<td><p>ESP8266</p></td>
</tr>
<tr class="odd">
<td><p>Operating Voltage</p></td>
<td><p>3.3V</p></td>
</tr>
<tr class="even">
<td><p>Input Voltage</p></td>
<td><p>5V (USB)<br />
4.3-12V (RAW)<br />
Note: Use either one power source at a time, otherwise you will damage the board.</p></td>
</tr>
<tr class="odd">
<td><p>Clock Speed</p></td>
<td><p>8MHz</p></td>
</tr>
<tr class="even">
<td><p>Connectivity</p></td>
<td><p>WIFI<br />
micro-USB<br />
Serial<br />
I2C<br />
SPI</p></td>
</tr>
<tr class="odd">
<td><p>Flash Memory</p></td>
<td><p>32KB (of which 4 KB used by bootloader)</p></td>
</tr>
<tr class="even">
<td><p>SRAM</p></td>
<td><p>2.5k</p></td>
</tr>
<tr class="odd">
<td><p>EEPROM</p></td>
<td><p>1k</p></td>
</tr>
<tr class="even">
<td><p>Dimensions</p></td>
<td><p>1.3 x 0.7&quot;</p></td>
</tr>
<tr class="odd">
<td><p>I/O Pins</p></td>
<td><p>18</p></td>
</tr>
<tr class="even">
</tr>
</tbody>
</table>