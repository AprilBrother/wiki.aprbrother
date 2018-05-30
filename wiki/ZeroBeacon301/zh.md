

## Introduction

**Notes: Original name: Zero Beacon**

April Beacon
301是一个具有iBeacon基站功能的USB串口适配器。可方便部署在具有USB接口的场景，为商家提供距离感应营销功能。

AprilBeacon 301 USB串口适配器在windows下可通过USB虚拟的串口，输入AT指令来配置参数。

<http://aprbrother.qiniudn.com/usb-beacon.jpg/480.jpg>

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
  - Default measured power: -59
  - Default advertising interval: 100ms
  - Default param for TTL: 9600, N, 8, 1

## Usage

  - 如需修改参数，请先安装USB适配器的\[//aprbrother.qiniudn.com/ab-cdc.zip?download
    驱动\].
  - Enjoy it.

## Related Links

  - [The AT commands and configuration](Firmware/ZeroBeacon.md)

## FAQ

  - How to upgrade the firmware?