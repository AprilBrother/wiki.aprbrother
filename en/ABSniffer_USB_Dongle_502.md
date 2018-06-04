## Descrption

ABSniffer USB Dongle 502 works as USB 2 UART mode. It can work with
Windows/Mac/Linux/Raspberry PI

  - Size 68mm x 26mm x 12mm
  - Micro controller TI CC2540

## Installing

### Raspberry PI

On a Raspberry Pi the device shows up as /dev/ttyACM0.

### OpenWRT

  - Install package kmod-usb-acm first
  - After installing, you will get some log
    like

<!-- end list -->

    [47056.710000] usb 1-1: new full-speed USB device number 4 using ehci-platform
    [47056.940000] cdc_acm 1-1:1.0: This device cannot do calls on its own. It is not a modem.
    [47056.950000] cdc_acm 1-1:1.0: ttyACM0: USB ACM device

And now

    # ls /dev/tty*
    /dev/tty      /dev/ttyACM0  /dev/ttyATH0  /dev/ttyS0

After that it's just a cat /dev/ttyACM0 to read the output.

Thanks Jason for his sharing\!

## Links

  - [Drivers for
    Win7/WinXP](http://abcdn1.qiniudn.com/ab301.zip?download)