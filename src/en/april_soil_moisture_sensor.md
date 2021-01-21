## April soil moisture sensor

Soil moisture sensor Wi-Fi enabled. It's based on Espressif's ESP32 S2 SoC and uses capacitive moisture probing. Also provide temperature sensor.

The project is modifying of [the I2C Moisture Sensor project from Miceuz](https://github.com/Miceuz/i2c-moisture-sensor). Thanks for his source code

## Hardware ##

* ESP32 S2 module x 1
* Reset button x 1
* Boot Button x 1 (GPIO0)
* Functional button x 1 (GPIO2)
* Programming pinouts which adapter for ESP Flasher
* Led x 1
* temperature sensor x 1 (tmp112)
* Soil moisture sensor x 1 (PCB sensor uses capacitive moisture probing)
* Lithium Battery connector x 1 (PH2.0-2P JST connector)
* USB Type-C for programming and battery charge
* PCB size: `28.15mm * 126mm`

Recommend battery: 482833 lithium battery

### Waterproofing ###

The sensor comes coated with QIANXIN - a moisture resistant varnish for electronics. **It's ok for play around in a flower pot but not enough for outdoor use. You must add an additional protection to the whole sensor!**

## FAQ ##

### How can I flash my sensor in Arduino or IDF? ###

If you currently have CircuitPython installed and you would like to use your device in the Arduino IDE or with the ESP-IDF, the first time you flash your board you will need to put it into download mode by holding BOOT/EN, pressing RESET and then releasing BOOT/EN. That will enable the CDC USB in ROM and you will be able to select the device to flash it.

### RX & TX pins are not coupled with the internal USB, what are they used for? ###

RX & TX are still connected to UART0, and still used with the USB when in CDC (download mode). Otherwise, you can use them as UART0 when connecting a module that uses serial, or use them as general IO, it's up to you.

## Downloads ##

* [Source code](https://github.com/volca/esp-soil)
* [Hardware files](https://github.com/AprilBrother/ab-hardware/tree/master/april-soil-moisture-sensor)
