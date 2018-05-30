[← BlueDuino Rev2 Main Page](BlueDuino_rev2.md)

## Description

The BlueDuino R2 wires CC2540 UART port to Serial1 directly. So we can
upgrade the firmware easily.

|        |                |
| ------ | -------------- |
| CC2540 | BlueDuino Rev2 |
| RX     | TXO (Serial1)  |
| TX     | RXI (Serial1)  |
| GND    | GND            |
|  |

## Hardware requirements

  - A USB to UART converter such as FTDI usb module. Our [CP2102 USB to
    UART
    converter](https://www.tindie.com/products/AprilBrother/usb-to-uart-converter-that-support-esp8266/)
    is good and cheaper option.
  - Some female to female dupont jumper lines

## Software requirements

  - [SerialBootTool from
    TI](http://processors.wiki.ti.com/images/6/64/SerialBootTool_1_3_2.zip)
  - [Termite － A free serial terminal
    software](http://www.compuphase.com/software_termite.htm)

## Getting Start

**NOTE:** You must upload new firmware to the module if it goes to
upgrade mode. Otherwise the module will stay at upgrade mode and was
bricked.

  - Wire the USB to UART converter and BlueDuino

|                       |                |
| --------------------- | -------------- |
| USB to UART converter | BlueDuino Rev2 |
| RX                    | RXI (Serial1)  |
| TX                    | TXO (Serial1)  |
| GND                   | GND            |
|  |

  - Plug the BlueDuino to PC
  - Wire USB to UART converter to PC
  - Open telnet terminal, you will get "OK" when you type "AT". So type
    "AT+SBLUP", you will get "OK+SBLUP". It's mean the cc254x module is
    ready for upgrade. It can't accept any other AT command now.
  - Upload an empty sketch to BlueDuino. `void setup(){} void loop() {}`
  - Open the SerialBootTool, Choose the serial port and baud rate
    115200, then choose the firmware
  - Click "Load Image"

Wait a while. You will see the words "Download completed successfully"

You've done\!

## Firmware

  - [Firmwares For
    BlueDuino](http://wiki.aprbrother.com/wiki/BlueDuino#Firmware)

## Troubleshooting

  - Please retry some times if you upgrade fails
  - Please disconnect the uart connection when it upgrading