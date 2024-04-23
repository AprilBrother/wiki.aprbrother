[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

# WiF设置 #

**Note: 我们推荐使用网线连接网关和路由器，这样连接更稳定并且耗电更低.**

您可以按照以下步骤配置具有smartconfig功能的网关的WiFi：

## 准备工作 ##

* 一部安卓手机。
* 下载手机应用 [网关配置工具📱][app-link]。
* **确保您的手机连接的是2.4GHz的WiFi。不支持5G WiFi。**
* 使用电源适配器（5V / 2A）为网关供电。

## WiFi设置步骤 ##

* 在以太网口的左侧有一个小孔。使用针快速按下孔中的按钮三次。如果成功，孔附近的LED灯将持续闪烁。这意味着网关进入了`smartconfig`模式。
* 打开GWTool应用并选择“Add a gateway”。
* 授予定位权限，以便应用程序可以自动填写您手机连接的WiFi SSID。
* 填写当前WiFi SSID的密码。

<img src="https://i1.aprbrother.com/gwc3/conf-wifi.jpg" width="500">

* 点击 "Start" 按钮并等待几分钟。如果成功，应该会显示 "Found a gateway" 找到网关。
* 继续使用该工具配置网关。


## 故障排除 ##

* 确保WiFi是2.4G而不是5G。
* 仔细检查密码是否正确。
* 电源适配器必须是5V / 2A，以提供足够的电力供WiFi连接使用。
* 如果设置失败，请重复上述步骤。

[app-link]: <https://i1.aprbrother.com/apk/gw-config-tool-v1.1.2.apk>
