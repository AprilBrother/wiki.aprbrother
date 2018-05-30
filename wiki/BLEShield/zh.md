<languages/>

## ABBLEShield

ABBLEShield可让你很方便的在硬件项目中增加BLE功能支持。ABBLEShield只需要串口即可通讯，所以大部分开发板都可以很好的与之配合工作。例如Arduino,
Raspberry Pi, Netduino, BeagleBone等等。ABBLEShield同时也支持iBeacon广播功能。

<http://aprbrother.qiniudn.com/abbleshield1.jpg/480.jpg>

### 特点

  - 接口简单 - 预烧录了固件 [ZeroBeacon](/Firmware/ZeroBeacon "wikilink"),
    可以很容易的与支持串口UART通讯的开发板相连.
  - 超小的体积 - 17mm x 27mm
  - 固件可升级 - 固件可通过串口升级.
  - 支持有趣的iBeacon功能，可通过串口配置iBeacon的参数.

### 硬件概要

  - 板载天线
  - 采用Texas Instruments的CC2540蓝牙芯片
  - 超小体积 -17mm x 27mm
  - 工作电压为 - 3.3V 或 5V

### 使用要求

Android 4.3或以上

Android devices with BLE hardware: Nexus 4, Nexus 7 and Samsung Note 3

iOS 6 or 7

iPhone 5 (all models), iPhone 4S, iPad Air, iPad (3rd gen or later),
iPad mini (all models) and iPod touch (5th gen or later)

### iOS快速上手

  - 连接 ABBLEShield 和 Arduino 开发板的以下引脚
      - VIN \> 5V or 3.3V. 如果是3.3V的Arduino，则输入为3.3V。否则输入电压为5V.
      - GND \> GND
      - TX \> RX for Arduino
      - RX \> TX for Arduino
  - 下载应用
    [LightBlue](https://itunes.apple.com/app/lightblue/id557428110?mt=8)
    来测试BLE