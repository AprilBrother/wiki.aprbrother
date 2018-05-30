[← AB BLE Shield Main Page](BLEShield.md)

  - The firmware for the BLE module can be upgrade if the device name
    for BLE module is "ZeroBeacon".
  - These steps can be done on the Windows only.

Be careful\! These steps may damage the BLE Shield and make it brick.

## Prepare

1.  Connect the AB BLE Shield to USB to UART converter.
2.  Make the BLE Shield to upgrade mode. Input AT command `AT+SBLUP`.
    The module will not work as normal now and wait for upgrade.

## Start upgrade

1.  Download the [SerialBootTool from
    TI](http://processors.wiki.ti.com/images/6/64/SerialBootTool_1_3_2.zip)
2.  Open the SerialBootTool, Choose the serial port and the firmware
3.  Click "Load Image"

Wait a while. You will see the words "Download completed successfully".
You've done\!