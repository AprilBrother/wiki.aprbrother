## Descrption

ABSniffer 528 is based on Nordic's NRF52832 -- The most powerful BLE
module.

  - Built in USB Serial converter CP2104
  - Uses the fancy Nordic NRF52832 chipset
  - Optional Command to scan BLE device advertisement data (if loaded
    custom
firmware)

<img src="https://blog.aprbrother.com/wp-content/uploads/2017/04/Wlidcase1-180x180.jpg">

You can also program connectivity firmware from nordic. Which mean you
can use pc-ble-driver to drive the dongle. pc-ble-driver consists of a
set of static and shared libraries that provide serial port
communication (using SoftDevice API serialization) to an nRF5x IC
running the connectivity firmware included. Javascript and Python
binding for pc-ble-driver are available.

If you want to reprogram this devices you must use a J-Link.

## Specification

  - ARM Cortex M4F (with HW floating point acceleration) running at
    64MHz
  - 512KB flash and 64KB SRAM
  - Built in USB Serial converter
  - USB 2.0 full speed support
  - Bluetooth Low Energy compatible 2.4GHz radio (Details available in
    the nRF52832 product specification)
  - 1.7v to 3.3v operation with internal linear and DC/DC voltage
    regulators
  - Measures 61mm x 19mm x 8mm with case

## Pinouts

|           |        |
| --------- | ------ |
| NRF52832  | CP2104 |
| P0.06 TXD | RXD    |
| P0.08 RXD | TXD    |
|  |

The pins for re-programming. These five pins are in same line. You can
re-programming the usb dongle with 1.27mm 5 pin header.

<http://7fvk57.com1.z0.glb.clouddn.com/ab528-pins.png>

## About Default Firmware ABSniffer

The ABSniffer firmware provide the features to scan advertisement data
from BLE device nearby. It's preloaded with ABSniffer 528. It has better
performance than previous ABSniffer. It can get 100+ BLE advertisement
data per second.

See more about [AT Commands For ABSniffer
528](AT_Commands_For_ABSniffer_528.md)

## Links

  - [Driver for
    CP210X](https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx)
  - [pc-ble-driver](https://github.com/NordicSemiconductor/pc-ble-driver)
  - [Create a custom iBeacon using nRF52 and ABSniffer USB
    Dongle](https://github.com/classycodeoss/absniffer-ibeacon)