[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

# WiFi settings #

**Note: We recommend connect the gateway with ethernet cable. It's much stable and power saving. **

You can following the steps to configure WiFi for gateway with smartconfig feature

## Prepare ##

* An iPhone or Android phone. We recommend to use iPhone to do the step.
* Download app [Esptouch from App store](https://apps.apple.com/app/espressif-esptouch/id1071176700) or [Esptouch for aAndroid](https://github.com/EspressifApp/EsptouchForAndroid/releases).
* Power on the gateway with power adapter (5V / 2A)
* Make sure your phone connect the 2.4GHz WiFi. 5G WiFi is not supported yet.

## Procedure for setting WiFi ##

* There's a hole at the left side of the Ethernet port. Use a needle to fast press the button in the hole three times. The led near the hole will keep blinking if successful. It means the gateway enter `Smart Config` mode.
* Open the Esptouch.app and select `Esptouch`. See the picture below

![Esptouch 1](https://i1.aprbrother.com/w/esptouch-1.jpg)
* The app shows the WiFi SSID you connected. Fill the `Password` and tap the `Confirm` below. See the picture below.

![Esptouch 2](https://i1.aprbrother.com/w/esptouch-2.png)
* The Esptouch app start broadcast the WiFi parameters to the gateway. The LED will stop blinking if the gateway got WiFi parameters

## Troubleshooting ##

* Make sure the WiFi is 2.4G not 5G
* Double check the password
* The power adapter must be 5V / 2A. It can provide enough power for WiFi connection
* Repeat the steps if settings fail
