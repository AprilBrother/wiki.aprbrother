[← ESPea Main Page](ESPea_And_Shields.md)

## Description

This is an "appallingly small" add-on shield for ESPea that mounts on
the bottom, USB-end of the ESPea by soldering the board to the GND, 3V3.
The heart of the board is the LTC4054 battery management chip by Linear
Technology. The board has +/- through-hole mounting holes for a JST LiPo
battery connector (supplied with the LiPo charger) and for an external
DC power
supply.

<img src="https://blog.aprbrother.com/wp-content/uploads/2016/11/bm-1-600x600.jpg">

The swtich (SW1) can open / close the power from battery shield.

## LED Status

  - LED1 is led for charge. It will be off when battery is full charge
  - LED2 will turn on when battery is full charge
  - LED2 will turn on when device is powered by battery

<!-- end list -->

  - LED1
充电指示灯，电池充满LED1熄灭；
  - LED2电池充满后会被点亮;
  - 电池供电时LED2亮；

## Technical Details

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| Name            | Parameters                                              |
| Chip            | LTC4054-4.2                                             |
| Size            | 25.6mm x 34mm without headers soldered in               |
| Power Connector | ph2.0-2p JST connector and 5.5mm / 2.1mm DC barrel plug |
| Charge Current  | 500mA                                                   |
| Charge Voltage  | 4.2V                                                    |
|  |

## Note

The 5.5mm / 2.1mm DC barrel plug not soldered default.

## Documents

  - [datasheet for
    LTC405442xf](https://d3s5r33r268y59.cloudfront.net/datasheets/5602/2015-08-18-10-46-36/LTC405442xf.pdf)
  - [Schematic](https://github.com/AprilBrother/ESPea-Battery-Shield/blob/master/hardware/battery-shield-schematic.pdf)
