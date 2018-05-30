[← ESP Flasher Main Page](/ESP_Flasher "wikilink")

### What's it

A CP2102 3.3V USBToUART converter support 400mA+ current. Program
ESP8266 module just like
NodeMCU.

<img src="https://d3s5r33r268y59.cloudfront.net/43582/products/thumbs/2015-11-17T06:06:19.708Z-cp2102N2-note.jpg.855x570_q85_pad_rcrop.jpg">

### Why did you make it?

The common USB to UART converter supports only 100mA current. The
converter supports 400mA+ current. It's good for programming ESP8266
(ESP-01 and ESP-11).

For program with Arduino IDE, the circuit does the trick for auto reset.
Thanks for NodeMCU team\!

<img src="http://7fvk57.com1.z0.glb.clouddn.com/auto-reset.png">

### Features

  - ESP-01 and ESP-11 supported
  - A Reset button and a flash button for esp8266
  - No need press reset button when flash esp8266 with Arduino IDE, just
    like NodeMCU does
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

### Links

  - [Setup Arduino IDE for programming
    esp8266](/ESP_Flasher_Setup_Arduino_IDE_For_Programming_ESP "wikilink")
  - [Schematic](https://github.com/AprilBrother/esp8266-flasher)
  - [Driver for
    CP2102](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)