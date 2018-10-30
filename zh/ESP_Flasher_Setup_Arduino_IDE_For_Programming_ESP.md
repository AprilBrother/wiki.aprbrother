[← ESP Flasher Main Page](ESP_Flasher.md)

## Setup Arduino IDE for programming esp8266

### For ESP8266 With 4M Flash

Use the ESP8266 flasher for Arduino IDE without pressing the reset
button. Watch [the Video](https://vimeo.com/145965143) for the demo.

  - Install Arduino 1.6.5 from the [Arduino
    website](http://www.arduino.cc/en/main/software).
  - Start Arduino and open Preferences window.
  - Enter
    <http://arduino.esp8266.com/stable/package_esp8266com_index.json>
    into Additional Board Manager URLs field. You can add multiple URLs,
    separating them with commas.
  - Open Boards Manager from Tools \> Board menu and install esp8266
    platform (and don't forget to select your ESP8266 board from Tools
    \> Board menu after installation).
  - You can programming ESP8266 module by choose the board type "NodeMCU
    V1.0" now.

### For ESP8266 With Less Flash Size

For ESP-01 or other modules, they have only 512K or 1M flash.

  - Choose board type "general esp8266 module"
  - Choose correct flash size and spi interface (QIO/DIO)
  - Choose "Reset Method" as "nodemcu"

Have fun\!

## Setup Arduino IDE for programming ESP32

  - Choose board type "ESP32 Dev Board"
