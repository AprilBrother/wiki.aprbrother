 

## Description

**Notes: Original name: Zero Beacon**

An April Beacon 302 is a tiny USB device that runs on Bluetooth 4.0 Low
Energy; It is an iBeacon licensed technology that functions as a
proximity Bluetooth Beacon. With AprilBeacon 302, proximity marketing
has never been easier. By knowing where your customers are you can
instantly deliver to them the most relevant and timely interaction.

The April Beacon 302 also provide USB-UART transparent transfer
function. It can be custom configured using the AT command over the USB
connector interface. The size is 21.6mm x 14.3mm x 5.4mm.

<img src="http://abcdn1.qiniudn.com/302.jpg">

## Specification

|                             |                                   |
| --------------------------- | --------------------------------- |
| Bluetooth                   |                                   |
| Version                     | 4.0 (Bluetooth Low Energy)        |
| Security                    | Secure Simple Pairing and AES-128 |
| BR/EDR connections          | 0                                 |
| Radio                       | Frequency 2.402GHz to 2480GHz     |
| Modulations                 | GFSK                              |
| Transmit Power              | \+0 dBm                           |
| Receiver sensitivity        | \-93 dBm                          |
| Typical line-of-sight range | 10 – 30 meters                    |
| Antenna                     | Integrated PCB                    |
| Hardware                    |                                   |
| Host interfaces             | USB (USB/CDC)                     |
| Communication Protocol      | TTL                               |

## Default Settings

  - iBeacon advertising on
  - Default proximityUUID: `E2C56DB5-DFFB-48D2-B060-D0F5A71096E0`
  - Default major and minor: 0
  - Default measured power: -72
  - Default advertising interval: 100ms
  - Default param for TTL: 9600, N, 8, 1
  - Default role - peripheral

## Service And Characteristic

Service UUID FFF0 -\> Characteristic FFF1

  - Subscribe FFF1 to get RX data.
  - Write to FFF1 to send TX data.

## Usage

  - For change settings, plugin computer and Install the
    \[//aprbrother.qiniudn.com/ab-cdc.zip?download driver\].
  - Enjoy it.

## Downloads

  - [Drivers for
    Win7/WinXP](http://abcdn1.qiniudn.com/ab301.zip?download)

## Technical Documents

  - [How to upgrade the firmware for AprilBeacon
    302](How_to_upgrade_the_firmware_for_AprilBeacon_302.md)
  - [The AT commands and configuration](Firmware/ZeroBeacon.md)

