[← BlueDuino Rev1 Main Page](BlueDuino_rev1.md)

## Introduce

The BlueDuino has a built-in BLE module. The firmware for the BLE module
can be upgrade if the device name for BLE module is "ZeroBeacon".

  - These steps can be done on the Windows only.
  - **Be careful\! These steps may damage the BlueDuino and make it
    brick.**

## How to upgrade the firmware

### Prepare the BlueDuino

  - Short the jumper 1.
  - Short the jumper 2.

Just connect the three pads with soldering.

<img src="https://i1.aprbrother.com/blueduino-jumper.png" />

### Change the BlueDuino to upgrade mode

  - Open the Arduino IDE
  - Choose right board and serial port etc
  - Upload the sketch
    [soft_serial_leonardo.ino](https://gist.github.com/volca/6333732)
    to BlueDuino
  - Open the "serial monitor" of Arduino IDE and input some AT commands

<!-- end list -->

    AT+NAME?
    AT+SBLUP

The BlueDuino goes to upgrade mode now. It will not accept any other AT
commands.

  - Upload the sketch
    [ble_upgrade.ino](https://gist.github.com/volca/9f8afd841ac88db4967a)
    to BlueDuino

### Start upgrade

1.  Download the [SerialBootTool from
    TI](http://processors.wiki.ti.com/images/6/64/SerialBootTool_1_3_2.zip)
2.  Open a serial client such as CoolTerm, Open the serial port with
    setup 115200, 8, n, 1
3.  If you have seen the words "I'm ready for upgrade.", go to step 5
4.  If you haven't seen the words "I'm ready for upgrade.", Re-plug the
    BlueDuino to another usb port and reconnect the serial port.
5.  Close the CoolTerm or the client you connect to serial port.
6.  Open the SerialBootTool, Choose the serial port and the firmware
7.  Click "Load Image"

Wait a while. You will see the words "Download completed successfully"

You've done\!

Don't forget to cut the jumper 1 & 2.
