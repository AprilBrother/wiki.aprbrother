# BLE USB Dongle

## April USB Dongle 52833

A small and low-cost nRF52833 USB Dongle Form Factor with external antenna

![USB Dongle nRF52833](https://i1.aprbrother.com/usb-nrf52.jpg-320.jpg)

### Key Features For Dongle 52833

* 64 MHz Arm Cortex-M4 32-bit processor with FPU
* 512 KB Flash + 128 KB RAM
* Button and LEDs for user interaction
* Super Small Form Factor
* Onboard external antenna
* USB 2.0 support

### Hardware Description For Dongle 52833

The nRF52833 Dongle can be used as a development platform for the nRF52833 SoC. It features user
configurable LEDs and a button. In addition to radio communication, the nRF52833 SoC can communicate with a computer through USB.

#### Buttons And LEDs For Dongle 52833 

The nRF528533 Dongle is equipped with two LEDs, two buttons (SW1 and SW2)

The LEDs and button are connected to dedicated I/Os on the nRF52833 SoC.

* SW1 - Reset
* SW2 - P0.31
* LED1 - P0.12
* LED2 - P1.09

#### SWD Interface For Dongle 52833

On the front side of the nRF52833 Dongle, there are connection hole for the SWD interface.

Pinouts P1 (from square soldering hole)

* GND
* VCC
* SWDIO
* SWDCLK 

### Firmware For Dongle 52833

The USB dongle nRF52833 is flashed with firmware [nRF Sniffer for BLE](https://www.nordicsemi.com/Products/Development-tools/nrf-sniffer-for-bluetooth-le) from NORDIC.

### Downloads for Dongle 52833

* [Hardware Files](https://github.com/AprilBrother/ab-hardware/tree/master/april-usb-dongle-52833)

## April USB Dongle 52820

A small and low-cost nRF52820 USB Dongle Form Factor with external antenna

![USB Dongle nRF52820](https://i1.aprbrother.com/usb-nrf52.jpg-320.jpg)

### Key Features For Dongle 52820

* 64 MHz Arm Cortex-M4
* 256KB Flash + 32KB RAM
* Button and LEDs for user interaction
* Super Small Form Factor
* Onboard external antenna
* USB support

### Hardware Description For Dongle 52820

The nRF52820 Dongle can be used as a development platform for the nRF52820 SoC. It features user
configurable LEDs and a button. In addition to radio communication, the nRF52820 SoC can communicate with a computer through USB.

#### Buttons And LEDs For Dongle 52820 

The nRF528520 Dongle is equipped with two LEDs, two buttons (SW1 and SW2)

The LEDs and button are connected to dedicated I/Os on the nRF52820 SoC.

* SW1 - Reset
* SW2 - P0.28
* LED1 - P0.07
* LED2 - P0.06

#### SWD Interface For Dongle 52820

On the front side of the nRF52820 Dongle, there are connection hole for the SWD interface.

Pinouts P1 (from square soldering hole)

* GND
* VCC
* SWDIO
* SWDCLK 

### Firmware For Dongle 52820

The USB dongle nRF52820 is flashed with [AB Sniffer firmware](AT_Commands_For_ABSniffer_528.md).

### Downloads for Dongle 52820

* [Hardware Files](https://github.com/AprilBrother/ab-hardware/tree/master/april-usb-dongle-52820)

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

The USB dongle nRF52840 is flashed with firmware [nRF Sniffer for BLE](https://www.nordicsemi.com/Products/Development-tools/nrf-sniffer-for-bluetooth-le) from NORDIC.

### Downloadable Content For Dongle 52840

* [Hardware Files](https://github.com/AprilBrother/ab-hardware/tree/master/april-usb-dongle-52840)
* [Bootloader](https://github.com/adafruit/Adafruit_nRF52_Bootloader/releases) - search bootloader for pca10059

## April USB Dongle 52832

A small and low-cost nRF52832 USB Dongle Form Factor with external antenna

![USB Dongle nRF52832](https://i1.aprbrother.com/usb-nrf52.jpg-320.jpg)

### Key Features

* nRF52832 flash-based BLE SoC solution
* Button and LED for user interaction
* Super Small Form Factor
* Onboard external antenna
* USB support with chip CP2104

### Hardware Description

[PCB diagram](https://i1.aprbrother.com/dongle-52832-diagram.png)

### Downloadable Content

* [Hardware Files](https://github.com/AprilBrother/ab-hardware/tree/master/april-usb-dongle-52832)

#### SWD Interface

## [ABSniffer series](ABSniffer.md)

ABSniffer USB Dongle works as BLE central role. It searches for all iBeacons or BLE advertising data nearby.
