[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

# WiFi settings #

**Note: We recommend connect the gateway with ethernet cable. It's much stable and power saving.**

You can following the steps to configure WiFi for gateway with smartconfig feature

## Prepare ##

* An Android phone.
* Download mobile app [Gateway config tool📱][app-link].
* **Make sure your phone connect the 2.4GHz WiFi. 5G WiFi is not supported yet.**
* Power on the gateway with power adapter (5V / 2A)

## Procedure for setting WiFi ##

* There's a hole at the left side of the Ethernet port. Use a needle to fast press the button in the hole three times. The led near the hole will keep blinking if successful. It means the gateway enter `Smart Config` mode.
* Open the GWTool app and select `Add a gateway`. 
* Grant the Location permission so the app can fill the WiFi SSID your phone connected automatic
* Fill the WiFi password for current WiFi SSID

<img src="https://i1.aprbrother.com/gwc3/conf-wifi.jpg" width="500">

* Tap "start" button and wait minutes. It should display "Found a gateway" if successful
* Configure the gateway with the tool


## Troubleshooting ##

* Make sure the WiFi is 2.4G not 5G
* Double check the password
* The power adapter must be 5V / 2A. It can provide enough power for WiFi connection
* Repeat the steps if settings fail

[app-link]: <https://i1.aprbrother.com/apk/gw-config-tool-v1.1.2.apk>
