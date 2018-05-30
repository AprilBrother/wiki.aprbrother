<languages/>

## 介绍

AprilBeacon是一款采用美国德州仪器TI CC2541作为核心处理器的高性能、超低功耗（Bluetooth Low
Energy）iBeacon基站模块，可广泛用于室内定位，范围检测等场景。ApirlBeacon整合了一个CR2450电池座，可以独立运行，基于蓝牙4.0低功耗技术实现，更省电，具备不用走线，方便部署的特点。

## Specifications

  - 已烧录[AprilBeacon固件](/Firmware/AprilBeacon "wikilink")，按照苹果的技术规范文档实现
  - 内置CR2450纽扣电池座
  - 兼容蓝牙4.0低功耗BLE
  - 准确的数字RSSI信号
  - 高性能低功耗的8051核心MCU
  - 内置AES加密处理器

## iBeacon详�

  - 适用于近场定位，室内定位
  - 自带配对密码，仿制未经授权人员修改配置
  - 支持自定义iBeacon配置例如proximityUUID, major, minor等等
  - 发射功率可配置
  - 广播频率可配置
  - 支持加密的空中升级技术，安全的升级内置固件

‐ 集成了JTAG接口，方便定制你自己的固件

## 缺省设置

  - 模块名称: BlueBeacon或AprilBeacon
  - ProximityUUID: `E2C56DB5-DFFB-48D2-B060-D0F5A71096E0`
  - Major and Minor: 0, 0
  - Measured power: -59 (Numeric only)
  - Pairing passowrd:
AprilBrother

## 电气参数

|                        |                   |                                                |
| ---------------------- | ----------------- | ---------------------------------------------- |
| Item                   | Value             | Remarks                                        |
| Firmware               | AprilBeacon       | Version 2.0.1                                  |
| Battery model          | CR2450            | Coin battery, 3.0Vdc, 1pc                      |
| Operation Voltage      | 2.0-3.6V          | DC                                             |
| Operation Frequency    | 2400-2483.5MHz    | Programmable                                   |
| Frequency Error        | \+/- 20KHz        |                                                |
| Modulation             | Q-QPSK            |                                                |
| Standby current        | 100uA             | Depends on duty cycle / broadcasting frequency |
| Broadcasting Frequency | 900mS             | Duty cycle                                     |
| Output Power           | 0 dBm             | Default setting, programmable                  |
| Receiving Sensitivity  | \-93dBm           | High gain mode                                 |
| Transmission distance  | 25 meters         | BER\<0.1%, Open space                          |
| Antenna                | 50ohm             | On board / PCB Antenna                         |
| Size                   | 31mm x 31mm x 9mm |                                                |

## AprilBeacon 241s

...