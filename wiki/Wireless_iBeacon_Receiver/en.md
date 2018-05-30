<languages/>

## Wireless iBeacon Receiver

<table>

<tr>

<td valign="top">

The Wireless iBeacon Receiver can work as Bluetooth 4.0 receiver. It
will scan the iBeacon device nearby and post to the remote server side.
The device work as Wi-Fi station status. It will connect the Wi-Fi AP
and connect to internet.

### Specifications

  - Scan multiple beacon device in same time
  - MQTT protocol
  - Transfer data via Wi-Fi
  - The fastest transport frequency is 1 second. Good for realtime scan
    requirement.
  - Configure SSID and password by iPhone
SmartConfig

</td>

<td>

<img src=http://7fvk57.com1.z0.glb.clouddn.com/wifi4.jpg-320.jpg align=right>

</td>

</tr>

</table>

### Hardware

|                         |                             |                       |
| ----------------------- | --------------------------- | --------------------- |
| Parameters              | Description                 | Remark                |
| Work Voltage            | 5V DC / 2A                  |                       |
| Power Interface         | MINI-USB                    |                       |
| Bluetooth Protocol      | Bluetooth 4.0               |                       |
| Receiving Sensitivity   | \-93dBm                     | High gain mode        |
| Bluetooth Antenna       | 50 Ohm                      | External 2dBm antenna |
| Bluetooth Scan Duration | Configure as 1 - 10 seconds | 1 second default      |
| Wi-Fi Antenna           | 50 Ohm                      | PCB antenna           |
| Work with Wi-Fi AP      | 2.4G Wi-Fi AP only          |                       |
| Working Temperature(C)  | \-20 ~ 65                   |                       |
|  |

### How it worked

TODO

### Applications

  - Indoor Location
  - Meeting sign in
  - Check in
  - Parking & Checking in
  - Sensor data collection
  - Home automation
  - User data collection
  - ...

### Quick Start

  - Prepare an iPhone and download [app Wi-Fi
    Starter](https://itunes.apple.com/app/texas-instruments-simplelink/id884122493?mt=8)
  - Power on Wireless iBeacon Receiver
  - When the yellow led on, the device prepare for connect Wi-Fi AP.
    Configure the Wi-Fi SSID and password by app Wi-Fi Starter.
  - Open app Wi-Fi Starter，type in SSID and password and tap Start。Wait
    a moment, the app will receive a notification for device
    discovering, now Wi-Fi config ok. (Note: Only work with 2.4G Wi-Fi
    AP)
  - Re-power the receiver. The receiver will connect a MQTT Broker
    provide by ApilBrother default. - `mqtt.bconimg.com`
  - Download the free software mosquitto to access the beacon datas
    uploaded by the receiver.

Please refer the Config Section for more information.

### About LED Status

  - Green LED: It mean the network is ok and MQTT connected. You can't
    use WiFi Starter app to config the device at the status.

### Transport Protocol And Data Format

The transport protocol is MQTT. Here's a sample data.

<code>
{

"id":"ABCDEF123456",

"raw_beacons_data":"F4B85ED84CB7123456781234123412341234123412347DAD33B1C6FF41;0117C538C0CF23A01AF0232A45189C0E323FB773F5EF00100020B3FFB2;"

} </code>

It's a json data. The key "id" is the MAC address for the receiver. The
key named "raw_beacons_data" contains the beacon datas. The iBeacon
datas are splitted by semicolon. The sample data
`F4B85ED84CB7123456781234123412341234123412347DAD33B1C6FF41`

|               |                                                                     |                                    |
| ------------- | ------------------------------------------------------------------- | ---------------------------------- |
| Bytes         | Description                                                         | Example                            |
| 0 - 12 bytes  | Mac address for beacon                                              | `F4B85ED84CB7`                     |
| 13 - 45 bytes | iBeacon's UUID，32 bytes                                             | `12345678123412341234123412341234` |
| 46, 47 byte   | major                                                               | `7DAD`                             |
| 48, 49 byte   | minor                                                               | `33B1`                             |
| 50 byte       | measured power，minus 255 for real value                             | C6                                 |
| 51 byte       | Battery level in percent, there will be FF if battery level unknown | FF                                 |
| 52 byte       | RSSI，minus 255 for real value                                       | 41                                 |
|  |

### How to Config

  - [Wi-Fi Config](/Wi-Fi_Config_For_Wi-Fi-BLE-Sniffer "wikilink")
  - [MQTT Config](/MQTT_Config_For_Wi-Fi-Ble-Sniffer "wikilink")

### Community

  - [Support Forum](http://bbs.aprbrother.com/c/wifi)