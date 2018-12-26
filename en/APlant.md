## Instroduction

DA14580 based soil moisture sensor. Also provide ambient temperature
sensor. Advertising sensor data with iBeacon
protocol.

<img src="https://i0.aprbrother.com/wp-content/uploads/2016/06/plant_1-600x600.jpg">

Install app AprilBeacon to configure
params

[<http://www.ti.com/lsds/media/images/Apple_App_Store_Badge.png>](https://itunes.apple.com/app/id847517010)
[<http://www.ti.com/lsds/media/images/Google_Play_Badge.png>](https://play.google.com/store/apps/details?id=com.aprilbrother.ab_ibeacon)

The project is based on [Miceuz's I2C Moisture Sensor
project](https://github.com/Miceuz/i2c-moisture-sensor). Thanks for
Miceuz.

## Features

- ARM Cortex -M0 32-bit processor
- Support Bluetooth Smart 4.0
- Powered with 1 X CR2032 battery
- Long battery life : 1.5 year in typical beacon setting
- iPhone/Android APP for configuration
- Button for Factory Reset
- Soil moisture sensor
- Temperature sensor for environment monitoring

## Specification

| Name                              | Parameters                                       |
| ------------------------------------------------ | ------------------------------------------------ |
| Chip                                             | Dialog DA14580                                   |
| Dimensions                                       | 160mm\*29mm\*20mm                                |
| Protocol standard                                | Bluetooth® 4.0 Through the iBeacon certification |
| System Requirements                              | iOS7.0 or above/ Android 4.3 or above            |
| Security                                         | Suport password for configure parameters         |
| TX Power                                         | 0dBm                                             |
| Transmission Range                               | Up to 35m                                        |
| Broadcast Frequency (Broadcasting time interval) | Adjustable (100~1285ms), Default 1285ms          |
| Supply Voltage                                   | 3.0V                                             |
| Battery                                          | CR2032 Battery                                   |

## Default Settings

  - Name of device: aplant_xxxx (last 2 bytes of mac address)
  - ProximityUUID: B5B182C7-EAB1-4988-AA99-B5C1517008D9
  - Major: configurable, default last 2 bytes of mac address
  - Measured power: -59 (Numeric only)

## Quick Start

Remove the plastic battery saver tab and they're ready to turn on. the
LED will blink 3 times when power on.

<img src="https://i1.aprbrother.com/plant_plastic.jpg">

### How to configure with app AprilBeacon

The sensor is compatible with app AprilBeacon. You can use the app to
configure UUID, major and advertising interval etc. You need add a name
filter "aplant" to support the sensor.

  - Open app AprilBeacon
  - Choose tab "Settings"
  - Tap on "Name Filter" and add a name "aplant"
  - Choose tab "Bluetooth" and reload the list, you will find the device
    "aplant_xxxx"

## Layouts

    A. CR2032 Battery Holder
    B. Button For Factory Reset
    C. Temperature Sensor
    D. LED

<img src="https://i1.aprbrother.com/aplant_layout_1.jpg-1024.jpg">

<img src="https://i1.aprbrother.com/soil-pcb.png" width="1024">

## Documents And Links

  - [APlant Payload Format](APlant_Payload_Format.md)
  - [Support Forum](http://bbs.aprbrother.com)

