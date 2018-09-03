
## Introdution

The AprilBeacon is developed and produced including hardware and
firmware all provide by AprilBrother LLC. It can work as a standalone
system. The AprilBeacon previous version is based on TI CC254X BLE 4.0
module.

## Models

* [USB Beacon 305](AprilBeacon_305.md)

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

- [Support Forum For April Beacon](http://bbs.aprbrother.com/conversations/aprilbeacon)
