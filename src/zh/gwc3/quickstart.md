[← Gateway c3 Main Page](../gateway_c3.md)

## 快速上手 ##

一步步介绍如何配置网关收集BLE广播并发送到远程服务器

## 准备工作 ##

- 准备好5V/2A的电源适配器一个，注意功率一定要足够。
- 供电电源线请使用我们原厂配送的USB线，连接电源线到电源适配器，一定不要直接连接USB线到电脑上，那样供电会不够。
- 准备好一部安卓手机
- 下载并安装[配置工具安卓版本configure tool](tech.md)

## 配置连接 ##

- **如何连接?**  - 在第一次使用时，网关c3需要[网关配置工具GWTool](tech.md)来连接WiFI。
- **必须要公网连接吗?** - 网关在公网或者局域网环境下均可以使用。

步骤

- 将`gateway c3`上电，等待几秒待其开机
- 快速按3下按键。如果成功LED灯会开始快速闪烁，这表明网关已经进入WiFi配置模式

![Button and led](https://i1.aprbrother.com/gwc3/gwc3-btn-led.jpg)

:::tabs

@tab 通过WiFi配置网关的联网方式

- 打开配置工具app，并点击"Add A GATEWAY"
- 同意app获取定位权限，这样配置工具才可以自动获取已经连接的WiFi SSID并填写
- 输入当前WiFi的密码

<img src="https://i1.aprbrother.com/gwc3/conf-wifi.jpg" width="500">

- 点击"start"按键并等待.如果配置成功会显示"Found a gateway"
- 此后用工具正常配置网关即可

@tab 通过USB数据线配置网关的联网方式

Note: **必须使用安卓手机数据线将网关连接到你的电脑，然后确认网关处于WiFi配置模式**

- 下载并安装[PC版网关配置工具](tech.md) 
- 打开配置工具并点击"More" -&gt; "Setup WiFi with cable" -&gt; "Connect gateway with cable"

<img src="https://i1.aprbrother.com/w/gw-wifi.png">

- 在页面中填写WiFi的SSID以及密码，并按下按键"Submit"
- 如果填写正确，网关将会成功连WiFi

:::

## 如何测试 ##

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
