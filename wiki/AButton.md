[← APixel Main Page](/APixel "wikilink")

## About The Project

AButton is a WiFi connected push button. It support the \#IFTTT
application and its Maker Channel now. The project is modifying of [the
IFTTT Smart Button project from Noel
Portugal](https://www.hackster.io/noelportugal/ifttt-smart-button-e11841).

We use the APixel dev board and a casing of the push light to build the
project. It can works with two AAA battery (1.5V x 2 = 3V).

The push button "boots up" the module by sending a HIGH signal through a
diode to CH_PD. The first thing I do in init.lua is to set GPIO02 to
HIGH, which is connected through a 1K resistor back to CH_PD. When it
done posting to IFTTT it just set GPIO02 to LOW and the module is
disabled.

Please check Noel Portugal 's project. The initial code comes from
him.

<img src="https://d3s5r33r268y59.cloudfront.net/43582/products/thumbs/2015-11-23T06:10:15.878Z-IMG_5230.jpg.855x570_q85_pad_rcrop.jpg">

### Changes for the push light

  - Re-soldering the power wire to use only 2 x AAA battery. The
    original battery holder can install 3 X AAA batteries.
  - Replaced the microswitch with one without lock.

### Changes made from original code

  - Change the stylesheet for the configure page -- Thanks purecss\!
  - Added IFTTT token field to let you enter the token
  - Token saved in file
  - Removed the AP scanning

## COMPONENTS AND SUPPLIES

  - APixel dev board x 1
  - Push light x 1
  - Microswitch x 1

## APPS AND ONLINE SERVICES

  - The URL prefix for IFTTT Maker channel is
    `/trigger/button/with/key/`. You need input the token for the event
    at setup page.
  - [IFTTT Maker
    Channel](https://www.hackster.io/ifttt/products/maker-channel)

## CODE

The code is available on
[GitHub](https://github.com/AprilBrother/APixel/tree/master/src/abutton).

For OS X, please check the Makefile for uploading lua files.

For example:

Upload all lua files and html files

`make upload_all`