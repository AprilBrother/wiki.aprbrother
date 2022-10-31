## Configure parameters with MQTT


AB BLE Gateway V4 supports update parameters with MQTT from firmware `v1.4.14`. You can update parameters for one gateway or multiple gateways.

## How to config parameters with MQTT

* Download and install config tool `v1.3.4+`
* BLE gateway must work as `MQTT Client`
* Enable option `Config by MQTT` and set the `Config Topic`

Here're the required topics

* Config Topic 
* Topic Prefix For Device Inbox
* Device Outbox Topic

### Config Topic

BLE gateway will subscribe the `Config Topic` when it connected MQTT broker. It uses to get parameters and change parameters remotely. You can use `Config Topic` for batch configure parameters for gateways.

An example for configure message (JSON format)

```
{
    "event": "update",
    "version": 1,
    "config": {
        "app": {
            "mqtt-host": "mqtt.bconimg.com",
            "mqtt-port": 1883,
            "mqtt-topic": "new/topic"
        },
        "network": {
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

Query application parameters

```
{
    "event": "query/app",
    "version": 1
}
```

Query network parameters

```
{
    "event": "query/net",
    "version": 1
}
```

Restart device

```
{
    "event": "restart",
    "version": 1
}
```

Query device information (Added from firmware `v1.5.11`)

```
{
    "event": "query/dev",
    "version": 1
}
```

Request OTA update(Added from firmware `v1.5.12`)

```
{
    "event": "ota",
    "version": 1
}
```

Note：

* version must equal 1
* event must be `update` for change parameters

### Topic Prefix For Device Inbox

BLE gateway will subscribe the `Topic Prefix For Device Inbox` + MAC address when it connected MQTT broker. It uses to get parameters and change parameters for one gateway.

e.g.

* Let's say the prefix is `device/config/`
* The MAC address for gateway is `AB123456FDEC`
* BLE gateway will subscribe topic = `device/config/AB123456FDEC` when it connected MQTT broker

See the example message in section `Config Topic`

### Device Outbox Topic

BLE gateway will publish response data to `Device Outbox Topic` if it get query message

An example response message for event `query/app`

```
{
    "event": "app",
    "mac": "AB123456FDEC",
    "data": {
        ......
    }
}
```

Example response message for event `query/net`

```
{
    "event": "net",
    "mac": "AB123456FDEC",
    "data": {
        ......
    }
}
```

## Supported parameters

### app parameters

| Parameter           |  Type        | Description         |
| -------------- | ------------ | ------------ |
| conn-type      |       uint8  | Connection type, 1=WebSocket, 2=HTTP, 3=MQTT |
| req-int        |       uint16 | Request interval，range is 1 ~ 180 second
| min-rssi       |       int8   | RSSI filter，default value is `-127`
| adv-filter     |       uint8  | Advertising filter, 0=no filter, 1=iBeacon only, 2=Eddystone UID only, 3=Eddystone URL only, 11=iBeacon+Eddystone TLM, 12=Eddystone UID+Eddystone TLM, 13=Eddystone URL+Eddystone TLM
| dup-filter     |       uint8  | Duplication filter, default 0
| scan-act       |       uint8  | Active scan, default 0
| mqtt-port |            uint32 | MQTT Broker's port
| http-port |            uint32 | HTTP server's port
| ws-port |              uint32 | WebSocket Server's port
| ota-url |              string | OTA URL 
| http-host |            string | HTTP server's hostname
| mqtt-host |            string | MQTT Broker's hostname
| ws-host |              string | WebSocket server's hostname
| https |                uint8  | Enable HTTPS，default 0 
| mqtts |                uint8  | Enable MQTTS，default 0
| wss |                  uint8  | Enable WSS，defautl 0  
| mqtt-topic |           string | MQTT Topic 
| mqtt-username |        string | MQTT username 
| mqtt-password |        string | MQTT password 
| mqtt-id-prefix |       string | MQTT Client ID prefix
| cfg-topic |            string | MQTT config topic
| one-cfg-topic |            string | Topic Prefix For Device Inbox
| mqtt-config |          uint8  | Enalbe MQTT config, default 0
| http-url |             string | HTTP server URI 
| filter-uuid |          string | iBeacon UUID filter, one uuid one line.
| req-format |           uint8  | Request format，0=msgpack, 1=json
| ntp-enabled |          uint8  | enable ntp client, default 0 
| ntp1 |                 string | First ntp server
| ntp2 |                 string | Second ntp server

### Network parameters

| Parameter      |  type        | Descripton         |
| -------------- | ------------ | ------------ |
| wifi-type |            uint8  | WiFi type, 0=WAP, 1=WPA2 Enterprise   
| ssid |                 string | WiFi SSID
| passcode |             string | WiFi password
| eap-identity |         string | EAP identify  
| eap-username |         string | EAP username  
| eap-passcode |         string | EAP passcode  
| eth-dhcp |             uint8  | Enable DHCP，default 1   
| eth-ip |               uint32 | Static IP address, enable when eth-dhcp=0
| eth-gateway |          uint32 | Network Gateway IP
| eth-netmask |          uint32 | Netmask 
| dns-main |             uint32 | Main DNS，enable when eth-dhcp=0
| dns-backup |           uint32 | Backup DNS 
| dns-fallback |         uint32 | Fallback DNS  

### mac address filter

Use key `filter-mac` to configure mac address filter. It's an array. Per item is a mac address.
