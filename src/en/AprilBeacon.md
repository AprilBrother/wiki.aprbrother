# April Beacon #

## Introdution

AprilBeacon is one of the most commonly used beacons. Supporting both iBeacon and Eddystone. Battery level can be shown in the advertising data or via a Bluetooth GATT connection.

While this beacon has both iOS and Android configuration apps, the iOS app is easier to use and is more functional. If you are setting up Eddystone-URL (for Android notifications) and you consider yourself to be non-technical then you will need use of an iOS device for setup.

## Features

* Support both iBeacon and Eddystone
* Configurable including UUID, major, minor and TX power etc
* Upgrade Over-The-Air supported.

## Models

### [ABSensor N01](ABSensor.md#absensor-n01)

---

<img src="https://i1.aprbrother.com/ABsensorDHF.jpg-320.jpg" width="120" align="right">

* Power supply by CR2032 Battery 230~ mAh (replaceable).
* Dimensions: Height 33mm, Width 33mm, Depth 10mm
* Signal range 3m - 60m.
* Embedded acceleration sensor (LIS3DH)
* One LED and one button
* One hole for leash/strip
* Advertise 1st UUID when still, advertise 2nd UUID when move
* BLE micro controller NRF52810

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

### [ABSensor N03](ABSensor.md#absensor-n03)

---

<img src="https://i1.aprbrother.com/n03.jpg-320.jpg" width="120" align="right">

* Power supply by CR2450 Battery 500~ mAh (replaceable).
* Dimensions: Diameter 48mm, Height 23mm
* Embedded Temperature/Humidity/Light sensors.
* BLE micro controller NRF52832

### April Beacon N04

---

<img src="https://i1.aprbrother.com/aprilbeacon-n04.jpg" width="120" align="right">

* Power supply by CR2450 Battery 500~ mAh (replaceable).
* Dimensions: Diameter 48mm, Height 23mm
* External antenna
* BLE micro controller NRF52810

### April Beacon N05

---

* Power supply by CR1632 Battery 120~ mAh (replaceable).
* PCB Dimensions: Height 23.9mm, Width 23.1mm
* Embedded acceleration sensor LIS3DH
* One LED and one button (For factory reset)
* BLE micro controller NRF52810

### April Beacon N06

---

<img src="https://i1.aprbrother.com/prod/n06.jpg-320.jpg" width="120" align="right">

* Power supply by CR2032 Battery 225~ mAh (replaceable).
* Dimensions: `60mm x 35mm x 12mm`
* One LED and one button
* BLE micro controller NRF52810

### [ABSensor N07](ABSensor.md#absensor-n07)

---

<img src="https://i1.aprbrother.com/p/n07.jpg-320.jpg" width="120" align="right">

N07 is a BLE (Bluetooth LE) beacon with temperature and humidity sensor. It advertises the temperature/humidity data with BTHome protocol. 

BTHome is an open standard protocol for broadcasting sensor data. It is supported by popular home automation platforms, like Home Assistant, out of the box.

* Nordic solution, long battery life. The BLE chip is NRF52820
* Temperature and humidity sensor for environment monitoring
* Power supply by CR2450 Battery `500~` mAh (replaceable).
* Dimensions: `40mm x 40mm x 13.5mm`
* One LED and one button

### [USB Beacon 305](AprilBeacon_305.md)

---

<img src="https://i1.aprbrother.com/302.jpg" width="120" align="right">

* USB Powered
* Supporting iBeacon + Eddystone 
* BLE micro controller CC2540

### Others

- [AprilBeacon based on DA14580 - not availble](AprilBeacon_based_on_DA14580.md)
- [AprilBeacon based on TI CC254X - not availble](AprilBeacon_based_on_TI_CC254X.md)
