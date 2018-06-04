The ABSniffer firmware provide the features iBeacon sniffer. It can be
config with AT command.

## AT Commands

The response for each command have a `\r\n` line end.

### Local Commands

<table>
<tbody>
<tr class="odd">
<td><p>Command</p></td>
<td><p>Summary</p></td>
<td><p>Examples</p></td>
<td><p>Response</p></td>
</tr>
<tr class="even">
<td><p>AT</p></td>
<td><p>Query the status</p></td>
<td></td>
<td><p>OK</p></td>
</tr>
<tr class="odd">
<td><p>AT+ADDR?</p></td>
<td><p>Query the native MAC address</p></td>
<td></td>
<td><p>OK+ADDR: MAC address (address for 12 string)</p></td>
</tr>
<tr class="even">
<td><p>AT+VERS?</p></td>
<td><p>Query the firmware version</p></td>
<td></td>
<td><p>OK+VERS1.0</p></td>
</tr>
<tr class="odd">
<td><p>AT+SCAN?</p></td>
<td><p>Start scan the iBeacon nearby</p></td>
<td></td>
<td><p>OK+SCAN1<br />
OK+SCAN:0017EA915E24,E2C56DB5DFFB48D2B060D0F5A71096E0,1,8,-58,-72,100<br />
OK+SCAN:C4EDBA567941,E2C56DB5DFFB48D2B060D0F5A71096E0,0,0,-58,-72<br />
OK+SCAN:20CD3999087E,E2C56DB5DFFB48D2B060D0F5A71096E0,1,6,-65,-69,100<br />
OK+SCAN0</p></td>
</tr>
<tr class="even">
</tr>
<tr class="odd">
<td><p>AT+CONN[param1]</p></td>
<td><p>Connect to an AprilBeacon</p></td>
<td><p>AT+CONN20CD3999087E</p></td>
<td><p>OK+CONNA</p></td>
</tr>
<tr class="even">
<td><p>AT+BAUD[param1]</p></td>
<td><p>Set the baud rate<br />
param1 : 0 - 4.<br />
0: 9600, 1: 19200<br />
2: 38400, 3: 57600<br />
4:115200<br />
Default: 0 (115200)</p></td>
<td><p>AT+BAUD1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="odd">
<td><p>AT+RESET</p></td>
<td><p>Restart the module immediately</p></td>
<td></td>
<td></td>
</tr>
<tr class="even">
</tr>
</tbody>
</table>

The response for command `AT+SCAN?` are splitted by commas. The fields
mean:

  - Mac address
  - Proximity UUID
  - Major
  - Minor
  - Measured power
  - RSSI
  - Battery Level (This one only effected for AprilBeacon that firmware
    2.1 and later)

If change the baud rate to lower value, the output for `AT+SCAN?` will
be incomplete.

### Control Commands

The commands Only effected when connect to AprilBeacon. To change the
configure of a April Beacon, execute the command `AT+AUTH[param1]`
first.

|                   |                                                |                                         |                                         |
| ----------------- | ---------------------------------------------- | --------------------------------------- | --------------------------------------- |
| Command           | Summary                                        | Examples                                | Response                                |
| AT+PUID\[param1\] | Set the proximityUUID for iBeacon              | AT+PUIDE2C56DB5DFFB48D2B060D0F5A71096E0 | OK+Set:E2C56DB5DFFB48D2B060D0F5A71096E0 |
| AT+MAJR\[param1\] | Set the major for iBeacon                      | AT+MAJR123                              | OK+Set:123                              |
| AT+MINR\[param1\] | Set the minor for iBeacon                      | AT+MINR123                              | OK+Set:123                              |
| AT+MPOW\[param1\] | Set the measured power for iBeacon             | AT+MPOW-58                              | OK+Set:-58                              |
| AT+AUTH\[param1\] | Input the passcode to change the to configable | AT+AUTHAprilBrother                     | OK+AUTH1                                |
|  |