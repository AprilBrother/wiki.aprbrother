# AB modbus gateway #

AB modbus网关基于`ESP32 C3`芯片组方案. 该设备内置了WiFi和BLE可将数据发送到其它设备如远程服务器或电脑，用于远程控制或监控数据。RS485有标准协议保护。因此也可以在仅有WiFi连接的家庭自动化场景中使用该设备。

| ![dtu-1](https://i1.aprbrother.com/DTU-1.jpg-320.jpg) | ![dtu-2](https://i1.aprbrother.com/DTUC-2.jpg-320.jpg) |
|------|--------------|

## 产品特点 ##

* 可以直接使用`ESPHOME`编程. 无需编写代码，仅需要配置YAML文件
* 板载两颗可编程LED灯
* Onboard Type-C USB for Programming.
* 两个功能按键
* DIN导轨和壁挂式外壳支持
* 紧凑的体积(46.2mm x 29.6mm x 60mm)
* 低功耗

Note: The `RJ-45` connector is not designed for ethernet connection. It's used for wire RS485 pins.

## 供电需求 ##

* 输入电压直流12V

## GPIO table ##

| GPIO     | Description               |
|----------|---------------------------|
| `GPIO 9` | 按键1, K1 for programming |
| `GPIO 3` | 按键2 (K2)                |
| `GPIO 6` | 绿色LED                   |
| `GPIO 7` | 黄色LED                   |
| `GPIO 4` | RS485 TX引脚              |
| `GPIO 5` | RS485 RX引脚              |

## 示例代码 ##

* [基于ESPHome的固件，方便集成到Home assistant](https://github.com/volca/esphome-modbus)

## 下载 ##

* [Hardware files](https://github.com/AprilBrother/ab-hardware/tree/master/ab-modbus-gateway)

