# AB modbus gateway #

AB modbus gateway is based on `ESP32 C3` chip. This Device has built-in WiFi + BLE to send data wireless to other device like a server or computer for post-processing or controlling or monitoring. RS485 have some standard protection on it. You can use this device in home automation too where you only have to provide WiFi in one device.

| ![dtu-1](https://i1.aprbrother.com/DTU-1.jpg-320.jpg) | ![dtu-2](https://i1.aprbrother.com/DTUC-2.jpg-320.jpg) |
|------|--------------|

## Features ##

* Directly program with `ESPHOME`. No need to write code but a configure YAML file instead
* Onboard 2 Programmable LEDs.
* Onboard Type-C USB for Programming.
* Two buttons. 
* DIN rail + wall mount Encloser.
* Compact Size (46.2mm x 29.6mm x 60mm)
* Low Power.

Note: The `RJ-45` connector is not designed for ethernet connection. It's used for wire RS485 pins.

## Power requirement ##

* Input voltage 12V DC.

## GPIO table ##

| GPIO | Description  |
|------|--------------|
| `GPIO 9` | Button 1, K1 for programming | 
| `GPIO 3` | Button 2 (K2) | 
| `GPIO 6` | Green LED | 
| `GPIO 7` | Yellow LED |
| `GPIO 4` | RS485 TX pin |
| `GPIO 5` | RS485 RX pin |

## Example firmware ##

* [Firmware based on ESPHOME. You can integrate to home assistant easier](https://github.com/volca/esphome-modbus)

## Download ##

* [Hardware files](https://github.com/AprilBrother/ab-hardware/tree/master/ab-modbus-gateway)
