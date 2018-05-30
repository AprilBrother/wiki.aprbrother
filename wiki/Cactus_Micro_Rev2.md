

## Description

Cactus Micro is our integrated developement board, we have mixed Arduino
with WIFI into a single board. It is targeted for makers to develop low
power Internet-Of-Things (IoT) projects quickly and easily.

The micro-controller unit (MCU) is Atmel ATmega32U4 and the WIFI chip is
ESP8266.

The revision 2 keep the same size with rev1. But use hardware serial
port Serial1 as default option. It also added some jumpers for connect
esp8266 GPIO. For some case such as
I2C.

<img src="https://d3s5r33r268y59.cloudfront.net/43582/products/thumbs/2015-07-03T08:03:38.429Z-cactusN1-.jpg.855x570_q85_pad_rcrop.jpg">

## Features

  - Built-in ESP8266 WIFI module
  - ATmega32U4 running at 3.3V/8MHz
  - Supported under Arduino IDE v1.0.6
  - On-Board micro-USB connector for programming
  - 4 x 10-bit ADC pins
  - 12 x Digital I/Os (5 are PWM capable)
  - Rx and Tx Hardware Serial Connections

## Specification

<table>
<tbody>
<tr class="odd">
<td><p>Microcontroller</p></td>
<td><p><a href="http://www.atmel.com/devices/atmega32u4.aspx">Atmel ATmega32U4</a></p></td>
</tr>
<tr class="even">
<td><p>Wireless Chip</p></td>
<td><p>ESP8266 (ESP-03)</p></td>
</tr>
<tr class="odd">
<td><p>Operating Voltage</p></td>
<td><p>3.3V</p></td>
</tr>
<tr class="even">
<td><p>Input Voltage</p></td>
<td><p>5V (USB)<br />
4.3-6V (RAW)<br />
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

## Documents

  - [Starter
    Guide](/Cactus_Micro_Starter_Guide "wikilink")
  - [Schematic](https://github.com/AprilBrother/cactus-micro-r2/raw/master/schematic/cactus-micro-rev2.pdf)
  - [Hookup Guide](/Cactus_Micro_Rev2_Hookup_Guide "wikilink")
  - [About ESP8266 chip](https://nurdspace.nl/ESP8266)
  - [AT Command
    Instruction](https://github.com/AprilBrother/cactus-micro/raw/b474a5558d06c6a52969db79bd7a47958c64111b/docs/at-espressif-instruction-set-v0.21.pdf)
  - [Datasheet](https://github.com/AprilBrother/cactus-micro-r2/raw/master/datasheet/ATMega32U4.pdf)
    (ATmega32U4)
  - [GitHub](https://github.com/AprilBrother/cactus-micro-r2)
  - [Tutorials And Examples](/Cactus_Micro_R2_Tutorial "wikilink")
  - [Firmware For ESP8266](/Firmware_For_ESP8266 "wikilink")

