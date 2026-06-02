The ABSniffer firmware provide the features to scan advertisement data
from BLE device nearby. It's preloaded with ABSniffer 528.

Every AT command must end with `\r\n`.

## Default Settings

| Field        | Value   |
| ------------ | ------- |
| Baud Rate    | 115200  |
| Data Bit     | 8       |
| Parity Check | No      |
| Stop Bit     | 1       |
| Active Scan  | No      |
| Role         | central |

## AT Commands

| Command         | Summary                                                                                                 | Examples  | Response                                                                                                                         |
|-----------------|---------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| AT              | Query the status                                                                                        |           | OK                                                                                                                               |
| AT+ADDR?        | Query the native MAC address                                                                            |           | OK+ADDR: MAC address (address for 12 string)                                                                                      |
| AT+VERS?        | Query the firmware version                                                                              |           | OK+VERS:1.1                                                                                                                      |
| AT+SCAN0        | Stop scan                                                                                               |           |                                                                                                                                  |
| AT+SCAN1        | scan BLE advertisement data from BLE device nearby. Output ASCII string, see Table 1 for description of per field | AT+SCAN1  | OK+SCAN:123B6A1AF0E6,-86,3,30,0201061AFF4C000215B5B182C7EAB14988AA99B5C1517008D90001E6F0C5 OK+SCAN:123B6A1AF0D8,-93,3,30,0201061AFF4C000215B5B182C7EAB14988AA99B5C1517008D90001D8F0C5 OK+SCAN:123B6A1AEDEA,-91,3,30,0201061AFF4C000215B5B182C7EAB14988AA99B5C1517008D90001EAEDC5 |
| AT+BAUD[param1] | Set the baud rate<br>param1 : 0 - 4.<br>0: 9600, 1: 19200<br>2: 38400, 3: 57600<br>4:115200<br>5:230400<br>Default: 0 (115200) | AT+BAUD1  |                                                                                                                                  |
| AT+ACT[param1]  | Set active scan or not<br>param1 : 0, 1.<br>0: passive scan, 1: Active scan<br>Default: 0                | AT+ACT1   |                                                                                                                                  |
| AT+RST          | Restart the module immediately                                                                          |           |                                                                                                                                  |

### Table 1

The example data

```
OK+SCAN:123B6A1AF0E6,-86,3,30,0201061AFF4C000215B5B182C7EAB14988AA99B5C1517008D90001E6F0C5
```

| String           | Description                                      |
| -----------------| ------------------------------------------------ |
| OK+SCAN:         | Prefix                                           |
| 123B6A1AF0E6     | mac address                                      |
| `-86`             | RSSI                                             |
| 3                | Advertisement Type, See Table 2                  |
| 30               | Data length for advertisement data in hex format |
| 0201061AFF4C000215B5B182C7EAB14988AA99B5C1517008D90001E6F0C5 | Advertisement data                               |

### Table 2

Advertisement Type

| Code | Description                              |
| ---- | ---------------------------------------- |
| 0    | Connectable undirected advertisement     |
| 1    | Connectable directed advertisement       |
| 2    | Scannable undirected advertisement       |
| 3    | Non-Connectable undirected advertisement |
| 4    | Scan Response                            |
