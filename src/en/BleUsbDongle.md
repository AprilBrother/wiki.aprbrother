# BLE USB Dongle

## April USB Dongle 52840

A small and low-cost nRF52840 USB Dongle Form Factor with external antenna

![USB Dongle nRF52840](https://i1.aprbrother.com/usb-nrf52.jpg-320.jpg)

### Key Features For Dongle 52840

* nRF52840 flash-based ANT/ANT+™, BLE SoC solution
* Button and LEDs for user interaction
* Super Small Form Factor
* Onboard USB bootloader with buttonless support (Adafruit nRF52 Bootloader)
* Onboard external antenna
* USB support

### Hardware Description For Dongle 52840

The nRF52840 Dongle can be used as a development platform for the nRF52840 SoC. It features user
configurable LEDs and a button. In addition to
radio communication, the nRF52840 SoC can communicate with a computer through USB.

The USB dongle is very similar with Nordic's USB dongle PCA10059. But it has less pinouts and button.

#### Buttons And LEDs For Dongle 52840 

The nRF528540 Dongle is equipped with a LED (LED1), a multicolor RGB LED (LED2), a user configurable button (SW1)

The LEDs and button are connected to dedicated I/Os on the nRF52840 SoC.

* SW1 - P1.06
* LED1 - P0.06
* LED2
 * Red - P0.08
 * Green - P1.09
 * Blue - P0.12

#### SWD Interface For Dongle 52840

On the front side of the nRF52840 Dongle, there are connection hole for the SWD interface.

Pinouts P1 (from square soldering hole)

* GND
* VCC
* SWDIO
* SWDCLK 

### Firmware For Dongle 52840

The USB dongle nRF52840 is flashed with firmware [nRF Sniffer for BLE](https://www.nordicsemi.com/Products/Development-tools/nrf-sniffer-for-bluetooth-le) from Nordic.

**Note: The April USB dongle 52840 is shipped with the Adafruit nRF52 Bootloader after Jan 17 2025. The bootloader is a CDC/DFU/UF2 bootloader.**

### Links For Dongle 52840 ###

* [Quick Start](dongle_52840/quick_start.md)
* [Hardware Files](https://github.com/AprilBrother/ab-hardware/tree/master/april-usb-dongle-52840)
* [Bootloader](https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases) - search bootloader for pca10059

