[← ESPea Main Page](ESPea_And_Shields.md)

## Description

The ESPea32 is a comprehensive development platform for Espressif’s
ESP32. The ESP32 is a WiFi-compatible microcontroller, but to that it
adds support for Bluetooth low-energy, and more I/O pins.

What's difference ESPea32 with other ESP32 development board? It can be
cut down to smaller size if you need a smaller board. The board is also
part compatible with our [ESPea](ESPea.md) development board.

<img src="https://i1.aprbrother.com/esp32-2.jpg-640.jpg">

In addition to the WiFi/BLE SoC, the ESPea32 includes an CP2104, which
converts USB to serial, and allows your computer to program and
communicate with the microcontroller.

<img src="https://i1.aprbrother.com/espea32-a.jpg-640.jpg">

## Features

  - ESP32 Dual-core Tensilica LX6 microprocessor
  - Up to 240MHz clock frequency
  - 520kB internal SRAM
  - Integrated 802.11 BGN WiFi transceiver
  - Integrated dual-mode Bluetooth (classic and BLE)
  - 2.5 µA deep sleep current
  - 28 GPIO
  - 10-electrode capacitive touch support
  - Hardware accelerated encryption (AES, SHA2, ECC, RSA-4096)
  - 4MB of FLASH memory (32 MBit)

Additional features for ESPea32

  - CP2104 USB-Serial converter onboard with 921600 max baudrate for
    speedy uploading
  - Auto-reset support for getting into bootload mode before firmware
    upload
  - 2 mounting holes
  - Reset button & flash button
  - Breadboard friendly
  - Two optional sizes
      - whole size - 25.8mm \* 51.28mm
      - cut off size - 25.8mm \* 33.56mm

A USB interface that lets you quickly use it with the Arduino IDE

## Pinouts

<img src="https://i1.aprbrother.com/espea32-pinouts.png">

Both I2C interfaces are supported by the Wire library. The SDA and SCL
pins are assigned, by default, to pins 21 and 22.

|     |       |
| --- | ----- |
| I2C | ESP32 |
| SDA | 21    |
| SCL | 22    |
|  |

And the SPI library should support all three possible SPI interfaces. By
default, here are the pin mappings for those interfaces:

|      |       |
| ---- | ----- |
| SPI  | ESP32 |
| MOSI | 23    |
| MISO | 19    |
| SCLK | 18    |
| SS   | 5     |
|  |

## Tech Documents And Driver

  - [Shields for
    ESPea32](https://blog.aprbrother.com/product-tag/espea32)
  - [ESPea32 Quick
    Start](ESPea32_Quick_Start.md)
  - [Schematic](https://github.com/AprilBrother/ESPea32/blob/master/hardware/ESPea32-schematic.pdf)
  - [Driver for
    CP2104](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)
  - [Support Forum](http://bbs.aprbrother.com/c/wifi)
