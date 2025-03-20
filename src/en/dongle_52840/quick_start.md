# April USB dongle 52840 #

## Introduction ##

The April USB dongle 52840 is shipped with the Adafruit nRF52 Bootloader after Jan 17 2025. The bootloader is a CDC/DFU/UF2 bootloader. UF2 is an easy-to-use bootloader that appears as a flash drive. You can just copy .uf2-format application images to the flash drive to load new firmware.

## Updating the application firmware ##

To update the application firmware, follow the steps:

* Disconnect the dongle from the host
* Click and hold the button on the dongle (through the tiny hole). Don't release the button. Plug the dongle.
* It will mount as a Mass Storage Device called NRF52FBOOT

![NRF52BOOT](https://i1.aprbrother.com/w/nrf52boot.png)

* Copy the uf2 file to the removable drive 'NRF52BOOT', the dongle will restart
* Reinsert dongle to host and the new application firmware is running.

### Pre-built uf2 file ###

See [the firmware files](https://github.com/AprilBrother/april-usb-dongle-52840/tree/main/firmware). It includes firmware files:

* `ble_connectivity`
* nrf sniffer for 802.1.54
* nrf sniffer for BLE
* openthread. See [the document from Nordic](https://docs.nordicsemi.com/bundle/ncs-2.9.0/page/nrf/samples/thread.html) for more information
  * Thread CLI
  * Thread Co-processor
* uf2 bootloader

## Get UF2 converter ##

* Install Python3
* Download [the uf2conv.py from GitHub](https://github.com/microsoft/uf2/tree/master/utils)

## Generating the firmware in UF2 ##

Pack hex to uf2 file for nRF52840

```
uf2conv.py nrf52840_xxaa.hex --family 0xADA52840 --convert --output nrf52840_xxaa.uf2
```

If using a .bin file with the conversion script you must specify application address with the -b switch, this address depend on the SoftDevice size/version e.g S140 v6 is 0x26000, v7 is 0x27000

```
nRF52840

uf2conv.py firmware.bin -c -b 0x26000 -f 0xADA52840
```
