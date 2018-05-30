[← BLEPad Main Page](/BLEPad "wikilink")

To program the BLEPad, connect it to the computer with a Micro-USB
cable. Select "LilyPad Arduino USB" from the Tools \> Board menu.

## Differences from Other LilyPad Arduino Boards

The BLEPad uses a single processor (the ATmega32U4) to both run your
sketches and communicate over USB with the computer. This provides more
flexibility - for example, the board can emulate a keyboard or mouse -
but it also means that the USB connection resets whenever the processor
does (e.g. when you upload a new sketch).

## Uploading Sketches to the BLEPad

Typically, you'll upload to the BLEPad as you do with other Arduino
boards: select "LilyPad Arduino USB" from the Tools \> Board menu and
the appropriate serial port from the Tools \> Serial Port menu and press
the upload button. This will reset the BLEPad, launching the bootloader,
which receives the new sketch from the computer and stores it on the
board. The bootloader then automatically launches the new sketch.

Sometimes, however, this automatic reset fails. This can happen, for
example, if you upload a sketch to the BLEPad with a different board
(e.g. the Leonardo or Micro) selected in the Tools menu. If this does
happen, there's an easy fix: you can press the reset button on the
BLEPad twice in quick succession to initiate the bootloader. To upload
with this technique, first press the upload button in the Arduino
software; then, when you see the status message "Uploading..." press the
reset button twice. This should initiate the bootloader, and the Arduino
software will upload your sketch. You might have to play a bit with the
relative timing of pressing the upload button in the software vs. the
double-press of the reset button on the board.