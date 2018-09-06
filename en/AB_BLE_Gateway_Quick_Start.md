[← AB BLE Gateway Main Page](AB_BLE_Gateway.md)





## Description

AB BLE Gateway work as Bluetooth 4.0 receiver (central role) and scan
BLE device nearby and post to the remote server side. It also need
connect to Wi-Fi AP for network connection.

## Work As WebSocket Server

By default, AB BLE Gateway also work as a WiFi AP. The WiFi AP can only
accept a few WiFi connection in same time.

  - Connect to AB BLE Gateway AP. The AP name is ab.gateway-xxxxx,
    password: 12345678
  - Open browser and access <http://192.168.4.1>
  - Click menu "Application" on top of the page
  - Check "Connection Type" as "WebSocket Server", The default port is
    8080

[<img src="http://i1.aprbrother.com/app-websocket-server.jpg-320.jpg">](http://i1.aprbrother.com/app-websocket-server.jpg)

  - Reboot device
  - Use WebSocket client tool to connect the server
  - See the BLE data in client tool

## Work As WebSocket Client

In this mode, AB BLE Gateway is a WebSocket client and connects to a
existing WebSocket Server through other WiFi AP.

1.  Connect to AB BLE Gateway AP. The AP name is ab.gateway-xxxxx,
    password: 12345678
2.  Open browser and access <http://192.168.4.1>
3.  Change gateway to connect your WiFi
    AP
    [<img src="http://i1.aprbrother.com/ab-wifi.jpg-320.jpg">](http://i1.aprbrother.com/ab-wifi.jpg)
4.  Change gateway to connect another WebSocket
    Server
    [<img src="http://i1.aprbrother.com/app-websocket-client.jpg-320.jpg">](http://i1.aprbrother.com/app-websocket-client.jpg)
5.  Reboot gateway, the device will keep send data after it got
    websocket connection

## Work As HTTP or MQTT client

In this mode, AB BLE Gateway is a HTTP or MQTT client and connects to a
existing HTTP or MQTT Server.

  - Step 1 - 3 are same with "Work As WebSocket Client "
  - Change gateway to connect another HTTP
    Server
    [<img src="http://i1.aprbrother.com/app-http-client.jpg-320.jpg">](http://i1.aprbrother.com/app-http-client.jpg)
  - Or MQTT
    server
    [<img src="http://i1.aprbrother.com/app-mqtt-client.jpg-320.jpg">](http://i1.aprbrother.com/app-mqtt-client.jpg)
  - Reboot device
  - See datas at server side

## Useful Links

  - [Download app ABGateway](Download_app_ABGateway.md)
  - [SDK](https://github.com/AprilBrother/ab-ble-gateway-sdk)
  - [User Guide](AB_BLE_Gateway_User_Guide.md)
  - [Support Forum](http://bbs.aprbrother.com/c/wifi)

