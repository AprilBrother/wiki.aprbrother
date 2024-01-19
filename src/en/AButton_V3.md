## About The Project

AButton V3 is a WiFi connected push button based on EspressIF's ESP32-PICO-D4.  The push button "boots up" AButton and send message to MQTT broker. It will go to sleep after work be done.

Additionally, the board includes a WS2812B RGB LED and buttons to aid in your development.

![AButton V3](https://i1.aprbrother.com/abutton-v3.jpg-320.jpg)

## Specification

* Processing
  * 32-bit dual-core processor operating up to 240 MHz
  * 4 MB SPI flash
* Wireless
  * 2.4 GHz Wi-Fi - 802.11b/g/n
  * BLE 4.2
  * PCB antenna
* Power:
  * 300 mAH 3.3 V Lithium battery and LDO regulator
  * Optimized power path for low-power battery usage
* Form-factor
  * Enclouse size 50mm x 12mm
  * PCB size diameter 46 mm
* Connectivity:
  * WS2812B RGB LED x 1
  * Button x 1 for wake up
  * Serail/UART ports for programming (match [ESP Flasher](ESP_Flasher.md))

PCB image

![AButton V3 PCB](https://i1.aprbrother.com/abutton-v3-pcb.png-320.jpg)

## How To Programming Your Own Firmware

### Use ESP Flasher To Program AButton

We designed pins 2 x 4 for match ESP Flasher. ESP Flasher is an USB to UART converter. It's best tool to program AButton. See the photo for how to wire it

![How To wire ESP Flasher with AButton](https://i1.aprbrother.com/abutton-v3-2.jpg)

Here's [a video for how to wire ESP Flasher](https://youtu.be/C1G9SJpkaxs)

### Installing via Arduino IDE Boards Manager

Espressif has added support for the Arduino Boards Manager and by installing this way, you get the benefit of a slew of great built-in examples. Instructions for installing via the board manager can be found at [espressif's arduino-esp32 GitHub](https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md).

If you have successfully installed the ESP32 core to your Arduino IDE, you should see the following under Tools with the ESP32 Pico Kit selected:

![Arduino Option For Abutton V3](https://i1.aprbrother.com/esp32pic.png)

## Downloads

* [Source code](https://github.com/AprilBrother/abutton-v3)
* [Hardware Files](https://github.com/AprilBrother/ab-hardware/tree/master/abutton-v3)
