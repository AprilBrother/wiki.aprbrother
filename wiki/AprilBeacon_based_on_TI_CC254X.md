



## Introdution

[AprilBeacon based on TI
CC254X](/AprilBeacon_based_on_TI_CC254X "wikilink")

The AprilBeacon is developed and produced including hardware and
firmware all provide by AprilBrother LLC. It can work as a standalone
system. The AprilBeacon previous version is based on TI CC254X BLE 4.0
module.

## Models

### Available

|                |                                         |                                                      |                                                      |                                                             |                                             |                                                             |
| -------------- | --------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------- |
| Model          | 101                                     | 202                                                  | 241                                                  | 242                                                         | 227A                                        | [302](/AprilBeacon_302 "wikilink")                          |
| Image          | <http://abcdn1.qiniudn.com/101xiao.jpg> | <http://abcdn1.qiniudn.com/202.jpg>                  | <http://abcdn1.qiniudn.com/241qrxiao1.jpg>           | <http://abcdn1.qiniudn.com/241qrxiao1.jpg>                  | <http://abcdn1.qiniudn.com/227Axiao.jpg>    | <http://abcdn1.qiniudn.com/302.jpg>                         |
| Core Chip      | CC2541                                  | CC2540                                               | CC2541                                               | CC2541                                                      | CC2540                                      | CC2540                                                      |
| Battery        | CR2032                                  | CR2450                                               | CR2450                                               | CR2477                                                      | AAA Battery x 2                             | USB                                                         |
| Range Effected | 10m                                     | 30m                                                  | 25m                                                  | 25m                                                         | 30m                                         | 15m                                                         |
| Antenna        | PCB                                     | PCB                                                  | PCB                                                  | PCB                                                         | External                                    | PCB                                                         |
| Size (mm)      | 24.8 \* 24.8 \* 7.5                     | 31 \* 31 \* 9                                        | 31 \* 31 \* 9                                        | 31 \* 31 \*11.7                                             | 66 \* 36 \* 22                              | 21.6 \* 14.3 \* 5.4                                         |
| Firmware       | BlueBeacon                              | [AprilBeacon](/Firmware/AprilBeacon "wikilink")      | AprilBeacon                                          | AprilBeacon                                                 | AprilBeacon                                 | [ZeroBeacon](/Firmware/ZeroBeacon "wikilink")               |
| Advantages     | Small size and easy to deploy           | With certification, stable signal, with reset button | 20% power saving, With barcode, good for deployment. | 2 times the power of a CR2450 battery, longer battery life. | Longer battery life saving maintenance cost | Mini usb interface, small size, AprilBeacon name changeable |
|  |

### Canceled

|                |                                                 |                                         |                                          |
| -------------- | ----------------------------------------------- | --------------------------------------- | ---------------------------------------- |
| Model          | 201                                             | 227                                     | 301                                      |
| Image          | <http://abcdn1.qiniudn.com/201xiao.jpg>         | <http://abcdn1.qiniudn.com/227xiao.jpg> | <http://abcdn1.qiniudn.com/301-xiao.jpg> |
| Core Chip      | CC2540                                          | CC2540                                  | CC2540                                   |
| Battery        | CR2450                                          | AAA Battery x 2                         | USB                                      |
| Range Effected | 30m                                             | 30m                                     | 30m                                      |
| Antenna        | PCB                                             | External                                | PCB                                      |
| Size (mm)      | 26 \* 34.82 \* 9                                | 56 \* 30.5 \* 20                        | 57.6 \* 18.9 \* 7.6                      |
| Firmware       | [AprilBeacon](/Firmware/AprilBeacon "wikilink") | AprilBeacon                             | ZeroBeacon                               |
|  |

## Specifications

  - Built‐in firmware for iBeacon
  - Bluetooth Low Energy technology compatible
  - Excellent link budget (up to 97dB)
  - Suitable for long distance applications
  - Accurate digital RSSI
  - High performance and low power 8051 core MCU
  - AES security coprocessor

## iBeacon Descriptions

  - Application for advertisement and location
  - Built‐in pairing password to prevent others to modify the settings
  - Support customize your own iBeacon configuration including UUID etc.
  - Tx Power configurable
  - Advertising frequecy configurable
  - Support upgrade firmware through OAD (air upgrade)
  - Built‐in JTAG port for customized other application firmware as a
    standalone system

## Default Settings

  - Name of iBeacon: AprilBeacon
  - ProximityUUID: `E2C56DB5-DFFB-48D2-B060-D0F5A71096E0`
  - Major and Minor: 0, 0 (Only allowed numeric)
  - Measured power: -59 (Numeric
only)

## Electronic Parameters

|                        |                |                                                |
| ---------------------- | -------------- | ---------------------------------------------- |
| Item                   | Value          | Remarks                                        |
| Operation Voltage      | 2.0-3.6V       | DC                                             |
| Operation Frequency    | 2400-2483.5MHz | Programmable                                   |
| Frequency Error        | \+/- 20KHz     |                                                |
| Modulation             | GFSK           |                                                |
| Standby current        | 100uA          | Depends on duty cycle / broadcasting frequency |
| Broadcasting Frequency | 900ms or 600ms | Duty cycle                                     |
| Output Power           | 0 dBm          | Default setting, programmable                  |
| Receiving Sensitivity  | \-93dBm        | High gain mode                                 |
| Antenna                | 50ohm          | PCB Antenna / External Antenna                 |
|  |

## Related Link

  - [Upgrade Firmware For
    AprilBeacon](/How_To_Upgrade_Firmware "wikilink")
  - [Support Forum For April
    Beacon](http://bbs.aprbrother.com/conversations/aprilbeacon)
  - [AprilBeacon 302](/AprilBeacon_302 "wikilink")

