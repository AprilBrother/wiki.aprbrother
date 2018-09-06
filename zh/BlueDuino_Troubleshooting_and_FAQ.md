The BlueDuino is based on Pro Micro from SparkFun. So it's very similar
with Pro Micro. On this page you’ll find troubleshooting tips and FAQs.
Here’s a directory of the subjects covered:

## Serial Port Not Showing Up in “Tools \> Board” menu

The BlueDuino can be a finicky little thing. There are a few series of
events that can lead to its serial port being removed from the Arduino
IDE’s Serial Port selection menu. If you can’t see your BlueDuino’s
serial port, give these steps a try:

  - Close all Arduino windows. (Don’t forget to save\!)
  - Unplug BlueDuino from your computer.
  - Wait a few seconds for the device to be detached.
  - Plug BlueDuino back in.
  - Open Arduino back up, check the Serial Ports menu again.

## How to Revive a “Bricked” BlueDuino

Incorporating all of the USB tasks on a single chip is an awesome
feature that makes the BlueDuino and boards like it truly unique. But it
also places more stress on a single chip, and if anything goes wrong
with that chip, the board becomes nearly unusable. It’s not uncommon for
BlueDuino’s to become “bricked” and unprogrammable. But, in most cases,
the bricking is reversible\!

The most common source of BlueDuino “bricking” is uploading code to it
with an incorrectly set board (e.g. programming a 16MHz/5V BlueDuino
with the board set to 8MHz/3.3V). Also, make sure your sketch doesn’t
mess with the ATmega32U4’s PLLCSR register, or any other register that
sets up USB functionality on the ATmega32U4. The BlueDuino will actually
take code compiled for the wrong operating speed, but when it tries to
re-enumerate, you’ll be greeted with a notification like this:

<img src="http://i1.aprbrother.com/523b7a11757b7fd5468b4567.png"/>

To revive the BlueDuino, you’ll need to find a way to upload a sketch to
it with the board option correctly set. We can do this with a little
help from the bootloader.

First, you’ll need to set the serial port to the bootloader. But that
port is only visible when the board is in bootloader mode, so pull the
reset line low twice quickly to invoke the bootloader reset feature
discussed above. On BlueDuino’s, or other devices which don’t have a
reset button, you can either use a wire to quickly short ‘RST’ to ‘GND’
twice, or wire up a temporary reset button. While the BlueDuino is in
the bootloader change the ‘Tools \> Serial Port’ menu to the bootloader
COM port. Quick\! You’ve only got eight seconds. On Windows, the
bootloader’s COM port number is usually one number higher than the
BlueDuino’s regular port number.

With the serial port set, we’re just about ready to re-upload our
sketch. But first, double check that the board is correctly set. Then
reset to bootloader again, and quickly upload your sketch. Again, you’ll
have to be quick…you’ve only got eight seconds. It may help to press the
Upload keybind – CTRL+U / CMD+U – immediately after resetting.

It can take a few tries to get the timing right. Since the code has to
compile first, it may help to hit upload first and then reset.

The [related link for Pro
Micro](https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-revive)