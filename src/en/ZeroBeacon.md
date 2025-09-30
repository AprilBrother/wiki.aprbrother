## Introduce

ZeroBeacon firmware provide the features Beacon + UART transparent
transfer. It can be config with AT command.

## Features

BLE Service UUID FFF0

  - Subscribe FFF1 to get RX data.
  - Write to FFF2 to send TX data.

## AT Command & Configuration

AT commands can only be used when the BLE is not connected to any
cellphone or other device.

'''NOTE: ''' Some AT commands for firmware v2.2.x are not compatible
with older firmware. You should pay attention for command that change
string value. For example:

Firmware v2.2.x, it added a equal character

`AT+NAME=hello`

Firmware v2.1.x

`AT+NAMEhello`

### AT Command for iBeacon

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT+BCON?</p></td>
<td><p>Query the iBeacon advertising status.<br />
1:on 0:off</p></td>
<td></td>
<td><p>AT+BCON1</p></td>
</tr>
<tr class="odd">
<td><p>AT+BCON[param1]</p></td>
<td><p>Set the iBeacon advertising on<br />
1:turn on 0 turn :off</p></td>
<td><p><code>AT+BCON1</code></p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="even">
<td><p>AT+PUID?</p></td>
<td><p>Query the proximityUUID for iBeacon</p></td>
<td></td>
<td><p>AT+PUIDE2C56DB5DFFB48D2B060D0F5A71096E0</p></td>
</tr>
<tr class="odd">
<td><p>AT+PUID[param1]</p></td>
<td><p>Set the proximityUUID for iBeacon</p></td>
<td><p>AT+PUIDE2C56DB5DFFB48D2B060D0F5A71096E0</p></td>
<td><p>OK+Set:E2C56DB5DFFB48D2B060D0F5A71096E0</p></td>
</tr>
<tr class="even">
<td><p>AT+MAJR?</p></td>
<td><p>Query the major for iBeacon</p></td>
<td></td>
<td><p>AT+MAJR999</p></td>
</tr>
<tr class="odd">
<td><p>AT+MAJR[param1]</p></td>
<td><p>Set the major for iBeacon</p></td>
<td><p>AT+MAJR123</p></td>
<td><p>OK+Set:123</p></td>
</tr>
<tr class="even">
<td><p>AT+MINR?</p></td>
<td><p>Query the minor for iBeacon</p></td>
<td></td>
<td><p>AT+MINR999</p></td>
</tr>
<tr class="odd">
<td><p>AT+MINR[param1]</p></td>
<td><p>Set the minor for iBeacon</p></td>
<td><p>AT+MINR123</p></td>
<td><p>OK+Set:123</p></td>
</tr>
<tr class="even">
<td><p>AT+MPOW?</p></td>
<td><p>Query the measured power for iBeacon</p></td>
<td></td>
<td><p>OK+MPOW-59</p></td>
</tr>
<tr class="odd">
<td><p>AT+MPOW[param1]</p></td>
<td><p>Set the measured power for iBeacon</p></td>
<td><p>AT+MPOW-58</p></td>
<td><p>OK+Set:-58</p></td>
</tr>
<tr class="even">
<td><p>AT+ADVI?</p></td>
<td><p>Query the advertising interval. The unit is 100ms</p></td>
<td></td>
<td><p>OK+ADVI1</p></td>
</tr>
<tr class="odd">
<td><p>AT+ADVI[param1]</p></td>
<td><p>Set the advertising interval. The unit is 100ms</p></td>
<td><p>AT+ADVI10</p></td>
<td><p>OK+Set:10</p></td>
</tr>
<tr class="even">
<td><p>AT+POWR[param1]</p></td>
<td><p>Set the TX power level.<br />
0: 0dBm 1: 4dBm<br />
2: -6dBm 3: -23dBm</p></td>
<td><p>AT+POWR1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
</tbody>
</table>

