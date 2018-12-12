## Description

ESP8266 based soil moisture sensor Wi-Fi enabled. Also provide ambient
temperature and humidity sensor.

At the sensor's heart is an ESP8266 WiFi microcontroller clocked at 80
MHz and at 3.3V logic. This microcontroller contains a Tensilica chip
core as well as a full WiFi stack. You can program the microcontroller
using the Arduino IDE for an easy-to-run Internet of Things core. You
can use [ESP Flasher Rev4](ESP_Flasher_Rev4.md) that an upload
code at a blistering 115200 baud for fast development time. It also has
auto-reset so no noodling with pins and reset button pressings.

The sensor can upload sensor datas to remote server. We provided example
code for uploading to thingspeak.

<img src="https://i1.aprbrother.com/thingspeak.png-640.jpg">

Senor in soil

<img src="https://i1.aprbrother.com/IMG_5772.jpg-640.jpg">

The project is modifying of the [I2C Moisture
Sensor](https://github.com/Miceuz/i2c-moisture-sensor) project from
Miceuz. Thanks for his source code.

## Quick Start

The project need install Arduino core for ESP8266 WiFi chip first.

  - [Install and setup Arduino
    IDE](http://wiki.aprbrother.com/wiki/ESP_Soil_Moisture_Sensor_Using_Arduino_IDE)
  - Use ESP Flasher to connect the sensor and PC. How to wire ESP
    Flasher and sensor? ([For ESP Flasher Rev4](https://pbs.twimg.com/media/Cyetj8xVQAEM-Wq.jpg)) 
  - Choose board type "NodeMCU 1.0" and right com port
  - Uploading

Note:

  - Don't insert battery when you program the board.
  - For sensor v2.1, please remove the jumper for GPIO16 if you want to
    program the board.

## Hardware Rev 2.1

  - ESP-12F module x 1
  - Button x 1
  - Programming pinouts
  - Red led x 1
  - tmp112 temperature sensor (I2C) x 1
  - Soil moisture sensor x 1
  - AA Battery holder x 1
  - Pinouts compatible with [ESPea](ESPea.md)
  - A jumper for wire GPIO16 to RESET
  - Measures 35mm x 157mm

<img src="https://i1.aprbrother.com/soil-v2.1.jpg-640.jpg">

### Pinouts

| Pin    | Detail                                              |
|-----   | ---------                                           |
| D5 (GPIO14)  | Clock source for soil moisture sensor         |
| A0     | Output of soil moisture sensor                      |
| GPIO13 | LED                                                 |
| GPIO15 | SWITCH for measuring soil sensor or battery voltage |
| GPIO12 | Button S1                                           |
| GPIO5  | SCL for tmp112                                      |
| GPIO4  | SDA for tmp112                                      |

## Hardware Rev1

  - ESP-12F module x 1
  - Button x 1
  - Programming pinouts
  - Red led x 1
  - DHT11 temperature & humidity sensor x 1
  - Soil moisture sensor x 1
  - AA Battery holder x 1
  - Measures 35mm x 157mm

AA battery not included. Please add AA battery x 2.

<img src="https://i1.aprbrother.com/IMG_5773.jpg-640.jpg">

### Pinouts

| Pin    | Detail                                              |
|-----   | ---------                                           |
| D5 (GPIO14)  | Clock source for soil moisture sensor         |
| A0     | Output of soil moisture sensor        |
| GPIO12 | LED                                   |
| GPIO2  | Output of DHT11 sensor                |
| GPIO4  | Button S1                             |
|  |

## Sensors

Soil moisture sensor

  - Max value when wet: 860
  - Min value when dry: 640

## Documents And Links

  - [Using Arduino
    IDE](ESP_Soil_Moisture_Sensor_Using_Arduino_IDE.md)
  - [F.A.Q](ESP_Soil_Moisture_Sensor_FAQ.md)
  - [Source Code And Hardware
    Files](https://github.com/AprilBrother/esp-soil-moisture-sensor)
  - [Support Forum](http://bbs.aprbrother.com/c/wifi)
