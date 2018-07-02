## Introduction

**ASensor** is a BLE beacon with multiple advertising data formats. The
BLE is a very low power 2.4G radio that can transmit the beacon
information efficiently. The typical beacon battery life is 1.5 year in
default settings

You can use app or BLE gateway to receive the sensor
data.

| Name               | Descrpition                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| ABSensorDH (new\!) | <img src="http://7fvk57.com1.z0.glb.clouddn.com/ABsensorDHF.jpg-640.jpg" width=320> |
| ABSensor           | <img src="http://7fvk57.com1.z0.glb.clouddn.com/asensor_4.jpg-640.jpg" width="320"> |

## Features

  - 3-Axis, 12-bit accelerometer with selectable range of ±2,4,8,16g
    (LIS3DH)
  - one push button
  - Powered with CR2032 battery
  - Software adjustable transmitter power (0dBm and -20dBm) for short to
    long range applications.
  - Ultra low power consumption
  - Firmware updates Over-the-Air
(OTA).

## Specification

| Name                                             | Parameters                                       |
| ------------------------------------------------ | ------------------------------------------------ |
| Chip                                             | Dialog DA14580                                   |
| Dimensions                                       | 37.3mm \* 37.3mm \* 7mm                          |
| Protocol standard                                | Bluetooth® 4.0 Through the iBeacon certification |
| System Requirements                              | iOS7.0 or above/ Android 4.3 or above            |
| Security                                         | Suport password for configure parameters         |
| TX Power                                         | 0dBm                                             |
| Transmission Range                               | Up to 35m                                        |
| Broadcast Frequency (Broadcasting time interval) | Adjustable (100~1285ms), Default 1285ms          |
| Supply Voltage                                   | 3.0V                                             |
| Battery                                          | CR2032 Battery                                   |

## Advertising Type Comparison

<table>
<tbody>
<tr class="odd">
<td><p>Advertising Type</p></td>
<td><p>iBeacon</p></td>
<td><p>Eddystone</p></td>
<td><p>Sensor</p></td>
</tr>
<tr class="even">
<td><p>Advertising interval</p></td>
<td><p>configurable, 100 ms to 1285 ms</p></td>
<td><p>configurable, 100 ms to 1285 ms</p></td>
<td><p>configurable, 100 ms to 1285 ms, still : 1285ms Sensor, 5140ms iBeacon</p>
<p>in motion : 620ms Sensor, 2500ms iBeacon</p></td>
</tr>
<tr class="odd">
<td><p>Button</p></td>
<td><p>Press to start/stop advertising</p></td>
<td><p>No effect</p></td>
<td><p>No effect</p></td>
</tr>
<tr class="even">
<td><p>Motion Sensor</p></td>
<td><p>If second UUID is not empty, advertise second UUID when move</p></td>
<td><p>No effect</p></td>
<td><p>Keep working</p></td>
</tr>
<tr class="odd">
</tr>
</tbody>
</table>

## Default Settings

| Name                 | Parameters                                            |
| -------------------- | ----------------------------------------------------- |
| Device Name          | asensor_xxxx, "xxxx" are last 2 bytes of mac address |
| Advertising Interval | 1285ms                                                |
| Proximity UUID       | B5B182C7-EAB1-4988-AA99-B5C1517008D9                  |
| Major                | 1                                                     |
| Minor                | last 2 bytes of mac address                           |
| Advertising Type     | Sensor                                                |
|  |

## Documents And Links

  - [How To Setup Second UUID For
    ASensor](How_To_Setup_Second_UUID_For_ASensor.md)
  - [iOS SDK](https://github.com/AprilBrother/ABSensor-iOS-SDK)
  - [iOS read sensor data demo
    code](https://github.com/AprilBrother/iOS-ASensor-demo)
  - [Packet Formats](ASensor_Packet_Formats.md)
  - [Support Forum](http://bbs.aprbrother.com)
