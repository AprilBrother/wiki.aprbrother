### What's it

A CP2104 3.3V USBToUART converter support 400mA+ current. Program
ESP8266/ESP32 module just like NodeMCU. It has smaller size than rev2
and we make it breadboard friendly. You can also use the flasher to
programming ESP32 without pushing flash button.

<img src="https://i1.aprbrother.com/flasher-1.jpg-320.jpg">

### Why did you make it?

The converter supports 400mA+ current. It's good for programming ESP8266
and ESP32 module

For program with Arduino IDE, the circuit does the trick for auto reset.
Thanks for NodeMCU team\!

<img src="https://i1.aprbrother.com/auto-reset.png">

Diagram
pictures

<img src="https://i1.aprbrother.com/esp-flasher-diagram.png">

### Features

  - Based on CP2104
  - ESP8266 and ESP32 supported
  - Breadboard friendly
  - A Reset button and a flash button
  - No need press reset button when programming esp8266 / esp32 with
    Arduino IDE
  - Operating voltage：3.3V
  - System support：Windows 98SE/2000/XP/Vista/Window7/Mac OS 9/Mac OS
    X/Linux 2.40
  - Output current：400mA+ (a MIC5219 LDO)

### Pinouts

For programming other ESP8266 modules such as ESP-12 or ESP-07, wire the
pins like these:

|             |                  |
| ----------- | ---------------- |
| flasher pin | ESP module pin   |
| VCC         | VCC              |
| GND         | GND              |
| TXD         | RXD              |
| RXD         | TXD              |
| RST         | RST              |
| GPIO0       | GPIO0            |
| CH_EN      | CH_EN or CH_PD |
|  |

For ESP32

|             |                |
| ----------- | -------------- |
| flasher pin | ESP module pin |
| VCC         | VCC            |
| GND         | GND            |
| TXD         | RXD            |
| RXD         | TXD            |
| RST         | EN             |
| GPIO0       | GPIO0          |
| CH_EN      | Not wire       |
|  |

### Links

  - [Schematic](https://github.com/AprilBrother/esp-flasher/tree/master/schematic)
  - [Setup Arduino IDE for programming ESP8266 /
    ESP32](ESP_Flasher_Setup_Arduino_IDE_For_Programming_ESP.md)
  - [Driver for
    CP210X](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)
