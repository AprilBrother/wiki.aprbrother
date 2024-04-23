[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

# Quick Start #

Step-by-step guide to configure the gateway to forward data to remote server

## Prerequisites ##

- Prepare a power adapter 5V/2A. Please note the the current 2A is required
- Wire ethernet cable between gateway and your router. Don't wire the ethernet cable to your laptop directly. 
- Please use the micro USB cable as power cable. Wire the cable to power adapter. Don't wire the cable to Laptop directly. It may cause weak power. It means the gateway connected to LAN network if yellow LED around the ethernet port is on.
- Install [gateway configure tool](Software_AB_BLE_Gateway_V4.md) at your laptop

## Configure connectivity ##

Connect to the AB gateway via WiFi or Ethernet cable and configure its WiFi/Ethernet connectivity.

- **How to connect?**  - The AB gateway can connect with Ethernet cable. But requires [Gateway config tool 📱](Software_AB_BLE_Gateway_V4.md) mobile app for configuration if connect to WiFi fist time
- **Internet required?** - The AB gateway can operate on both Internet-connected and LAN networks.

:::tabs

@tab Configure via Ethernet connectivity

We recommend connect the gateway using ethernet cable.

- Connect the AB gateway to the router using an Ethernet cable 
- Open the Gateway configure tool on your laptop
- Click "Scan" button to find the gateways on the LAN network

![config scan](https://i1.aprbrother.com/w/conf-scan.png)

@tab Configure via WiFi 

You can also configure the gateway uses WiFi with following ways

- Use the configure tool to add `Network` parameters for WiFi if ethernet cable is enabled. Then remove the ethernet cable and the gateway will try to work with WiFi instead
- You can also [configure WiFi parameters with smartconfig feature](gw4/config_wifi.md). The feature is adeed from firmware `v1.4.14`.

:::

## How To Test ##

Configure data capture and forwarding

:::tabs

@tab Forward data to MQTT broker

- Change application settings for gateway and save
  - Application Type -\> MQTT Client
  - MQTT Host -\> `mqtt.bconimg.com`
  - MQTT Port -\> 1883
  - Publish Topic -\> your-topic
- Download and install [data viewer software](https://i1.aprbrother.com/ble-viewer-setup-1.0.2.zip)
- Fill the form with the parameters in first steps
- View the data from gateway

<img src="https://i1.aprbrother.com/ble-viewer.png" width="480">

@tab Forward data to HTTP server

TODO

:::
