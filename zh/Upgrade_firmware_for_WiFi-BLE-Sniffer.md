[← Wireless iBeacon Receiver Main
Page](Wireless_iBeacon_Receiver.md)

## Instruction

The Wireless iBeacon Receiver is combined with WiFi module and BLE
module. You will need upgrade firmware if you wish to try some
experimental feature.

Note: Be careful\! These operation may damage the device and can't
recovery.

### Upgrade firmware for WiFi module

The recent device support OTA features. Please try to upgrade them with
these steps.

Note: Internet connection is needed.

  - Enable the feature "Auto Update" at config page.
  - Report current firmware the device at [our support
    forum](http://bbs.aprbrother.com/c/wifi)
  - We'll push the OTA files to online.

Once the OTA files enable, power on the device and the green LED will
blink fast a while for OTA upgrade.

### Upgrade firmware for BLE module

These operation can be done on Windows only.

#### Hardware Requirements

1.  USB to UART converter 3.3V TTL x 1
2.  [Termite](http://www.compuphase.com/software_termite.htm) - Free
    Serial Terminal Software

#### Prepare

1.  Power on the device
2.  Wire the to USB to UART converter to pins U1 (RX - TX, TX - RX, GND
    - GND)
3.  Open device manager, find the new serial port. It usually shows such
    as COMxxx
4.  Open Termite, connect to the serial port. Settings: 115200/8/N/1
5.  Make the BLE module to upgrade mode. Type AT command `AT+SBLUP`. The
    module will not work as normal now and wait for upgrade.

<img src=http://abcdn1.qiniudn.com/beacon-rx.jpg width="80%">

#### Start upgrade

1.  Download the [SerialBootTool from
    TI](http://processors.wiki.ti.com/images/6/64/SerialBootTool_1_3_2.zip)
2.  Don't forget to close the software termite. It may block the serial
    port.
3.  Open the SerialBootTool, Choose the serial port and the firmware
4.  Click "Load Image"

Wait a while. You will see the words "Download completed successfully".
You've done\!

#### Firmware for BLE module

  - [firmware 1.2.7 for BLE
    module](http://abcdn1.qiniudn.com/sniffer-ebl-gpio-1.2.7.bin)