## WUD ##

### Introduction ###

The device has an ESP32-S2 module that allows it to be identified as a keyboard + USB disk. It also a microSD slot that can be identified as MSC SD Card.

The new ESP32-S2 module from Espressif addresses the security flaws in the original ESP32. While the ESP32-S2 does include improved security features, it lacks the Bluetooth capabilities of the original ESP32 module. But it supports native USB.

[![WUD](https://i1.aprbrother.com/wud-1.jpg-640.jpg)](https://i1.aprbrother.com/wud-1.jpg)

### Features ### 

* ESP32-S2 Module
  * Xtensa® Single-Core 32-bit LX7 Microprocessor (up to 240MHz)
    * RISC-V ULP Coprocessor
    * 128KB ROM and 320KB SRAM
    * 4MB of Embedded SPI Flash Storage
  * Cryptographic Hardware Accelerators
    * AES, ECB/CBC/OFB/CFB/CTR, GCM, SHA, RSA, and ECC (Digital Signature)
  * Physical Security Features
    * Transparent external flash and RAM encryption (AES-XTS)
    * Secure Boot feature ensures only signed firmware (with RSA-PSS signature) is booted
    * HMAC and Digital Signature modules use software inaccessible keys to generate SHA-MAC and MAC signatures
  * Integrated 802.11 b/g/n WiFi 2.4GHz Transceiver (up to 150Mbps)
  * Integrated Temperature Sensor (-20°C to 110°C)
  * Operating Voltage: 3.0 to 3.6V
    * WiFi: 310mA (peak)
    * Light-Sleep: 550µA
    * Deep-Sleep: 20-235µA
* USB-A Connector
* Micro SD slot
* Hall sensor for control `GPIO 0` of ESP32

### Hardware overview ### 

* Board Dimensions 
  * `17mm` x `50mm` (Without USB case)
  * `19mm` x `62mm` (With USB case)
* USB-A Connector
* Micro SD slot
* ESP32-S2 mini Module
* Buttons
  * Reset button
  * Hall sensor for control `GPIO 0` of ESP32
* Status LED - This indicator is connected to `GPIO 21`

### Device Firmware Upgrade through USB

The ESP32-S2 chip needs to be in bootloader mode for the detection as a DFU device and flashing. This can be achieved by pulling GPIO0 down, pulsing RESET down for a moment and releasing GPIO0.

How to make the ESP32-S2 go to bootloader mode

1. Plug the WUD to laptop
1. Make a magnet close to the hall sensor (`GPIO 0`)
1. Press the reset button, WUD will go to bootloader mode now

### Software overview ###

The pre-flashed firmware is "[wireless USB disk](https://github.com/volca/wireless_usb_disk)". It use ESP32-S2 as an USB Disk with Wireless accessibility. HTTP file server be used with both upload and download capability.

Note: It's a demo code. Don't use it in serious application.

### Resources ###

* [Schematic](https://github.com/AprilBrother/ab-hardware/blob/master/wud/wud.pdf)
* [Datasheet for ESP32 S2 module](https://www.espressif.com/sites/default/files/documentation/esp32-s2-mini-1_esp32-s2-mini-1u_datasheet_en.pdf)

### Firmware ###

* [Source code of wireless usb disk](https://github.com/volca/wireless_usb_disk) - written in Arduino 
* [usb_msc_wireless_disk from espressif](https://github.com/espressif/esp-iot-solution/tree/usb/add_usb_solutions/examples/usb/device/usb_msc_wireless_disk)
* [WUD-Ducky](https://github.com/tobozo/WUD-Ducky) Thanks tobozo for his great projects
