[← Cactus Micro Main Page](Cactus_Micro.md)

### Hardware

  - [Install Driver For
    Windows](http://www.arduino.cc/en/Guide/ArduinoLeonardoMicro#toc10)
  - [How to fix the http post bug for Cactus
    Micro](http://blog.aprbrother.com/p/303)
  - [How to change the serial port for Cactus
    Micro](http://blog.aprbrother.com/p/281)
  - [How to made Cactus Micro as ESP8266
    programmer](http://blog.aprbrother.com/p/283)

### Programming

  - [TOI
    firmware](https://github.com/dherrendoerfer/TOI_Firmware/tree/master/Cactus_Micro)
    It turns an Arduino into a tiny integrated web server within its own
    wifi network, or within an existing
    one.
  - [httpPost](https://github.com/AprilBrother/cactus-micro/tree/master/examples/arduino/httpPost)
    A simple example for how to make http post. Please refer [the
    blog](http://blog.aprbrother.com/p/303) for more
    detail.
  - [searchBaudRate](https://github.com/AprilBrother/cactus-micro/tree/master/examples/arduino/searchBaudRate)
    this comes handy if you forgot the correct baud rate of your
    ESP8266. It loops through the common baud rates, sends an empty AT
    command, the detects the correct baud rate by checking the result.
    Thanks ray for the
    sketch.
  - [serialMonitor](https://github.com/AprilBrother/cactus-micro/tree/master/examples/arduino/serialMonitor)
    this demo allows you to send AT commands to ESP8266 through a Serial
    monitor. Use this demo to experiment with all the AT commands
    available for ESP8266. It's based
    SoftwareSerial.
  - [hardwareSerialMonitor](https://github.com/AprilBrother/cactus-micro/tree/master/examples/arduino/hardwareSerialMonitor)
    this demo is same with serialMonitor. It's based HardwareSerial
    Serial1.
  - [Arduino Wifi Temperature
    Logger](http://www.instructables.com/id/Arduino-Wifi-Temperature-Logger/)