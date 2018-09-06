[← ESPea Main Page](ESPea_And_Shields.md)

## Description

128x64 pixels OLED Shield with I2C. It adds a 128x64 monochrome OLED to
ESPea main board.

The OLED uses only the two I2C pins on the [ESPea](ESPea.md),
and you can pretty much stack it with ESPea, even ones that use I2C
since that is a shared bus.

<img src="http://i1.aprbrother.com/oled-3.jpg-640.jpg">

## Technical Details

  - Screen Size: 128x64 pixels (0.96” Across)
  - Operating Voltage: 3.3V
  - Driver IC: SSD1306
  - Interface: IIC(I2C)
  - IIC Address: 0x3C or 0x3D

## Pinouts

I2C Data Pins

  - SCL - D1
  - SDA - D2

These pins can be shared with other I2C devices.

The I2C address is 0x3D and can be changed by jumper. (See the label at
PCB)

## Example Codes

Work with Arduino

  - Install Library Adafruit_SSD1306 with Library Manager (Sketch -\>
    Include Library -\> Manage Libraries)
  - Test [example
    sketch](https://github.com/AprilBrother/ESPea-Examples/tree/master/examples/03.Shields/shield-oled)