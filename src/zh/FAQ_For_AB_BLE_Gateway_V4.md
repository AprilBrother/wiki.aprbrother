[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

## FAQ for AB BLE Gateway V4

### Q: 如何升级网关的固件? ###

A: 你需要安装我们的配置工具来升级固件.

* 打开配置工具
* 从左上角的下拉菜单选择要升级的设备
* 点击 "Advance" -> "Update", 开始升级固件
* 等待直到升级完成

### Q: 网关是否支持静态IP? ###

A: 是. Gateway 4默认使用DHCP分配的IP. 你仍然可以通过配置工具为它设置一个静态IP.

### Q: 如何重置网关? ###

A: 网口左边有一个小孔，先给网关上电，用小针捅进去按住不动大概10秒以上，这样可以完成重置

### Q: 网关是不是可以直接连接WiFi, 不用网线 ###

A: 可以。如果没有可用的以太网连接，那么它将使用WiFi ###

### Q: 为什么WiFi无法连接? ###

A: 设备只支持2.4G无线网络，请检查路由器是不是5G网络。此外2.4G和5G的SSID不能是相同的，因为这个情况下设备很难连接WiFi网络。

### Q: 为什么网关发送的数据都是乱码? ###

A: 网关V4以[MessagePack](https://msgpack.org/)格式提交数据.  MessagePack是一个高效的二进制序列化格式. 你需要decode之后才能获取到正确的数据。

### Q: How does it work in LAN network? ###

A: BLE Gateway 4 can work in LAN network well. It pings the IP of LAN network's gateway and check the network connection periodly. It can also use the IP as DNS server for resolve domain.

### Q: 如何配置网关支持阿里云微消息队列MQTT版? ###

A: 目前仅测试过阿里云微消息队列 MQTT 版的签名鉴权模式。配置方法

* 默认的Client ID Prefix是`XBG_`, 必须改成按照阿里云文档中说明改为GID开头.例如`GID_Test@@@`
* 如果希望使用固定的Client ID而不加上MAC地址后缀, 那么在Client ID prefix后面加上 `$$$`即可. 举例Client ID为`GID_Test@@@00001`,那么设置Client ID Prefix为 `GID_Test@@@00001$$$`, 此时网关连接MQTT Broker的Client ID是`GID_Test@00001`
* MQTT的Username和Password分别按照签名验证的方式计算获得.