### Other Command

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT+NAME?</p></td>
<td><p>Query the device name</p></td>
<td></td>
<td><p>OK+NAMEZeroBeacon</p></td>
</tr>
<tr class="odd">
<td><p>AT+NAME[param1]</p></td>
<td><p>Set the device name</p></td>
<td><p>AT+NAMEhello</p></td>
<td><p>OK+Set:hello</p></td>
</tr>
<tr class="even">
<td><p>AT</p></td>
<td><p>Query the status</p></td>
<td></td>
<td><p>OK</p></td>
</tr>
<tr class="odd">
<td><p>AT+VERS?</p></td>
<td><p>Query the firmware version</p></td>
<td></td>
<td><p>OK+VERS1.0</p></td>
</tr>
<tr class="even">
<td><p>AT+ADDR?</p></td>
<td><p>Query the native MAC address</p></td>
<td></td>
<td><p>OK+LADD: MAC address (address for 12 string)</p></td>
</tr>
<tr class="odd">
<td><p>AT+BAUD[param1]</p></td>
<td><p>Set the baud rate<br />
param1 : 0 - 4.<br />
0: 9600, 1: 19200<br />
2: 38400, 3: 57600<br />
4:115200<br />
Default: 0 (9600)</p></td>
<td><p>AT+BAUD1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="even">
<td><p>AT+RESET</p></td>
<td><p>Reset the device</p></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### Commands for ZeroBeacon 2.0

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT+ROLE?</p></td>
<td><p>Query the central/peripheral role<br />
The default role is peripheral.<br />
1: peripheral<br />
2: central</p></td>
<td></td>
<td><p>OK+ROLE0</p></td>
</tr>
<tr class="odd">
<td><p>AT+ROLE[param1]</p></td>
<td><p>Set the role<br />
After using the AT+ROLE command to change the role, you must then execute <code>AT+RESET</code> to put that change into effect</p></td>
<td><p>AT+ROLE1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="even">
<td><p>AT+SCAN?</p></td>
<td><p>Scan the peripheral nearby. Only works when the role is central</p></td>
<td></td>
<td><pre><code>OK+SCAN1
OK+SCAN:0x123456789012
OK+SCAN0</code></pre></td>
</tr>
<tr class="odd">
<td><p>AT+CONN[param1]</p></td>
<td><p>Connect the peripheral. Only works when the role is central</p></td>
<td><p>AT+CONN123456789012</p></td>
<td></td>
</tr>
</tbody>
</table>

### Commands for ZeroBeacon 2.1

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT+ROLE?</p></td>
<td><p>Query the central/peripheral role<br />
The default role is peripheral.<br />
0: peripheral<br />
1: central</p></td>
<td></td>
<td><p>OK+ROLE0</p></td>
</tr>
<tr class="odd">
<td><p>AT+SDUR[param1]</p></td>
<td><p>Scan duration in seconds. run AT+RESET to activate the new duration timing</p></td>
<td><p>AT+SDUR1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="even">
<td><p>AT+SCAN0</p></td>
<td><p>Stop scan</p></td>
<td></td>
<td><pre><code>OK+SCAN0</code></pre></td>
</tr>
<tr class="odd">
<td><p>AT+SCAN1</p></td>
<td><p>Scan behavior like version 2.0</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><p>AT+SCAN2</p></td>
<td><p>Keep scan iBeacon and return ASCII format</p></td>
<td><p>AT+SCAN2</p></td>
<td><pre><code>OK+SCAN:0017EA915E24,E2C56DB5DFFB48D2B060D0F5A71096E0,1,8,-58,-72,100
OK+SCAN:C4EDBA567941,E2C56DB5DFFB48D2B060D0F5A71096E0,0,0,-58,-72
OK+SCAN:20CD3999087E,E2C56DB5DFFB48D2B060D0F5A71096E0,1,6,-65,-69,100</code></pre></td>
</tr>
<tr class="odd">
<td><p>AT+SCAN3</p></td>
<td><p>Keep scan iBeacon and return HEX format</p></td>
<td><p>AT+SCAN3</p></td>
<td><p>Start with <code>OK+SCAN:</code>, end with &quot;\r\n&quot;</p></td>
</tr>
</tbody>
</table>

### Commands for ZeroBeacon 2.1.6

|          |                                                              |          |                                                  |
| -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------ |
| Command  | Summary                                                      | Examples | Response                                         |
| AT+SCAN4 | Scan BLE module and return raw advertsing data in hex format | AT+SCAN4 | OK+SCAN4, Start with OK+SCAN:, end with "\\r\\n" |
|  |

Example response hex data for `AT+SCAN4`

Note: The serial function will not work if the device go to sleep. You
need give high level to pin P0.1 to wakeup the device.

`4f 4b 2b 53 43 41 4e 3a 12 3b 6a 1a 64 cf aa 03 1e 02 01 06 1a
ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01
cf 64
c5 0d 0a`

|              |                                            |                                                                                           |
| ------------ | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Bytes        | Description                                | Example                                                                                   |
| 1 - 8 bytes  | hex code for "OK+SCAN:"                    | `4f 4b 2b 53 43 41 4e 3a`                                                                 |
| 9 - 14 bytes | mac address for BLE device                 | `12 3b 6a 1a 64 cf`                                                                       |
| 15 byte      | RSSI，minus 255 for real value              | aa                                                                                        |
| 16 byte      | Advertising Type                           | 03, see the table below                                                                   |
| 17 byte      | Data length for advertisement data         | 1e                                                                                        |
| 18 byte -    | Advertisement data, see 17 byte for length | 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5 |
| ?            | End signal, hex code for "\\r\\n"          | 0d 0a                                                                                     |

