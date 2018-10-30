[← AB BLE Gateway Main Page](AB_BLE_Gateway.md)





## Description

AB BLE Gateway is a gateway to connecting BLE devices to network by
WiFi.

## WiFi

Gateway provides two modes -- access point mode and station mode for
WiFi connection.

  - In AP mode, it work as a simple AP supporting DHCP. It can only
    support few WiFi connection in same time. The main purpose of this
    mode is for configuration.
  - In Station mode, it work a client device keeps trying to join to the
    AP in your home or office. After joining the AP, the gateway can
    bridge your BLE devices to the local TCP server of cloud server for
    management.

## BLE

BLE is in scan mode. It scan BLE advertising data from other BLE devices
nearby and then post these datas to server side. The BLE packet format
is in hex format.

Example hex data frame

`fe 27 00 12 3b 6a 1a 64 cf aa 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea
b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64
c5 0d 0a`

|              |                                       |                                                                                           |
| ------------ | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| Bytes        | Description                           | Example                                                                                   |
| byte 1       | Start of the data frame               | fe                                                                                        |
| byte 2       | data of the length                    | 27                                                                                        |
| byte 3       | advertising type, see the table below | 00                                                                                        |
| byte 4 - 9   | mac address for BLE device            | `12 3b 6a 1a 64 cf`                                                                       |
| byte 10      | RSSI, minus 256 for real value        | aa                                                                                        |
| byte 11 -    | Advertisement data                    | 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5 |
| last 2 bytes | End of the data frame                 | 0d 0a, the ASCII code for `\r\n`                                                          |
|  |

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

Note:

  - Since firmware v1.1 a meta data is added to the first line of BLE
    datas. The meta data is in json format and end with `\r\n\r\n`. An
    example meta data
    `{"v":"1.1","mid":129,"id":"175229","ip":"192.168.1.129"}\r\n\r\n`

## Power

The power input is DC 5V/1A. A power cable is come with every gateway.
One side of the cable is USB-A, the other side is 3.5-1.35MM DC plug.

## Button And LED

Power switch. Push to left side for power on.

<img src="https://i1.aprbrother.com/abgateway-en.png">

Find the hole in the photo below, there's a config button. A LED is at
left side of the button.

It can be used to change device to Smart Config mode and configure WiFi
by cellphone wireless, or factory reset (Long press the button \> 3
seconds).

1.  Put needle or pencil in that hole, and press it (you will feel that
    button is pressed).
2.  The device disconnect current WiFi and LED start blink
3.  Download our iOS app
    "[YuePixel](https://itunes.apple.com/app/yuepixels/id1107542359?mt=8)"
    and configure WiFi
4.  If WiFi is ok, the LED stop blink

## Web Config UI

### Dashboard

See "Firmware Version", mac address for WiFi, serial number at this page

### WiFi

AB BLE Gateway work at STATION and AP mode in same time.

<img src="https://i1.aprbrother.com/ab-wifi.jpg">

#### AP

AB BLE Gateway work as AP mode default. You can see the parameters for
the AP.

  - SSID: the default name is `ab.gateway` and serial number
  - Security Key: default key is `12345678`, it can be changed to other key

#### Station

  - Scan WiFi: click to start scan AP nearby
  - SSID: choose a SSID in AP list by "Scan WiFi" or type a SSID manual
  - Security Key: Type key for your AP. Leave blank for open WiFi

### Application

### Advanced

  - [OTA upgrade firmware](ABGateway_OTA.md)
  - Restart device

## App ABGateway

to be continued

