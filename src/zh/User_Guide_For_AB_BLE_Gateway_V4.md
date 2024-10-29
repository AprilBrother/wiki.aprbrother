[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

## Performance

* Scan duration = 1 second
* 以太网连接时，每秒最多上传210条广播数据
* WiFi连接时，每秒最多上传150条广播数据

## 数据格式

Gateway V4以[MessagePack](https://msgpack.org/)格式提交数据.  

### MessagePack

MessagePack是一个高效的二进制序列化格式. 它让你像JSON一样可以在各种语言之间交换数据。但是它比JSON更快、更小.  这种格式小巧快速，支持超过50种编程语言和环境。

### Keys

解包之后的数据是一个字典，包含如下键值:

  - v - firmware version
  - mid - message ID
  - time - 启动时长，以秒计算
  - ip - gateway的IP
  - mac - gateway的mac address
  - rssi - gateway的WiFi连接信号强度RSSI. 仅当使用WiFi连接时才会出现，从固件v1.5.0开始加入
  - iccid - 4G模块的ICCID. 仅当使用4G连接时才会出现，从固件v1.5.3开始加入
  - devices - 一个由BLE广播包组成的数组, 这些广播包都是gateway收集到的

devices数组中包含BLE广播的原始内容. 下面是一个数据帧的示例，参考"Data Format For Key Devices"

`00 12 3b 6a 1a 64 cf aa 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5`

| Bytes      | 说明                           | 示例 |
| ---------- | ------------------------ | ------------------ |
| byte 1     | advertising type, see the table below | 00 |
| byte 2 - 7 | mac address for BLE device            | `12 3b 6a 1a 64 cf` |
| byte 8     | RSSI, minus 256 for real value        | aa, 0xaa - 256 = -86 |
| byte 9 -   | Advertisement data                    | 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5 |

#### devices数组的一条数据的例子

示例数据

hex=`02C8FD1949A530CE0201061AFF4C000215EB6D469624BE4663B15230D46B0E9CC9000D002AC0`

| Data | Description |
| --- | --- |
| 02 | adv type |
| C8FD1949A530 | mac address |
|   CE | rssi |
|   0201061AFF4C000215EB6D469624BE4663B15230D46B0E9CC9000D002AC0 | raw advertising data |

### Advertising Type Code

| Code | Description                              |
| ---- | ---------------------------------------- |
| 0    | Connectable undirected advertisement     |
| 1    | Connectable directed advertisement       |
| 2    | Scannable undirected advertisement       |
| 3    | Non-Connectable undirected advertisement |
| 4    | Scan Response                            |

## Configuration options ##

### Application options ###

#### Advertising filter ####

1. Allow All Advertising Data: scan all data, default
2. iBeacon Only: scan iBeacon data only. Please search iBeacon protocol for more information
3. Eddystone UID Only: scan Eddystone UID only
4. Eddystone URL Only: scan Eddystone URL only
5. Sensor mode, supports some Xiaomi sensor: Experimental feature, scan only xiaomi sensors such as temperature/humidity sensor
1. Custom mode, supports custom format filter. see the description below
6. iBeacon And Eddystone TLM Plain: scan iBeacon And Eddystone TLM Plain data only
7. Eddystone UID And Eddystone TLM Plain: scan Eddystone UID And Eddystone TLM Plain only
8. Eddystone URL And Eddystone TLM Plain: scan Eddystone URL And Eddystone TLM Plain only

For more information about eddystone protocol, please check [the specification](https://github.com/google/eddystone/blob/master/protocol-specification.md)

##### Custom filter #####

The format of custom mode filter is `<start byte>-<end byte>=<advertising data in hex format>`. **Note the index for first byte is 0 not 1**.

Examples:

`5-6=ab1f`

The filter allow the data which the 5th byte is `0xab` and the 6th byte is 0x1f

It also supports the wildcard character `**` for firmware version greater than `v1.5.20`. e.g.

`0-8=020106**FF**00**BC`

#### Manufacture Filter ####

The general structure of advertising packets is described in BLE Advertising Data Basics. 
Manufacturer-specific data can be used to add any custom data into advertising packets in any format suitable for your application. For example, you could create a beacon that includes the reading of a temperature sensor in the advertising data.

See the image below which contains company ID 02FF for company Silicon Labs. You can input "Manufacture Filter" = 02FF to scan the advertising data only

![advdata](https://i1.aprbrother.com/advdataex1.png)

## 硬件

### LED指示灯状态

以太网接口有一个绿色指示灯和黄色指示灯

| 指示灯 |  说明 |
| ------ | ------------------------ | 
| 绿色   | 在以太网启动时开始闪烁 | 
| 黄色   | 在获得IP后常亮 | 

### PCB原理图以及布局

* [PCB原理图](https://github.com/AprilBrother/ab-hardware/tree/master/ab-ble-gateway-v4)
* Gateway V4的PCB布局. 这里采用了微处理器ESP32以及NRF52832.

![PCB Layout](https://i1.aprbrother.com/gw4-layout.png)

![PCB尺寸图](https://i1.aprbrother.com/gw4-dimension.png)

### 引脚

| 引脚 | 说明 |
| --- | --- |
| J3 | ESP32模块I2C端口 |
| P2 | ESP32模块的烧写引脚 |
| P3 | NRF52832模块的烧写引脚 |
| P4 | NRF52832模块的串口 |

#### J3 引脚

:::tabs

@tab PCB v5.4

* VCC
* GND
* GPIO16
* GPIO04

@tab PCB v5.3

* VCC
* GND
* GPIO07
* GPIO06

:::
