## Description

AB BLE Gateway V4 is a BLE to gateway and bridge. The gateway reads iBeacon and Eddystone like beacon or customized Tag format and sends to local TCP server or internet HTTP/MQTT server.

User can configure the transmit period and server information through a simple HTTP API.

<img src="https://i1.aprbrother.com/gateway41.jpg-640.jpg">

## Features

- 尺寸: 72mmx74mmx20mm
- 电源: DC 5V/2000mA, micro-USB 或者标准POE 48V
- 工作温度: -20摄氏度 ~ 60摄氏度
- 同时读取多个BLE设备的广播信息并上传到远程服务器Reads multiple BLE devices in the same time
- 支持WebSocket/HTTP/MQTT协议
- BLE带有外置天线

## 认证

* FCCID: `2ACAL-ABBG0004`
* CE No.: `ATSZAWW190102008`

## BLE

- Bluetooth Smart( BLE) is based on NRF52832 
- 外置天线
- Bi-direction: Reads message advertised from BLE devices 
- 30M range in open space

## Wi-Fi

  - WiFi is based on ESP32
  - Support 802.11 b/g/n/e/i (802.11n, Speed 150 Mbps)
  - 2.4GHz frequency band
  - Transmit power:
      - \+20dBm @802.11b
      - \+14dBm @802.11n
  - WiFi data rate up to 150Mbps
  - WiFi with on board PCB antenna
  - HTTP api for configuration
  - Connect to Cloud server or local server
  - 100M range in open space

## Ethernet

  - full-duplex 10-BASE-T/100BASE-TX transceiver and supports 10Mbps
    (10BASE-T) and 100Mbps (100BASE-TX) operation.
  - 15W Power Over Ethernet Meets IEEE 802. 3 af Specifications

## Applications

  - iBeacon/Eddystone/tag receiver for location tracking
  - BLE sensor reader for sensor network
  - Building automation
  - Health and wellness monitoring
  - Cycling, biking
  - Security
  - Location tracking
  - Access management
  - Advertisement
  - Industrial automation
  - Indoor Location
  - Meeting sign in
  - Check in
  - Parking & Checking in
  - Home automation

## Documents And Links

  - [快速上手](Quick_Start_For_AB_BLE_Gateway_V4.md)
  - [使用手册](User_Guide_For_AB_BLE_Gateway_V4.md)
  - [常见问题](FAQ_For_AB_BLE_Gateway_V4.md)
  - [软件以及工具](Software_AB_BLE_Gateway_V4.md)
  - [支持论坛](http://bbs.aprbrother.com/c/wifi)

