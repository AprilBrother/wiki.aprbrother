## WUD ##

### Introduction ###

The device has an ESP32-S2 module that allows it to be identified as a keyboard + USB disk. It also a microSD slot that can be identified as MSC SD Card.

The new ESP32-S2 module from Espressif addresses the security flaws in the original ESP32. While the ESP32-S2 does include improved security features, it lacks the Bluetooth capabilities of the original ESP32 module. But it supports has native USB.

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
* USB-A Connector
* Micro SD slot
* ESP32-S2 Module
* Buttons
  * Reset button
  * Hall sensor for control `GPIO 0` of ESP32
* Status LED - This indicator is connected to `GPIO 21`

### Software overview ###

The pre-flashed firmware is "[wireless USB disk](https://github.com/volca/wireless_usb_disk)". It use ESP32-S2 as an USB Disk with Wireless accessibility. HTTP file server be used with both upload and download capability.

Note: It's a demo code. Don't use it in serious application.

### Resources ###

* [Schematic](https://github.com/AprilBrother/ab-hardware/blob/master/wud/wud.pdf)
* [Datasheet for ESP32 S2 module](https://www.espressif.com/sites/default/files/documentation/esp32-s2-mini-1_esp32-s2-mini-1u_datasheet_en.pdf)
* [Source code](https://github.com/volca/wireless_usb_disk)
