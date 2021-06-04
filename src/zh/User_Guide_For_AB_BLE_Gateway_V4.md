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

PCB v5.4

* VCC
* GND
* GPIO16
* GPIO04

PCB v5.3

* VCC
* GND
* GPIO07
* GPIO06

## [Firmware ChangeLog](AB_BLE_Gateway_V4_Firmware_Changes.md)
