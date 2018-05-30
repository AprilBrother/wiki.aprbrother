While you can't deny there is a coolness factor in being able to run a
Raspberry Pi from a smartphone, let's be honest, that isn't extremely
useful. But having a wireless serial connection into the RPi can be
useful for regular applications, for example for debugging or for remote
control.

To be able to use the serial port from a user application running in the
Raspberry Pi we first need to tell the system to not use it as a
console. To do this we need to go back to the two configuration files we
touched before. I once again recommend that you back up your config
files before changing them, in case things don't work out well and you
need to revert the changes.

In file `/boot/cmdline.txt` we are going to remove the two serial
references by taking away the first `console` and `kgdboc`
    sections:

    dwc_otg.lpm_enable=0 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait

And in file `/etc/inittab` we will comment out the serial console task:

    #T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100

After making these changes reboot the system so that they take effect.
With these changes the RPi will not use the serial port at all, so the
port will be free to any application that wants to use it as
`/dev/ttyAMA0`.

If you want to play with sending and receiving data through the serial
port then you can install minicom into your RPi using the following
command:

    $ sudo apt-get install minicom

And then you can open a terminal on the serial port with this command:

    $ minicom -b 9600 -o -D /dev/ttyAMA0

Anything you type inside the **minicom** terminal will be sent to the
serial port, and anything the other side sends will be displayed.