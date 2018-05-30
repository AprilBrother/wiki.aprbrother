[← ASensor Main Page](/ASensor "wikilink")

## Sensor Mode

Table 1. Advertising packet for sensor
mode

|         |                         |            |                                                                  |
| ------- | ----------------------- | ---------- | ---------------------------------------------------------------- |
| Byte(s) | Name                    | Value      | Notes                                                            |
| 0       | Flags\[0\]              | 0x02       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 1       | Flags\[1\]              | 0x01       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 2       | Flags\[2\]              | 0x06       | See Bluetooth 4.0 Core Specification, Volume 3, Appendix C, 181. |
| 3       | Length                  | 0x03       | See Bluetooth 4.0 Core Specification                             |
| 4       | Type                    | 0x03       | See Bluetooth 4.0 Core Specification                             |
| 5, 6    | Service UUID            | 0xF5, 0xFE | Service UUID for OTA service                                     |
| 7       | Length                  | 0x13       | See Bluetooth 4.0 Core Specification                             |
| 8       | Type                    | 0xFF       | Custom data, See Bluetooth 4.0 Core Specification                |
| 9, 10   | Company ID              | 0xD2, 0x00 | ID for Dialog semi                                               |
| 11 - 16 | Mac Address             | \-         | \-                                                               |
| 17      | Firmware Version        | 0x02       | \-                                                               |
| 18      | Related Temperature     | \-         | \-                                                               |
| 19      | Is Sensor Motion        | 0x00       | When move, the value = 0x01. when still the value = 0x00         |
| 20      | X Acceleration          | \-         | \-                                                               |
| 21      | Y Acceleration          | \-         | \-                                                               |
| 22      | Z Acceleration          | \-         | \-                                                               |
| 23      | Current Motion Duration | 0x00       | Current motion time in second                                    |
| 24      | Last Motion Duration    | 0x00       | Last motion time in second                                       |
| 25      | Battery Level           | 0x64       | Battery level in percent                                         |
| 26      | Measured Power          | \-         | \-                                                               |
|  |