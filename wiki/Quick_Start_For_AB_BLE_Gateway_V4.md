

[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)



## 使用

  - 准备好5V/2A的电源适配器一个，注意功率一定要足够。
  - 用网线连接网关到路由器，供电电源线请使用我们寄的那根黑色micro
    usb线，连接电源线到电源适配器，一定不要直接连接USB线到电脑上，那样供电会不够。如果网口的黄灯亮了，说明网络已经连接
  - 在电脑上安装好配置工具并打开
  - 点击application，你可以看到一些配置项

## How To Test

  - Change application settings for gateway and save
      - Application Type -\> MQTT Client
      - MQTT Host -\> `mqtt.bconimg.com`
      - MQTT Port -\> 1883
      - Publish Topic -\> your-topic
  - Download and install [data viewer
    software](http://7fvk57.com1.z0.glb.clouddn.com/ble-viewer-setup-v1.0.0.exe.zip)
  - Fill the form with the parameters in first steps
  - View the data from
gateway

<img src="http://7fvk57.com1.z0.glb.clouddn.com/ble-viewer.png" width="480">

