# AB zigbee gateway #

It's a LAN ZigBee 3.x Coordinator based on CC2652P and ESP32. It can be used as ZigBee Coordinator/Router in various Smart Home installations including the [Zigbee2MQTT](https://www.zigbee2mqtt.io/), Home Assistant ([ZHA][zha]).

![zigbee gateway](https://i1.aprbrother.com/zigbee-gw.jpg-320.jpg)

## Features ##

* Based on Zigbee modules CC2652P
* Power Input: USB Type-C 5V/2000mA or Standard POE 48V.
* WORKING MODE: LAN Coordinator
* Two Buttons
* 2 LED for indication Custom firmware
* Communicates via LAN network or WiFi with Zigbee2MQTT and ZHA
* Easy programming with [flash tool webpage](https://aprilbrother.github.io/esphome-zigbee-gateway/)
* Pre-flashed ESP32 and CC2562P

**Note: Don't power with USB and POE in same time**

## Example firmware ##

* ESP32 is pre-flashed [firmware based on ESPHOME][fw-zigbee]
* CC2652P is pre-flashed [CC1352P2_CC2652P_launchpad_coordinator_20220219](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin)

## Download ##

* [Hardware files](https://github.com/AprilBrother/ab-hardware/tree/master/ab-zigbee-gateway)

[fw-zigbee]: https://github.com/AprilBrother/esphome-zigbee-gateway
[zha]: https://www.home-assistant.io/integrations/zha/
