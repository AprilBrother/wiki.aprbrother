[← Cactus Micro R2 Main Page](Cactus_Micro_Rev2.md)

### Step 1. Check hardware wires

The Cactus Micro Rev2 has connected esp8266 module as the bottom table.
You don't need make any change.

|         |                   |
| ------- | ----------------- |
| ESP8266 | Cactus Micro Rev2 |
| GPIO0   | 12                |
| ENABLE  | 13                |
| RX      | TXO (Serial1)     |
| TX      | RXI (Serial1)     |
| GND     | GND               |
|  |

### Step 2. Program the programmer sketch

We wrote a [sketch
esp8266Programmer](https://github.com/AprilBrother/cactus-micro-r2/tree/master/libraries/CactusMicro/examples/esp8266Programmer).
For upgrade firmware for esp8266 module, you should open Arduino IDE and
upload the sketch.

### Step 3. Download tools and upload firmware to esp8266

  - For Linux/OSX, download the [modified version
    esptool](https://github.com/AprilBrother/esptool), we changed the
    flash block to smaller size.
  - For Windows, download the [NodeMCU
    Flasher](https://github.com/nodemcu/nodemcu-flasher) (Options: 1M
    bytes/QIO)

If upload failed, please press the reset button on Cactus Micro Rev2 and
try again.
