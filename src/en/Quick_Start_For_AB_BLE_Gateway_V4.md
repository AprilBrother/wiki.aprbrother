[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

## Usage ##

  - Prepare a power adapter 5V/2A. Please note the the current 2A is required
  - Wire ethernet cable between gateway and your router. Don't wire the ethernet cable to your laptop directly. 
  - Please use the micro USB cable as power cable. Wire the cable to power adapter. Don't wire the cable to Laptop directly. It may cause weak power. It means the gateway connected to LAN network if yellow LED around the ethernet port is on.
  - Install [configure tool](Software_AB_BLE_Gateway_V4.md) at your laptop
  - Click at application, you can see some configure options

## Internet connection setting ##

* We recommend connect the gateway with ethernet cable.
* You can also configure the gateway uses WiFi with following ways
  1. Use the configure tool to add `Network` parameters for WiFi if ethernet cable is enabled. Then remove the ethernet cable and the gateway will try to work with WiFi instead
  1. You can also [configure WiFi parameters with smartconfig feature](gw4/config_wifi.md). The feature is adeed from firmware `v1.4.14`.

## How To Test ##

  - Change application settings for gateway and save
      - Application Type -\> MQTT Client
      - MQTT Host -\> `mqtt.bconimg.com`
      - MQTT Port -\> 1883
      - Publish Topic -\> your-topic
  - Download and install [data viewer software](https://i1.aprbrother.com/ble-viewer-setup-1.0.2.zip)
  - Fill the form with the parameters in first steps
  - View the data from gateway

<img src="https://i1.aprbrother.com/ble-viewer.png" width="480">

