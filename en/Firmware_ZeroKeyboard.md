## Introduce

ZeroKeyboard firmware provide the HID keyboard or mouse. It can be
config with AT command.

Currently HID mouse is not available.

## Default Parameters

  - Baud rate 57600
  - Auth and bond needed first for iOS

## AT Command & Configuration

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
<td><p>OK+NAMEZeroKeyboard</p></td>
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
Default: 3 (57600)</p></td>
<td><p>AT+BAUD1</p></td>
<td><p>OK+Set:1</p></td>
</tr>
<tr class="even">
<td><p>AT+RESET</p></td>
<td><p>Reset the device</p></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><p>AT+CONN?</p></td>
<td><p>query connection status</p></td>
<td><p>AT+CONN?</p></td>
<td><p>OK+CONN:1 1 - connected 0 - disconnected|-</p></td>
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
<pre><code>0: no auth and passcode needed
1: auth without passcode
2: auth with passcode
3: auth and bond, default mode</code></pre></td>
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
<td><p>AT+KEY=[param1]</p></td>
<td><p>Input keys for HID keyboard. Only affected when connected</p></td>
<td><p>AT+KEY=hello</p></td>
<td><p>OK+Set:hello</p></td>
</tr>
<tr class="even">
</tr>
</tbody>
</table>
