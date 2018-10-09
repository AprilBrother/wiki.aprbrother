# New Beacon 

## ABSensor N01

<img src="http://i1.aprbrother.com/ABsensorDHF.jpg-320.jpg" width="120" align="right">

BLE Beacon with acceleration sensor. Small size and replacable battery.

### Technical Details

* Power supply by CR2032 Battery 230~ mAh (replaceable).
* Dimensions: Height 33mm, Width 33mm, Depth 10mm
* Signal range 3m - 60m.
* Embedded acceleration sensor
* One LED and one button
* One hole for leash/strip
* Advertise 1st UUID when still, advertise 2nd UUID when move
* BLE micro controller NRF52810

### Hardware Files 

* [Schematic](https://github.com/AprilBrother/ab-hardware/raw/master/n01/schematic.pdf)

## ABSensor N03

N03 advertises sensor data in custom format. See section "Packet Format" for more details.

### Technical Details

* Power supply by CR2450 Battery 500~ mAh (replaceable).
* Embedded Temperature/Humidity/Light sensors.
* BLE micro controller NRF52832

![n03 PCB](http://i1.aprbrother.com/n03-pcb.png-320.jpg)

### Sensors

* Light Sensor: AP3216
* Humidity/Temperature Sensor: HTS221

### Pinouts

#### P1

Pins for programing by jLink

* GND
* VCC
* SWIO
* CLK

### Hardware Files 

* [Schematic](https://github.com/AprilBrother/ab-hardware/raw/master/n03/sensor-htl.pdf)
* [nRF5 Libraries For Sensor](https://github.com/AprilBrother/nrf5-sdk/tree/master/libraries)

### Packet Format

| Byte(s) | Name | Value | Notes |
| ------- | ------- | ---------- | ---------- |
| 0       | Flags 0              | 0x02       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 1       | Flags 1              | 0x01       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 2       | Flags 2              | 0x04       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
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
