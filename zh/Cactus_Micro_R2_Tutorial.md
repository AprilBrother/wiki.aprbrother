[← Cactus Micro R2 Main Page](Cactus_Micro_Rev2.md)

## Hardware

  - [How to made Cactus Micro R2 as ESP8266
    programmer](How_to_made_Cactus_Micro_R2_as_ESP8266_programmer.md)

## Programming

### For eps8266 AT firmware

  - [httpPost](https://github.com/AprilBrother/cactus-micro-r2/tree/master/libraries/CactusMicro/examples/httpPost)
    A simple demo for http
    post.
  - [hardwareSerialMonitor](https://github.com/AprilBrother/cactus-micro-r2/tree/master/libraries/CactusMicro/examples/hardwareSerialMonitor)
    this demo is same with serialMonitor. It's based HardwareSerial
    Serial1.
  - [searchBaudRate](https://github.com/AprilBrother/cactus-micro-r2/tree/master/libraries/CactusMicro/examples/searchBaudRate)
    this comes handy if you forgot the correct baud rate of your
    ESP8266. It loops through the common baud rates, sends an empty AT
    command, the detects the correct baud rate by checking the result.
    Thanks ray for the sketch.

### For espduino library from Tuan PM

The espduino library works perfectly with Cactus Micro Rev2. You should
upload [the espduino firmware](https://github.com/AprilBrother/espduino)
to the esp8266 module.

Please follow the wiki [How to made Cactus Micro R2 as ESP8266
programmer](How_to_made_Cactus_Micro_R2_as_ESP8266_programmer.md).

  - [The following example](https://www.iotlink.net/About) in C uses the
    REST interface with a secure SSL configuration to exchange AP
    configuration with the onboard ESP8266. The sketch updates the
    status every 60 seconds in the IoTLink dashboard. - Click "Examples"
    at the page
  - [Tutorial Cactus Micro Rev2
    DHT11](Tutorial_Cactus_Micro_Rev2_DHT11.md)
    (new)
  - [thingspeak.ino](https://github.com/AprilBrother/espduino/tree/master/examples/thingspeak)
    Example read DHT11 and send to
    thingspeak.com
  - [mqtt.ino](https://github.com/AprilBrother/espduino/tree/master/examples/mqtt)
    Example for MQTT
    client
  - [rest.ino](https://github.com/AprilBrother/espduino/tree/master/examples/rest)
    Example for RESTful
    client
  - [pushbullet.ino](https://github.com/AprilBrother/espduino/tree/master/examples/pushbullet)
    Example send pushbullet push notification
  - [Github for espduino](https://github.com/AprilBrother/espduino)

### ETC

  - [TOI
    firmware](https://github.com/dherrendoerfer/TOI_Firmware/tree/master/Cactus_Micro)
    It turns an Arduino into a tiny integrated web server within its own
    wifi network, or within an existing one.
