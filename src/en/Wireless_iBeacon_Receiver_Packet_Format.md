[← Wireless iBeacon Receiver Main
Page](Wireless_iBeacon_Receiver.md)

## iBeacon Scan Mode

The transport protocol is MQTT. Here's a sample data.

```
{

"id":"ABCDEF123456",

"raw_beacons_data":"F4B85ED84CB7123456781234123412341234123412347DAD33B1C6FF41;0117C538C0CF23A01AF0232A45189C0E323FB773F5EF00100020B3FFB2;"

}
```

It's a json data. The key "id" is the MAC address for the receiver. The
key named "raw_beacons_data" contains the beacon datas. The iBeacon
datas are splitted by semicolon. The sample data

`F4B85ED84CB7123456781234123412341234123412347DAD33B1C6FF41`

|               |                                                                     |                                    |
| ------------- | ------------------------------------------------------------------- | ---------------------------------- |
| Bytes         | Description                                                         | Example                            |
| 1 - 12 bytes  | Mac address for beacon                                              | `F4B85ED84CB7`                     |
| 13 - 44 bytes | iBeacon's UUID，32 bytes                                             | `12345678123412341234123412341234` |
| 45 - 48 byte  | major                                                               | `7DAD`                             |
| 49 - 52 byte  | minor                                                               | `33B1`                             |
| 53, 54 byte   | measured power，minus 255 for real value                             | C6                                 |
| 55, 56 byte   | Battery level in percent, there will be FF if battery level unknown | FF                                 |
| 57, 58 byte   | RSSI，minus 255 for real value                                       | 41                                 |
|  |

## Lite Scan Mode

## RAW Scan Mode

Example response hex data for raw data

`12 3b 6a 1a 64 cf aa 03 1e 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea
b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64
c5`

|             |                                                 |                                                                                           |
| ----------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Bytes       | Description                                     | Example                                                                                   |
| 1 - 6 bytes | mac address for BLE device                      | `12 3b 6a 1a 64 cf`                                                                       |
| 7 byte      | RSSI，minus 255 for real value                   | aa                                                                                        |
| 8 byte      | Advertising Type                                | 03, see the table below                                                                   |
| 9 byte      | Data length for advertisement data              | 1e                                                                                        |
| 10 byte -   | Advertisement data, see the 9th byte for length | 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5 |

Advertising Type Code

|      |                                          |
| ---- | ---------------------------------------- |
| Code | Description                              |
| 0    | Connectable undirected advertisement     |
| 1    | Connectable directed advertisement       |
| 2    | Scannable undirected advertisement       |
| 3    | Non-Connectable undirected advertisement |
| 4    | Scan Response                            |
|  |
