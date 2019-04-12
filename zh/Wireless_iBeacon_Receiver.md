

## Wireless iBeacon Receiver

<table>

<tr>

<td valign="top">

四月兄弟科技有限公司提供的无线iBeacon接收器，可以作为蓝牙4.0的广播监听设备，收集附近的iBeacon广播信息并上传到远程服务器端。设备工作于Wi-Fi
station状态，可连接周边Wi-Fi热点接入互联网。

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

<img src=https://i1.aprbrother.com/wifi4.jpg-320.jpg align=right>

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
  - Download the free software \[//mosquitto.org mosquitto\] to access
    the beacon datas uploaded by the receiver.

Please refer the "How To Config" Section for more information.

\=== 关于LED指示灯状态

  - 绿色LED: 该指示灯表示网络正常且MQTT已经连接成功。无法在这个状态下使用WiFi Starter应用来配置设备。

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

|               |                              |                                    |
| ------------- | ---------------------------- | ---------------------------------- |
| 字节            | 说明                           | 示例                                 |
| 1 - 12 bytes  | beacon的mac地址                 | `F4B85ED84CB7`                     |
| 13 - 44 bytes | iBeacon的UUID，共32字节           | `12345678123412341234123412341234` |
| 45 - 48 byte  | major                        | `7DAD`                             |
| 49 - 52 byte  | minor                        | `33B1`                             |
| 53, 54 byte   | measured power，减去255之后就是实际的值 | C6                                 |
| 55, 56 byte   | 电量，按百分比计，如没有获得电量，用FF代替       | FF                                 |
| 57, 58 byte   | RSSI，减去255之后就是实际的值           | 41                                 |
|  |

### Documents

  - [Wi-Fi配置](Wi-Fi_Config_For_Wi-Fi-BLE-Sniffer.md)
  - [MQTT配置](MQTT_Config_For_Wi-Fi-Ble-Sniffer.md)

### 交流

  - [支持社区](http://bbs.aprbrother.com/c/wifi)
