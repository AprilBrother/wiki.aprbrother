# New Beacon 

## ABSensor N01

## ABSensor N03

### Technical Details

#### Schematic 

#### Packet Format

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
