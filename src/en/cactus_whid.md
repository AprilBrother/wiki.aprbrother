# Cactus WHID #

Please check site whid.ninja for more details for Cactus WHID. Here're some Frequently Asked Questions

### Initial Flash ###

* Install Arduino IDE legacy version (e.g. 1.8.19) from [arduino.cc](https://www.arduino.cc/en/software)
* Download and extract the repo [ESPloitV2](https://github.com/exploitagency/ESPloitV2/archive/master.zip)
* Flash the `esp8266Programmer` sketch to ATmega32U4
  * Use Arduino IDE to load the esp8266Programmer sketch from the `flashing` folder.
  * Select Tools - Board - "LilyPad Arduino USB".
  * Select the Port your device is connected to under Tools - Port.
  * Upload the sketch.
* Flash WHID firmware to the ESP-12S module 
  * Download the [compiled binary file](https://github.com/volca/ESPloitV2/releases/download/2.7.51/esp-whid.bin) for ESP-12S module
  * Flash the `esp-whid.bin` with one of the following tools
    * Linux: https://github.com/AprilBrother/esptool, Example: `python esptool.py --port=/dev/ttyACM0 --baud 115000 write_flash 0x00000`
    * Windows: https://github.com/nodemcu/nodemcu-flasher
* Flash the `Arduino_32u4_code` sketch to ATmega32U4
  * Use the Arduino IDE to open the `Arduino_32u4_code` sketch from the `source` folder.
  * Select Tools - Board - "LilyPad Arduino USB".
  * Select the Port your device is connected to under Tools - Port.
  * Upload the sketch.

Your ESPloit is now ready to configure and or use.
