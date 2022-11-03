# AB zigbee gateway #

It's a LAN ZigBee 3.x Coordinator based on CC2652P and ESP32. It can be used as ZigBee Coordinator/Router in various Smart Home installations including the [Zigbee2MQTT](https://www.zigbee2mqtt.io/), Home Assistant ([ZHA])(https://www.home-assistant.io/integrations/zha/).

![zigbee gateway](https://i1.aprbrother.com/zigbee-gw.jpg-320.jpg)

## Features ##

* Based on Zigbee modules CC2652P
* WORKING MODE: LAN Coordinator
* Two Buttons
* 2 LED for indication Custom firmware
* Communicates via LAN network or WiFi with Zigbee2MQTT and ZHA
* Easy programming with [flash tool webpage](https://aprilbrother.github.io/esphome-zigbee-gateway/)
* Pre-flashed [ESP32][fw-zigbee] and [CC2562P](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin)

## Example firmware ##

* [Firmware based on ESPHOME][fw-zigbee]

## Download ##

* [Hardware files](https://github.com/AprilBrother/ab-hardware/tree/master/ab-zigbee-gateway)

[fw-zigbee]: https://github.com/AprilBrother/esphome-zigbee-gateway