### Commands for ZeroBeacon 2.2.1

|                    |                                                                   |                                          |                                              |
| ------------------ | ----------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| Command            | Summary                                                           | Examples                                 | Response                                     |
| AT+PUID=\[param1\] | Set the proximityUUID for iBeacon                                 | AT+PUID=E2C56DB5DFFB48D2B060D0F5A71096E0 | OK+Set:E2C56DB5DFFB48D2B060D0F5A71096E0      |
| AT+NAME=\[param1\] | Set the device name                                               | AT+NAME=hello                            | OK+Set:hello                                 |
| AT+SLEEP           | make the BLE module go to sleep                                   | AT+SLEEP                                 | OK+SLEEP, It can't accept any at command now |
| AT+CONN?           | query connection status                                           | AT+CONN?                                 | OK+CONN:1 1 - connected 0 - disconnected     |
| AT+RADD?           | query mac address of remote device                                | AT+RADD?                                 | OK+RADD:0x1234567890AB                       |
| AT+RSSI?           | query RSSI of remote device, only affected when central connected | AT+RSSI?                                 | OK+RSSI:-49                                  |
| AT+SDUR?           | query scan duration                                               | AT+SDUR?                                 | OK+SDUR:1000                                 |
| AT+POWR?           | query TX power                                                    | AT+POWR?                                 | OK+POWR:-59                                  |
|  |

### Commands for ZeroBeacon 2.2.3

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT+PIN=[param1]</p></td>
<td><p>Set pin code, the pin code should be 6 digits. The default pin code is 000000. Only affected when auth mode &gt; 1</p></td>
<td><p>AT+PIN=123456</p></td>
<td><p>OK+Set:123456</p></td>
</tr>
<tr class="odd">
<td><p>AT+AUTH[param1]</p></td>
<td><p>Set the auth mode</p>
<pre><code>0: no auth and passcode needed, default mode
1: auth without passcode
2: auth with passcode
3: auth and bond</code></pre></td>
<td><p>AT+AUTH1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="even">
<td><p>AT+DBOND</p></td>
<td><p>delete all devices bonded</p></td>
<td><p>AT+DBOND</p></td>
<td><p>OK+DBOND</p></td>
</tr>
<tr class="odd">
</tr>
</tbody>
</table>

### Commands for ZeroBeacon 2.2.8

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT+ACT[param1]</p></td>
<td><p>Set the scan mode</p>
<pre><code>0: passive scan, default mode
1: active scan</code></pre></td>
<td><p>AT+ACT1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="odd">
</tr>
</tbody>
</table>

### Advertising Type Code

|      |                                          |
| ---- | ---------------------------------------- |
| Code | Description                              |
| 0    | Connectable undirected advertisement     |
| 1    | Connectable directed advertisement       |
| 2    | Scannable undirected advertisement       |
| 3    | Non-Connectable undirected advertisement |
| 4    | Scan Response                            |
|  |

## ChangeLog

### Version 2.2.8

Add new command `AT+ACT` for switch passive/active scan

### Version 2.2.6

Fixes a bug for transfer data from central to peripheral

### Version 2.2.3

  - A device in peripheral role will output `OK+CONN` if connected
  - Add command `AT+AUTH` to change the auth mode
  - Add command `AT+PIN` to enable pin code for auth
  - Add command `AT+DBOND` for devices bonded

### Version 2.2.1

#### Notices

This version force add a "=" for AT setup command. For example:

Replace `AT+PUIDE2C56DB5DFFB48D2B060D0F5A71096E0` with
`AT+PUID=E2C56DB5DFFB48D2B060D0F5A71096E0`

But you can still use orginal AT setup command to setup digital value:
`AT+MINR1234`

#### Changes and minor enhancements:

  - Upgrade the BLE stack to latest version
  - Add command `AT+SLEEP` for make the BLE module go to sleep. For wake
    it up, add a rising edge to P0.1
  - Add command `AT+CONN?` to query connection status
  - Add command `AT+RADD?` to query mac address of remote device when
    connected
  - Add command `AT+RSSI?` to query RSSI value after connected (central
    only, not work for peripheral yet)
  - Minor change for `AT+SCAN1` output

#### Bug Fixes

  - Fix for crash by command `AT+ADVI?`
  - Fix for command `AT` can't disconnect when central role
  - Fix for peripheral can't send message to central when connected
  - Fix for central can't send message to peripheral after reconected
  - Fix for central can't get mac address

### Version 2.1.7

  - The unit for AT+SDUR (scan duration) is changed from second to ms.
    For example: `AT+SDUR300`. the at command will change scan duration
    to 300ms.

### Version 2.1

  - Response `\r\n` at the line end for AT commands
  - Fix a bug for configure iBeacon proximityUUID
  - Add AT commands for scan iBeacon

