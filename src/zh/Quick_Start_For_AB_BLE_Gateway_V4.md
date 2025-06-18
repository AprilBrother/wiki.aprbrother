[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

# 快速上手 #

一步步介绍如何配置网关收集BLE广播并发送到远程服务器

## 准备工作 ##

- 准备好5V/2A的电源适配器一个，注意功率一定要足够。
- 用网线连接网关到路由器，请注意不要将这根网线直接连在电脑上，否则网关无法获得IP进行下一步配置
- 供电电源线请使用我们原厂配送的Micro USB线，连接电源线到电源适配器，一定不要直接连接USB线到电脑上，那样供电会不够。如果网口的黄灯亮了，说明网络已经连接
- 在电脑上安装好[配置工具](Software_AB_BLE_Gateway_V4.md)并打开
- 点击Application，你可以看到配置项

## 配置连接 ##

可通过以太网或者WiFi配置网关的联网方式

- **必须要公网连接吗?** - AB网关在公网或者局域网环境下均可以使用。

### 通过以太网连接 ###

我们推荐通过以太网连接网关到网络

- 使用网线连接AB网关到路由器
- 打开配置工具
- 点击`Scan`按键，此时开始在局域网中搜寻网关

![config scan](https://i1.aprbrother.com/w/conf-scan.png)

## 如何测试

配置BLE广播数据收集与转发

:::tabs

@tab 转发数据到MQTT broker

我们提供了测试MQTT broker `mqtt.bconimg.com`. 但是请不要将它用于生产环境

- 修改网关的Application设置如下
  - Application Type: `MQTT Client`
  - MQTT Host: `mqtt.bconimg.com`
  - MQTT Port: 1883
  - Publish Topic: `your-topic`
- 点击`Save`保存参数
- 下载并安装测试工具[data viewer software](https://i1.aprbrother.com/ble-viewer-setup-1.0.2.zip)
- 在测试工具中填写第一步中提到的参数
- 在测试工具中查看来自于网关的数据

<img src="https://i1.aprbrother.com/ble-viewer.png" width="480">

@tab 转发数据到HTTP服务器

为了快速验证数据是否正确地在目标计算机的网络上接收到，可以使用独立运行的`gw-http-box`工具测试，它运行在端口`8000`上监听 HTTP POST 请求，具体操作如下：

* 安装 Node.js
* Git和终端是必备的
* 在终端中运行如下命令
```
git clone https://gitee.com/aprbrother/gw-http-box.git
npm install
npm start
```
- 修改网关的Application设置如下
  - Application Type: `HTTP Client`
  - HTTP Host: 你的电脑IP, 例如`192.168.1.123`
  - HTTP Port: 8000
  - URI: `/`
- 点击`Save`保存参数

如果网关配置正确，并且至少有一个在范围内广告的BLE设备，网关数据应该会在控制台中显示出来。

:::

