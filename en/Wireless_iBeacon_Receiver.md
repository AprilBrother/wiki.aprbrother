



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
| Dimension               | 59.3mm x 75.3mm x 11.6mm    |                       |
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

  - [Quickstart](How_to_use_the_WiFi-Sniffer.md) - 快速上手中文版

### About LED Status

  - Red LED: It just mean the device is power on
  - Yellow LED: It mean the device started the network module
  - Green LED: It mean the network is ok and MQTT connected. You can't
    use WiFi Starter app to config the device at the status.

### Documents

  - [Update Wireless iBeacon
    Receiver](Wireless_iBeacon_Receiver_Update.md)
  - [Known Issues](Wireless_iBeacon_Receiver_Known_Issues.md)
  - [Packet Format](Wireless_iBeacon_Receiver_Packet_Format.md)
  - [Troubleshooting and
    FAQ](Wireless_iBeacon_Receiver_Troubleshooting_and_FAQ.md)
  - [Wi-Fi Config](Wi-Fi_Config_For_Wi-Fi-BLE-Sniffer.md)
  - [MQTT Config](MQTT_Config_For_Wi-Fi-Ble-Sniffer.md)

### Community

  - [Support Forum](http://bbs.aprbrother.com/c/wifi)

