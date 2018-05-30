<languages/>

## ABBLEShield

You can now incorporate Bluetooth 4.0 Low Energy (BLE) technology easily
in your project with our ABBLEShield. ABBLEShield requires only a serial
port for communication so it supports all major development platforms
that have UART interface including Arduino, Raspberry Pi, Netduino,
BeagleBone etc.

<http://aprbrother.qiniudn.com/abbleshield1.jpg/480.jpg>

### Features

  - Simple interface - with our pre-loaded firmware name
    [ZeroBeacon](Firmware/ZeroBeacon.md), you could easily
    connect to any development board or IC with UART interface.
  - Compact form factor - 17mm x 27mm this is a very popular request
    from makers using smaller Arduino boards like Arduino
    Mini/Micro/Nano/Pro Mini etc.
  - Firmware upgradable - the firmware can upgrade through UART port.
  - Support the amazing iBeacon technology and configure the iBeacon
    with UART port.

### Hardware Overview

  - On-board chip antenna
  - Texas Instruments CC2540 2.4 GHz Bluetooth System-on-Chip (SoC)
  - Dimension -17mm x 27mm
  - Powering options - 3.3V or 5V

### Requirement

Android 4.3

Android devices with BLE hardware: Nexus 4, Nexus 7 and Samsung Note 3

iOS 6 or 7

iPhone 5 (all models), iPhone 4S, iPad Air, iPad (3rd gen or later),
iPad mini (all models) and iPod touch (5th gen or later)

### Quick Start for iOS

  - Connect pins from ABBLEShield to Arduino board
      - VIN \> 5V or 3.3V. It should connect to 3.3V If it work with
        3.3V Arduino. Otherwise it should connect to 5V.
      - GND \> GND
      - TX \> RX for Arduino
      - RX \> TX for Arduino
  - Download App
    [LightBlue](https://itunes.apple.com/app/lightblue/id557428110?mt=8)
    to test BLE