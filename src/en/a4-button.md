# About A4 Button #

## Description ##

A4 button is a WiFi connected push button.  The push button "boots up" and send message to MQTT broker. It will go to sleep after work be done. It's power saving for longer battery life.

It is based on the single core ESP32-C3 RISC-V processor and therefore comes with tons of useful features.

Additionally, the board includes a WS2812B RGB LED and buttons to aid in your development.

![a4 button](https://i1.aprbrother.com/w/a4-1.jpg-640.jpg)

![a4 button](https://i1.aprbrother.com/w/a4-2.jpg-640.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/tg-o6JCrOSQ?si=QyXw4U9prCqyv5Hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## About the default firmware ##

The default firmware works as AP default. You can connect the AP and upload your own firmware which contains the your WiFi SSID / password and your MQTT broker address.

You will get the full features after firmware is uploded. How it works:

* Press button to wakeup. The LED turns on
* Connect the WiFi and publish message to MQTT broker
* Turn off the LED and go to sleep

Note: The firmware is written in esphome. ESPHome is a system to control your microcontrollers by simple yet powerful configuration files and control them remotely through Home Automation systems. It's easier to integrate to home assistant.

## Specification ##

* Processing
  * 32-bit core RISC-V microcontroller with a maximum clock speed of 160 MHz
  * 4 MB SPI flash
* Wireless
  * 2.4 GHz Wi-Fi - 802.11b/g/n
  * BLE 5.0 controller
  * PCB antenna
* Power:
  * 600 mAH 3.3 V Lithium battery and LDO regulator
  * Optimized power path for low-power battery usage
* Form-factor
  * ABS Enclouse, size 57mm x 18mm
  * PCB size diameter 45 mm
* Connectivity:
  * WS2812B RGB LED x 1
  * Button x 1 for wake up
  * Serail/UART ports for programming (match [ESP Flasher](ESP_Flasher.md))
  * One USB Type-C port for programming also
  * Magnetic contact points for charge

## Documents and links ##

* [Quick start](a4_button/quick_start.md)
