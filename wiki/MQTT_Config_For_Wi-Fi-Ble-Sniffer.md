[← Wireless iBeacon Receiver Main
Page](/Wireless_iBeacon_Receiver "wikilink")





## What's MQTT

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

## How To Start

### Install MQTT Broker

  - [Download emqttd and
    install](https://github.com/emqtt/emqttd/wiki/Installation)

### Testing with brokers

We use the free software [mosquitto](http://mosquitto.org/) to testing.
A GUI MQTT client --
[MQTTBox](http://workswithweb.com/html/mqttbox/downloads.html)

  - Download and install [mosquitto for
    windows](http://mosquitto.org/files/binary/win32/mosquitto-1.3.5-install-win32.exe)
  - Open a command line window. Change the directory to the mosquitto
    install directory.
  - Use the command line to check the data uploaded

`mosquitto_sub -h mqtt.bconimg.com -t "/beacons"`

  - Use the command line to check if MQTT broker works well. You will
    see "Hello World" at previous command line window if broker works.

`mosquitto_pub -h mqtt.bconimg.com -t "/beacons" -m "Hello World"`

## How to write my own MQTT subscriber?

Please check [How to write my own MQTT
client](/How_to_write_my_own_MQTT_client "wikilink")

