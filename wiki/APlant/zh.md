<languages/>

## 简介

基于德国蓝牙芯片DA14580的土壤湿度传感器。同时也提供了环境温度传感器功能。无需建立蓝牙连接，通过iBeacon协议广播传感器数据

<img src="https://dn-abcdn.qbox.me/wp-content/uploads/2016/06/plant_1-600x600.jpg">

安装应用AprilBeacon来配置参数

[<http://www.ti.com/lsds/media/images/Apple_App_Store_Badge.png>](https://itunes.apple.com/app/id847517010)
[<http://www.ti.com/lsds/media/images/Google_Play_Badge.png>](https://play.google.com/store/apps/details?id=com.aprilbrother.ab_ibeacon)

这个项目基于 [Miceuz's I2C Moisture Sensor
project](https://github.com/Miceuz/i2c-moisture-sensor). Thanks for
Miceuz.

## 特点

  - ARM Cortex -M0 32位处理器
  - 支持 Bluetooth Smart 4.0
  - 1 X CR2032电池供电
  - 超长电池寿命: 缺省设置可工作
1.5年
  - iPhone/Android应用配置工具
  - 一个用于恢复出厂设置的按键
  - 高精度，低功耗环境温度传感器

## 规格说明

|                                   |                                                  |
| --------------------------------- | ------------------------------------------------ |
| Name                              | Parameters                                       |
| 芯片                                | Dialog DA14580                                   |
| 尺寸                                | 160mm\*29mm\*20mm                                |
| Protocol standard                 | Bluetooth® 4.0 Through the iBeacon certification |
| 手机系统要求                            | iOS7.0 or above/ Android 4.3 or above            |
| 安全性                               | 支持密码验证配置参数                                       |
| TX Power                          | 0dBm                                             |
| 发射距离                              | Up to 35m                                        |
| 广播频率 (Broadcasting time interval) | 可调整 (100~1285ms), 默认 1285ms                      |
| 工作电压                              | 3.0V                                             |
| 电池                                | CR2032 x 1                                       |
|  |

## 默认设置

  - 设备名称: aplant_xxxx (mac地址后2位)
  - Proximity UUID: B5B182C7-EAB1-4988-AA99-B5C1517008D9
  - Major: 可配置, 默认mac地址后2位
  - Measured power: -59 (Numeric only)

## 快速上手

去掉电池塑料隔离片，传感器即开始工作。LED指示灯将在上电后闪烁3次

### 如何采用AprilBeacon应用来配置参数

该传感器兼容应用AprilBeacon. 你可以用这个应用配置UUID, major,
广播频率等参数。但是你需要在名称过滤器中添加"aplant"以支持传感器

  - 打开应用AprilBeacon
  - 选择"设置"
  - 点击"名称过滤器"并添加一个名称前缀"aplant"
  - 选择“蓝牙”并重新加载列表，你会找到一个设备名为"aplant_xxxx"

## Layouts

    A. CR2032电池扣
    B. 用于恢复出厂设置的按键
    C. 环境温度传感器
    D. LED

<img src="http://7fvk57.com1.z0.glb.clouddn.com/aplant_layout_1.jpg-1024.jpg">

<img src="http://7fvk57.com1.z0.glb.clouddn.com/soil-pcb.png" width="1024">

## 数据格式

APlant以iBeacon协议广播传感器数据。假设你采用AprilBeacon应用检测到的minor值 = 11548.

十进制 11548 = 十六进制 0x2D1C

  - 低位的温度数据 = 0x1C = 28℃
  - 高位的土壤湿度数据 = 0x2D = 45, 这个值越大，表示土壤湿度越大