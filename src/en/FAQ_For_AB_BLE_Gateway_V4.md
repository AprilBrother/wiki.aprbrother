
[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

## FAQ for AB BLE Gateway V4

### Q: How to integrate gateway with home assistant? ###

* See [the component ab_gateway](https://github.com/AprilBrother/component-ab-gateway). You can put the component to the `custom_components` directory and enable it in `configuration.yaml`. 
* The component subscribe MQTT data from AB BLE gateway and send to the bluetooth component of Home assistant. The default prefix is `ab_gateway and component subscribe the topic ab_gateway/+`
* BLE gateway works like an external BLE scanner for HA

### Q: How to update firmware for BLE Gateway? ###

A: You need install our configure tool to update firmware.

* Open configure tool
* Choose the device from the dropdown menu at left-top side
* Click "Advance" -> "Update", start updating firmware
* Wait until it's done

### Q: Does it support static IP ###

A: Yes. Gateway 4 use DHCP IP default. You can also use our configure
tool to set a static IP.

### Q: How to do factory reset? ###

A: There's a hole at the left side of the Ethernet port. Power on the device first, use a needle to press and hold the hiden button 10 seconds

### Q: Does gateway support WiFi directly without ethernet? ###

A: Yes. It will use WiFi without ethernet connection.

### Q: Why the gateway can't connect to WiFi? ###

A: The device supports only 2.4GHz WiFi. It can't connect to 5GHz network. Please check your WiFi AP. Don't set same SSID name for 2.4G and 5G WiFi both. Because gateway can't connect to your WiFi.

### Q: Why the data fom BLE gateway is messed up? ###

A: Gateway V4 post data in [MessagePack](https://msgpack.org/) format. MessagePack is an efficient binary serialization format. You should decode it to get right data structure.

### Q: How does it work in LAN network? ###

A: BLE Gateway 4 can work in LAN network well. It pings the IP of LAN network's gateway and check the network connection periodly. It can also use the IP as DNS server for resolve domain.

### Q: How to configure gateway to work with Azure IoT Hub? ###

A: We recommend update the firmware to `v1.4.13+`. It's much stable for save long length certificate from Azure IoT Hub. Here's an example for using X.509 self-signed certificates 

* Update firmware to latest with our config tool
* Open config tool and configure parameters
  * MQTT Host: `{IOT-HUB-NAME}.azure-devices.net`. The string `{IOT-HUB-NAME}` should be change to your real server name
  * MQTT wort:`8883`
  * `Client ID Prefix`: `{DEVICE-ID}$$$`. Azure IoT force to use the device ID as MQTT's client ID. The suffix `$$$` tell BLE gateway don't append MAC address after the prefix. e.g. BLE gateway will use client ID `gtw123` if you input `gtw123$$$` for the `Client ID Prefix`
  * MQTT topic: `devices/{DEVICE-ID}/messages/events`
  * MQTT username: `devices/{DEVICE-ID}/messages/events`
  * MQTT password: `{SAS-TOKEN-OF-THE-DEVICE}`
  * Enable MQTTS
  * Save all paramters
* Configure certificates with config tool
  * Generate self-signed certificates for devices with command `openssl`
  * Follow Azure's document to generate fingerprint for certificates
  * `Client Certificate`: the content of cert file
  * `Client key`: the content of private key file
* Now the gateway should work with Azure IoT Hub
  
### Q: How to configure gateway to work with AWS IoT MQTTS? ###

A: We recommend update the firmware to `v1.4.13+`. It's much stable for save long length certificate from AWS IoT.

* Update firmware to latest with our config tool
* Follow the document to [create an AWS IoT certficate](https://docs.aws.amazon.com/iot/latest/developerguide/device-certs-create.html)
* Open config tool and configure parameters
  * Fill the MQTT host and port `8883` for AWS IoT MQTTS server
  * Enable the MQTTS option. Save all parameters first
* Configure certificates with config tool
  * Click "Setup Certficate"
  * Download AmazonRootCA1.pem from AWS IoT (see the previous document link).  Fill the content to the input field `Server Certificate` and save
  * Save device certificate to field `Client Certificate`. The filename is usually `xxxxxxx-certificate.pem.crt`
  * Save private key to field `Client Key`. The filename is usually `xxxxxxx-private.pem.key`
* Now the gateway should work with AWS IoT MQTTS server

### Q: 如何配置网关支持阿里云微消息队列MQTT版? ###

A: 目前仅测试过阿里云微消息队列 MQTT 版的签名鉴权模式。配置方法

* 默认的Client ID Prefix是`XBG_`, 必须改成按照阿里云文档中说明改为GID开头.例如`GID_Test@@@`
* 如果希望使用固定的Client ID而不加上MAC地址后缀, 那么在Client ID prefix后面加上 `$$$`即可. 举例Client ID为`GID_Test@@@00001`,那么设置Client ID Prefix为 `GID_Test@@@00001$$$`, 此时网关连接MQTT Broker的实际Client ID是`GID_Test@00001`
* MQTT的Username和Password分别按照签名验证的方式计算获得.
