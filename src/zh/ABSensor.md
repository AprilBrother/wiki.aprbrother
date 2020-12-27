# New Beacon 

## ABSensor N01

<img src="https://i1.aprbrother.com/ABsensorDHF.jpg-320.jpg" width="120" align="right">

BLE Beacon with acceleration sensor. Small size and replacable battery.

### N01 Technical Details

* Power supply by CR2032 Battery 230~ mAh (replaceable).
* Dimensions: Height 33mm, Width 33mm, Depth 10mm
* Signal range 3m - 60m.
* Embedded acceleration sensor
* One LED and one button
* One hole for leash/strip
* Advertise 1st UUID when still, advertise 2nd UUID when move
* BLE micro controller NRF52810

### N01 Default Settings

| Name                 | Parameters                                            |
| -------------------- | ----------------------------------------------------- |
| Advertising Type     | Sensor                                                |
| Advertising Interval | 700ms                                                 |
| TX Power             | 0dBm                                                  |
| Proximity UUID       | B5B182C7-EAB1-4988-AA99-B5C1517008D9                  |
| Major                | 1                                                     |
| Minor                | last 2 bytes of mac address                           |

### Advertising Type Comparison

|  Advertising Type    | iBeacon         | Eddystone          | Sensor                                |
| -------------------- | -------         | ---------          | ------                                |
| Advertising Interval | configurable    | configurable       | configurable                          |
| Button press         | advertise UUID2 | advertise UUID2    | Change button bit in advertising data |
| Acceleration Sensor  | Keep working    | Keep working       | Keep working                          |

### N01 Packet Format

Sensor模式下的广播包格式

| Byte(s) | Name                    | Value      | Notes                                                            |
| ------- | ----------------------- | ---------- | ---------------------------------------------------------------- |
| 0       | Flags\[0\]              | 0x02       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 1       | Flags\[1\]              | 0x01       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 2       | Flags\[2\]              | 0x06       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 3       | Length                  | 0x03       | See Bluetooth 4.0 Core Specification                             |
| 4       | Type                    | 0x03       | See Bluetooth 4.0 Core Specification                             |
| 5, 6    | Service UUID            | 0x59, 0xFE | Service UUID for OTA service                                     |
| 7       | Length                  | 0x17       | See Bluetooth 4.0 Core Specification                             |
| 8       | Type                    | 0x16       | Manufacturer Specification data                                  |
| 9, 10   | Service UUID            | 0x59, 0xFE | Service UUID for OTA service                                     |
| 11, 12  | Compoany ID             | 0xAB, 0x01 | ID for April Brother                                             |
| 13      | Data Version            | 0x03       | \-                                                               |
| 14 - 19 | Mac Address             | \-         | Reverse the order                                                |
| 20, 21  | Temperature             | \-         | \-                                                               |
| 22      | Is Sensor Motion        | 0x00       | When move the value = 0x01. when still the value = 0x00          |
| 23      | X Acceleration          | \-         | \-                                                               |
| 24      | Y Acceleration          | \-         | \-                                                               |
| 25      | Z Acceleration          | \-         | \-                                                               |
| 26      | Current Motion Duration | 0x00       | Current motion time in second                                    |
| 27      | Last Motion Duration    | 0x00       | Last motion time in second                                       |
| 28      | Battery Level           | 0x64       | Battery level in percent                                         |
| 29      | Measured Power          | \-         | \-                                                               |
| 30      | Button State            | \-         | pressed=0x01, idle=0x00                                          |

### N01 Hardware Files 

* [Schematic](https://github.com/AprilBrother/ab-hardware/raw/master/n01/schematic.pdf)

## ABSensor N03

N03 advertises sensor data in custom format. See section "Packet Format" for more details.

### N03 Technical Details

* Power supply by CR2450 Battery 500~ mAh (replaceable).
* Dimensions: Diameter 48mm, Height 23mm
* Embedded Temperature/Humidity/Light sensors.
* BLE micro controller NRF52832

![n03 PCB](https://i1.aprbrother.com/n03-pcb.png-320.jpg)

### Sensors

* Light Sensor: AP3216
* Humidity/Temperature Sensor: HTS221

### N03 Pinouts

#### P1

Pins for programing by jLink

* GND
* VCC
* SWIO
* CLK

### N03 Hardware Files 

* [Schematic](https://github.com/AprilBrother/ab-hardware/raw/master/n03/sensor-htl.pdf)
* [nRF5 Libraries For Sensor](https://github.com/AprilBrother/nrf5-sdk/tree/master/libraries)

### N03 Packet Format

| Byte(s) | Name | Value | Notes |
| ------- | ------- | ---------- | ---------- |
| 0       | Flags 0              | 0x02       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 1       | Flags 1              | 0x01       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 2       | Flags 2              | 0x06       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 3       | Length                  | 0x03       | See Bluetooth 4.0 Core Specification                             |
| 4       | Type                    | 0x03       | See Bluetooth 4.0 Core Specification                             |
| 5, 6    | Service UUID            | 0x59, 0xFE | 16-bit Service UUID for OTA service                                     |
| 7       | Length                  | 0x12       | Service Data. Ibid. § 1.11 |
| 8       | Service Data data type value | 0x16  | |
| 9, 10   | Service UUID            | 0x59, 0xFE | 16-bit Service UUID for OTA service   |
| 11      | Company ID | 0xAB  | |
| 12      | Device Type | 0x03  | |
| 13,18 | Mac Address             |            |  
| 19      | Battery Level           | 0x02       | |
| 20,21      | Temperature    | 0xD400         | Reverse the value first. Divide 8 for real temperature value. Eg. 0x00D4 = 212, 212 / 8 = 26.5°C |
| 22,23      | Humidity       | 0x6700 | Reverse the value first. Divide 2 for real humidity value. Eg. 0x0067 = 103, 103 / 2 = 51.5 |
| 24,25      | Light          | 0x0700 | Reverse the value first. 0x0007 = 7 | 
