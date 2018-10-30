[← Wireless iBeacon Receiver Main
Page](Wireless_iBeacon_Receiver.md)



## MQTT是什么

MQTT stands for MQ Telemetry Transport. It is a publish/subscribe,
extremely simple and lightweight messaging protocol, designed for
constrained devices and low-bandwidth, high-latency or unreliable
networks. The design principles are to minimise network bandwidth and
device resource requirements whilst also attempting to ensure
reliability and some degree of assurance of delivery. These principles
also turn out to make the protocol ideal of the emerging
“machine-to-machine” (M2M) or “Internet of Things” world of connected
devices, and for mobile applications where bandwidth and battery power
are at a premium.

## 如何测试

### 安装 MQTT Broker

  - [下载emqttd安装](https://github.com/emqtt/emqttd/wiki/Installation)

### 测试MQTT Broker

我们使用免费软件 [mosquitto](http://mosquitto.org/)进行测试

  - 下载并安装 [moquitto for
    windows](http://mosquitto.org/files/binary/win32/mosquitto-1.3.5-install-win32.exe)
  - 打开windows的命令行窗口。并更换当前目录到mosquitto的安装目录

<!-- end list -->

    cd c:\program files\mosquitto

  - 使用mosquitto的命令行工具可查看测试的上传数据

<!-- end list -->

    mosquitto_sub -h mqtt.bconimg.com -t "/beacons"

  - 使用命令行检查MQTT broker是否工作正常. 上一行命令执行后，顺利的话你会看到"Hello World"字样.

<!-- end list -->

    mosquitto_pub -h mqtt.bconimg.com -t "/beacons" -m "Hello World"

## 如何实现我自己的MQTT subscriber?

  - [c](https://www.eclipse.org/paho/clients/c/)
  - [java](https://www.eclipse.org/paho/clients/java/)
  - [c\#](https://eclipse.org/paho/clients/dotnet/)
  - [javascript](https://www.eclipse.org/paho/clients/js/)
  - [Embedded MQTT C/C++ Client
    Libraries](https://www.eclipse.org/paho/clients/c/embedded/)
