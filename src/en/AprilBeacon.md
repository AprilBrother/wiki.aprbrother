# April Beacon #

## Introduction

AprilBeacon is one of the most commonly used beacons. Supporting both iBeacon and Eddystone. Battery level can be shown in the advertising data or via a BLE connection.

While this beacon has both iOS and Android configuration apps, the iOS app is easier to use and is more functional. If you are setting up Eddystone-URL (for Android notifications) and you consider yourself to be non-technical then you will need use of an iOS device for setup.

## Features

* Configurable including UUID, major, minor and TX power etc
* Upgrade Over-The-Air supported.

## Models

### April Beacon N02

---

<img src="https://i1.aprbrother.com/card-n02.jpg-320.jpg" width="120" align="right">

* Power supply by Lithium Battery 800 mAh
* Dimension: 86mm * 54mm * 4mm
* One LED and one button
* BLE micro controller NRF52810

#### Button status

For Firmware version &gt;= v4.0.6

* Long push button 2 seconds and more
  * Turn on/off advertising 
  * Stop advertising if fast blink
  * Start advertising if slow blink
* Short press button
  * blink once
  * Advertise the 2nd UUID 30 seconds, then advertise the 1st UUID. (Default settings)

### April Beacon N06

---

<img src="https://i1.aprbrother.com/prod/n06.jpg-320.jpg" width="120" align="right">

* Power supply by CR2032 Battery 225~ mAh (replaceable).
* Dimensions: `60mm x 35mm x 12mm`
* One LED and one button
* BLE micro controller NRF52810 or NRF52820

### [USB Beacon 305](AprilBeacon_305.md)

---

<img src="https://i1.aprbrother.com/302.jpg" width="120" align="right">

* USB Powered
* Supporting iBeacon + Eddystone 
* BLE micro controller CC2540

