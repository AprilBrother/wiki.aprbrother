## Configure parameters with MQTT

AB BLE Gateway V4从固件v1.4.14开始支持通过MQTT方式更新网关的配置，支持更新单个网关或同时更新多个网关的参数，从而实现更便捷的部署以及维护网关。

## 如何实现MQTT配置参数

必须满足以下条件

* 下载配置工具v1.3.4以上
* 网关必须配置以MQTT Client方式工作
* 开启`Config by MQTT`选项, 并配置了对应的Topic

必须配置以下三个相关的Topic

* Config Topic 
* Topic Prefix For Device Inbox
* Device Outbox Topic

### Config Topic

如果配置了Config topic, 网关在联网后会subscribe这个topic，用于接收配置参数并实现远程修改配置. Config Topic一般用于批量配置网关的参数

配置信息示例(JSON格式)

```
{
    "event": "update",
    "version": 1,
    "config": {
        "app": {
            "mqtt-host": "mqtt.bconimg.com",
            "mqtt-port": 1883,
            "mqtt-topic": "new/topic",
        },
        "net": {
            "ssid": "hello",
            "passcode": "12345678"
        },
        "filter-mac": [
            "123B00000000",
            "CC0000000000"
        ]
    }
}
```

查询app配置示例

```
{
    "event": "query/app",
    "version": 1
}
```

查询网络配置示例

```
{
    "event": "query/net",
    "version": 1
}
```

重启设备示例

```
{
    "event": "restart",
    "version": 1
}
```

注意：

* version必须等于1
* event必须是update

### Topic Prefix For Device Inbox

如果配置了`Topic Prefix For Device Inbox`, 网关会订阅带有MAC地址后缀的Topic，一般用于配置指定网关的参数

* 假设配置了前缀为`device/config/`
* 假定网关的MAC地址为`AB123456FDEC`
* 网关在联网后会订阅的实际topic为`device/config/AB123456FDEC`

配置信息格式见`Config Topic`

### Device Outbox Topic

如果配置了`Device Outbox Topic`, 网关如果收到查询请求，会将反馈信息publish到这个topic

事件`query/app`的反馈信息示例

```
{
    "event": "app",
    "mac": "AB123456FDEC",
    "data": {
        ......
    }
}
```

事件`query/net`的反馈信息示例

```
{
    "event": "net",
    "mac": "AB123456FDEC",
    "data": {
        ......
    }
}
```

## 支持的配置参数

### app参数

| 参数           |  类型        | 说明         |
| -------------- | ------------ | ------------ |
| conn-type      |       uint8  | 连接类型, 1=WebSocket, 2=HTTP, 3=MQTT |
| req-int        |       uint16 | 上传间隔，单位为秒，范围是1 ~ 180秒
| min-rssi       |       int8   | RSSI过滤值，默认为-127
| adv-filter     |       uint8  | 广播过滤选项, 0=不过滤, 1=iBeacon only, 2=Eddystone UID only, 3=Eddystone URL only, 11=iBeacon+Eddystone TLM, 12=Eddystone UID+Eddystone TLM, 13=Eddystone URL+Eddystone TLM
| dup-filter     |       uint8  | 是否开启排重过滤器, 默认为0
| scan-act       |       uint8  | 是否开启主动扫描，默认为0 
| mqtt-port |            uint32 | MQTT Broker的端口
| http-port |            uint32 | HTTP server的端口 
| ws-port |              uint32 | WebSocket Server的端口   
| ota-url |              string | OTA更新的URL 
| http-host |            string | HTTP server的主机名 
| mqtt-host |            string | MQTT Broker的主机名
| ws-host |              string | WebSocket server的主机名 
| https |                uint8  | 是否开启HTTPS，默认为0 
| mqtts |                uint8  | 是否开启MQTTS，默认为0
| wss |                  uint8  | 是否开启WSS，默认为0  
| mqtt-topic |           string | MQTT Topic 
| mqtt-username |        string | MQTT用户名 
| mqtt-password |        string | MQTT密码 
| mqtt-id-prefix |       string | MQTT的Client ID前缀 
| cfg-topic |            string | MQTT配置功能的topic
| one-cfg-topic |            string | MQTT配置单个网关的topic前缀
| mqtt-config |          uint8  | 是否开启MQTT的配置参数功能，默认为0
| http-url |             string | HTTP server的URL 
| filter-uuid |          string | 如果开启了iBeacon的广播过滤选项，可以通过iBeacon UUID过滤，每行一个
| req-format |           uint8  | 请求格式，0=msgpack, 1=json
| ntp-enabled |          uint8  | 是否启用NTP时间服务器，默认为0 
| ntp1 |                 string | 首选ntp服务器 
| ntp2 |                 string | 第二ntp服务器

### 网络参数

| 参数           |  类型        | 说明         |
| -------------- | ------------ | ------------ |
| wifi-type |            uint8  | WiFi类型, 0=WAP, 1=WPA2 Enterprise   
| ssid |                 string | WiFi的SSID
| passcode |             string | WiFi的密码  
| eap-identity |         string | EAP的identify  
| eap-username |         string | EAP的username  
| eap-passcode |         string | EAP的passcode  
| eth-dhcp |             uint8  | 是否启用以太网络的DHCP，默认为1   
| eth-ip |               uint32 | 静态IP地址，当eth-dhcp=0的时候生效  
| eth-gateway |          uint32 | 静态IP时的网关IP  
| eth-netmask |          uint32 | 静态IP时的子网掩码  
| dns-main |             uint32 | 主DNS，仅当eth-dhcp=0时生效  
| dns-backup |           uint32 | 备用DNS  
| dns-fallback |         uint32 | 次DNS  

### mac address filter

mac address filter在配置示例中使用了filter-mac这个key，它是一个数组类型。其中每一项都是一个mac address。
