

## 特点

  - 可安装ESP8266 WIFI模块
  - ATmega32U4 运行于3.3V/8MHz
  - 支持Arduino IDE v1.0.6
  - 自带micro-USB接口用于编程
  - 4 x 10-bit ADC引脚
  - 12 x Digital I/Os (5个PWM capable)
  - Rx / Tx 硬串口

## 上手指南

打开Arduino开发环境并选择Board为"LilyPad USB"，不要忘记选择对应的串口，简单的几步设置就可以开始开发了.

## 说明

Cactus Micro是我们提供的集成开发板，我们将Arduino和WIFI合并在一块小小的电路板上。用于物联网开发是便捷而又简单的事情。

MCU是Atmel Atmega32u4，WIFI芯片是ESP8266

## 它如何工作的？

  - ESP8266和Atmega32U4通过软串口或硬串口交互。可以通过跳线来选择使用哪种串口。默认的交互串口是软串口 (RX: 11,
    TX: 12)
  - Atmega32u4的Pin 13连接到了ESP8266的CH_PD. 把13脚拉高即可使能ESP8266模块.

## 支持

关于Cactus
Micro的其它问题,请访问[我们的论坛](http://bbs.aprbrother.com/conversations/arduino)

## 技术详�

  - About ESP8266 chip
  - Serial
    communication
  - [原理图](https://github.com/AprilBrother/cactus-micro/blob/master/schematic/CactusMicro.pdf?raw=true)

### Cactus Micro 引脚

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