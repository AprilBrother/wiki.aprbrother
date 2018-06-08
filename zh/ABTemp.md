## 说明

ABTemp是一个支持BLE协议 (Bluetooth LE)的Beacon, 自带温度传感器. 它基于[EEK (Energy Efficient King)
beacon](https://blog.aprbrother.com/product/aprilbeacon-eek)开发. ABTemp会以iBeacon协议持续广播温度数据

## 特性

  - ARM Cortex -M0 32-bit processor
  - Dialog solution, 长电池寿命
  - 支持蓝牙4.0
  - Builtin 1 x CR2450 battery holder (battery not included)
  - Temperature sensor for environment monitoring
  - Configurable by App
    [AprilBeacon](https://itunes.apple.com/app/aprilbeacon/id847517010?mt=8)

## Technology Specification

| Name                                             | Parameters                                       |
| ------------------------------------------------ | ------------------------------------------------ |
| Chip                                             | Dialog DA14580                                   |
| Dimensions                                       | Diameter 31mm, Thickness 9mm                     |
| Protocol standard                                | Bluetooth® 4.0 Through the iBeacon certification |
| System Requirements                              | iOS7.0 or above/ Android 4.3 or above            |
| Security                                         | Suport password for configure parameters         |
| TX Power                                         | 0dBm                                             |
| Transmission Range                               | Up to 35m                                        |
| Broadcast Frequency (Broadcasting time interval) | Adjustable (100~1285ms)                          |
| Supply Voltage                                   | 3.0V                                             |
| Battery                                          | CR2450 Battery                                   |

## Default Settings

  - Name of device: abtemp_xxxx (last 2 bytes of mac address)
  - ProximityUUID: B5B182C7-EAB1-4988-AA99-B5C1517008D9
  - Major: configurable, default last 2 bytes of mac address
  - Minor: the temperature data and battery level
  - Measured power: -59 (Numeric only)

## Documents And Links

  - [Firmware For ABTemp](Firmware_For_ABTemp.md)
  - [ABTemp Payload Format](ABTemp_Payload_Format.md)
