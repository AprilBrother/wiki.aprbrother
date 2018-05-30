[← AB BLE Gateway Main Page](AB_BLE_Gateway.md)



## 产品介绍

AB 蓝牙网关可以读取诸如iBeacon和Eddystone格式的蓝牙（BLE）广播数据，并将数据传输到服务器侧，同时它需要连接到Wi-Fi
AP用于网络传输。

## 配置成WebSocket服务器

默认情况下，AB蓝牙网关也可以作为无线基站（WiFi AP）使用。 在同一时间它只能支持几个WiFi连接。

  - A 为Gateway插上电源，设备上LED灯有4~5次/秒的频率闪烁；
  - B
    使用具有WIFI功能的PC电脑，并通过WIFI连接Gateway上的WIFI,WIFI名字是ab.gateway-xxxxx，密码：12345678；
  - C 打开浏览器并访问HTTP：/ / 192.168.4.1
  - D 修改Gateway内的所需连接WIFI的配置信息，确保Gateway可连接上工作时需要连接的WIFI网络。
  - E 点击页面顶部的菜单“应用程序”，选择Gateway的传输方 式，包括本地TCP服务器或因特网HTTP / MQTT /
    WebSocket服务器，如查看“连接类型”为“WebSocket”服务器，默认端口为8080；
  - F 配置完成后，重新启动网关，设备将获得相应网络连接后将保持发送数据。

## 配制成WebSocket客户端

在这种模式下，AB蓝牙网关是一个WebSocket客户端，通过其他WiFi
AP连接到现有的WebSocket服务器。

＃使用具有WIFI功能的PC电脑，并通过WIFI连接Gateway上的WIFI,WIFI名字是ab.gateway-xxxxx，密码：12345678；
＃打开浏览器并访问http://192.168.4.1
＃修改网关所需连接WIFI的配置信息，确保蓝牙网关可连接上工作时需要连接的WIFI网络。
[\<img src =“http：//7fvk57.com1.z0.glb。
clouddn.com/ab-wifi.jpg-320.jpg“\>](http://7fvk57.com1.z0.glb.clouddn.com/ab-wifi.jpg)
＃更改网关以连接另一个WebSocket服务器
[\<img src =“http：//7fvk57.com1.z0。
glb.clouddn.com/app-websocket-client.jpg-320.jpg“\>](http://7fvk57.com1.z0.glb.clouddn.com/app-websocket-client.jpg)
＃重新启动网关，设备在保持websocket连接后会保持发送数据

## 配置成 HTTP 或 MQTT 客户端

在此模式下，AB蓝牙网关是HTTP或MQTT客户端，可以连接到现有的HTTP或MQTT服务器。

  - 前面将蓝牙网关当作无线基站（WIFI AP）的方式和配置成WebSocket客户端的步骤一样
    "
  - 更改网关以连接另一个HTTP服务器
    [<img src="http://7fvk57.com1.z0.glb.clouddn.com/app-http-client.jpg-320.jpg">](http://7fvk57.com1.z0.glb.clouddn.com/app-http-client.jpg)
  - 或MQTT服务器
    [<img src="http://7fvk57.com1.z0.glb.clouddn.com/app-mqtt-client.jpg-320.jpg">](http://7fvk57.com1.z0.glb.clouddn.com/app-mqtt-client.jpg)
  - 重启设备
  - 请参阅服务器端的数据