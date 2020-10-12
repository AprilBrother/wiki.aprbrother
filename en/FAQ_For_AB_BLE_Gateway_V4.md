[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

### Q: How to update firmware for BLE Gateway?

A: You need install our configure tool to update firmware.

* Open configure tool
* Choose the device from the dropdown menu at left-top side
* Click "Advance" -> "Update", start updating firmware
* Wait until it's done

### Q: Does it support static IP

A: Yes. Gateway 4 use DHCP IP default. You can also use our configure
tool to set a static IP.

### Q: How to do factory reset?

A: There's a hole at the left side of the Ethernet port. Use a needle to press and hold the hiden button, re-power the device to finish factory reset

### Q: Does gateway support WiFi directly without ethernet?

A: Yes. It will use WiFi without ethernet connection.

### Q: Why the gateway can't connect to WiFi?

A: The device supports only 2.4GHz WiFi. It can't connect to 5GHz network. Please check your WiFi AP. Don't set same SSID name for 2.4G and 5G WiFi both. Because gateway can't connect to your WiFi.

### Q: Why the data fom BLE gateway is messed up?

A: Gateway V4 post data in [MessagePack](https://msgpack.org/) format. MessagePack is an efficient binary serialization format. You should decode it to get right data structure.

### Q: 如何配置网关支持阿里云微消息队列MQTT版?

A: 目前仅测试过阿里云微消息队列 MQTT 版的签名鉴权模式。配置方法

* 默认的Client ID Prefix是`XBG_`, 必须改成按照阿里云文档中说明改为GID开头.例如`GID_Test@@@`
* 如果希望使用固定的Client ID而不加上MAC地址后缀, 那么在Client ID prefix后面加上 `$$$`即可. 举例Client ID为`GID_Test@@@00001`,那么设置Client ID Prefix为 `GID_Test@@@00001$$$`, 此时网关连接MQTT Broker的Client ID是`GID_Test@00001`
* MQTT的Username和Password分别按照签名验证的方式计算获得.
