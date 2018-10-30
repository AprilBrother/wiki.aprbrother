[← BLEPad Main Page](BLEPad.md)

## Hardware Overview

### The pinout

[pinmapping for 32u4](https://www.arduino.cc/en/Hacking/PinMapping32u4)

#### Power Pins

There are a variety of power and power-related nets broken out:

  - **VBUS** is the unregulated voltage input for the BLEPad. If the
    board is powered via USB, the voltage at this pin will be about 3.8V
    (USB’s 5V minus a schottkey diode drop). On the other hand, if the
    board is powered externally, through this pin, the applied voltage
    can be up to 6V.
  - **3V3** is the voltage supplied to the on-board ATmega32U4. It’ll be
    either 3.3V. This voltage is regulated by the voltage applied to the
    VBUS pin. If the board is powered through the ‘VBUS’ pin (or USB),
    this pin can be used as an output to supply other devices.
  - **GND**, is the common, ground voltage (0V reference) for the
    system.

#### I/O Pins

The BLEPad I/O pins – Every pin can be used as a digital input or
output, for blinking LEDs or reading button presses. These pins are
referenced in the Arduino IDE via an integer value between 0 and 21.
(The A0-A3 pins can be referenced digitally using either their analog or
digital pin number).

Nine pins feature analog to digital converters (ADCs) and can be used as
analog inputs. These are useful for reading potentiometers or other
analog devices using the analogRead(\[pin\]) function.

There are 4 pins with pulse width modulation (PWM) functionality, which
allows for a form of analog output using the analogWrite(\[pin\],
\[value\]) function. These pins are indicated on-board with a faint,
white circle around them.

There are hardware UART (serial), I2C, and SPI pins available as well.
These can be used to interface with digital devices like serial LCDs,
XBees, IMUs, and other serial sensors.

The BLEPad has five external interrupts, which allow you to instantly
trigger a function when a pin goes either high or low (or both). If you
attach an interrupt to an interrupt-enabled pin, you’ll need to know the
specific interrupt that pin triggers: pin 3 maps to interrupt 0, pin 2
is interrupt 1, pin 0 is interrupt 2, pin 1 is interrupt 3, and pin 7 is
interrupt 4.

#### External Antenna Pin

For better antenna performance, you can wire an external antenna to the
pin ANT and remove the original ceramic antenna. Soldering a 3cm wire to
pin ANT is good enough for antenna.

See the picture below.

<img src="//i1.aprbrother.com/blepad_6.jpg-640.jpg">

#### BLE module DA14580 Pins

|         |               |
| ------- | ------------- |
| DA14580 | BLEPad        |
| ANT     | ANT           |
| RX      | TXO (Serial1) |
| TX      | RXI (Serial1) |
| 2 (P14) | D11           |
| 3 (P00) | D5            |
| 4 (P03) | D4            |
| GND     | GND           |
|  |

Pins for
DA14580

|     |                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------ |
| P00 | Pin for switch to config mode. Low level to enable config mode. (Only work at BLE awaken status) |
| P14 | Reserved                                                                                         |
| P03 | When BLE module at sleep mode, the pin will go to low level when it got serial data              |
|  |

#### On-Board LEDs

There's one red LED indicates whether power is present.

### How to Power BLEPad

As the BLEPad main feature is its innate USB functionality, the most
common way to power it is via USB. In this setup, a BLEPad will regulate
the 5V supply coming in from USB down. The other end of the USB cable
can be connected to either a computer, USB hub, or a USB wall adapter,
which can (in most cases) provide more power.

Alternatively, if your BLEPad is living out in the wild, out of reach of
USB cables, it can be powered through either the ‘VBUS’ or ‘3V3’ pins. A
supply going into the ‘VBUS’ pin will be regulated down to the correct
operating voltage (3.3V). To be safe, it shouldn’t be any higher than
12V, and it should be at least 1V more than the BLEPad operating voltage
(e.g. \> 4.3V).

If you power the BLEPad through the ‘3V3’ pin, keep in mind that this
signal is unregulated. Only use this if you have a clean, regulated 3.3V
supply to connect to it.

## Installing

  - [Install Driver For
    Windows](http://www.arduino.cc/en/Guide/ArduinoLeonardoMicro#toc10)
  - [Install for
    OSX](https://www.arduino.cc/en/Guide/ArduinoLeonardoMicro#toc9)
