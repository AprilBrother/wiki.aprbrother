[← AB BLE Gateway Main
Page](AB_BLE_Gateway.md)



## 产品描述

AB蓝牙网关是一个将蓝牙4.0（BLE）桥接到WiFi网络的网关设备。它可以读取诸如iBeacon和Eddystone格式的蓝牙4.0（BLE）广播数据，并发送到本地或因特网的HTTP
/ MQTT / WebSocket服务器。

## WiFi

网关提供两种WIFI链接模式 - 接入其他WIFI传输数据模式和被电脑连接修改网关配置作为WIFI基站的模式。

  - 在无线基站模式下，它可以作为支持DHCP的简单AP。 它只能在同一时间支持少量WiFi连接。 此模式的主要目的是配置。
  - 在接入其他WIFI的模式下，蓝牙网关可持续加入家庭或办公室的AP。
    加入AP后，网关可以将您的BLE设备连接到云服务器的本地TCP服务器进行管理。

## BLE工作模式介绍

AB蓝牙网关的BLE模块处于扫描模式。 它扫描附近的BLE设备的广播数据，然后将这些数据打包通过WiFi上传到服务器端。

BLE数据包格式为十六进制格式，见下面的数据帧示例

`fe 27 00 12 3b 6a 1a 64 cf aa 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea
b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64
c5 0d 0a`

|          |                  |                                                                                           |
| -------- | ---------------- | ----------------------------------------------------------------------------------------- |
| 字节       | 描述               | 示例                                                                                        |
| 字节1      | 数据帧开始标志          | fe                                                                                        |
| 字节2      | 数据的长度            | 27                                                                                        |
| 字节 3     | 蓝牙4.0广播类型，见下表    | 00                                                                                        |
| 字节 4 - 9 | BLE设备的MAC地址      | `12 3b 6a 1a 64 cf`                                                                       |
| 字节 10    | RSSI, 减去256即为实际值 | aa                                                                                        |
| 字节 11 -  | 广播数据             | 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5 |
| 最后两个字节   | 数据帧结束标志          | 0d 0a, the ASCII code for `\r\n`                                                          |
|  |

广播类型代码

|    |                                          |
| -- | ---------------------------------------- |
| 编码 | 描述                                       |
| 0  | Connectable undirected advertisement     |
| 1  | Connectable directed advertisement       |
| 2  | Scannable undirected advertisement       |
| 3  | Non-Connectable undirected advertisement |
| 4  | Scan Response                            |
|  |

注意:

  - 从固件v1.1起，元数据被添加到BLE数据的第一行. 数据为json格式, 并以`\r\n\r\n`结尾. 示例元数据：

`{"v":"1.1","mid":129,"id":"175229","ip":"192.168.1.129"}\r\n\r\n`

## 电源

电源输入规格为直流 5V / 1A。 每个网关都配备有电源线。 电缆的一侧是USB-A，另一侧是3.5-1.35MM直流插头。

## 按键与LED指示灯

电源开关。 往左拨动打开电源，往右拨动关闭电源。

<img src="http://7fvk57.com1.z0.glb.clouddn.com/abgateway-cn.png">

找到下面照片中的孔，里面是一个配置按钮。 LED灯在按钮的左侧。

它可以用于将设备更改为智能配置模式，并通过手机无线配置WiFi或出厂设置（长按按钮\> 3秒钟）。

＃把针或铅笔插入那个孔中，然后按它（会有按下按钮的感觉）

1.  这时设备会断开当前WiFi，同时LED灯开始2次/秒的闪烁
2.  下载我们提供的iOS 客户端
    "[YuePixel](https://itunes.apple.com/app/yuepixels/id1107542359?mt=8)"
    进行网络配置
3.  配置完成后，LED灯将会周期性闪烁，闪烁频率为4~5次/秒，表示设备正常工作

## 使用网页配置

### 仪表板

请参阅“固件版本”，WiFi的MAC地址，本页的序列号

### WiFi

AB BLE网关在同一时间在STATION和AP模式下工作。

<img src="http://7fvk57.com1.z0.glb.clouddn.com/ab-wifi.jpg">

#### AP

AB BLE网关默认AP模式。 您可以看到AP的参数。

  - SSID：默认名称为<code> ab.gateway \</ code\>和序列号
  - 安全密钥：默认密钥为<code> 12345678 \</ code\>，可以更改为其他密钥

#### Station

  - 扫描WiFi：点击开始扫描AP附近
  - SSID：通过“扫描WiFi”在AP列表中选择SSID，或输入SSID手册
  - 安全密钥：为您的AP键入密钥。 留空以打开WiFi

## 应用场景

### 高级

  - [OTA upgrade firmware](ABGateway_OTA.md)
  - Restart device

## App ABGateway

to be continued