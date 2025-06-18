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

- **Internet required?** - The AB gateway can operate on both Internet-connected and LAN networks.

### Configure via Ethernet connectivity ###

We recommend connect the gateway using ethernet cable.

- Connect the AB gateway to the router using an Ethernet cable 
- Open the Gateway configure tool on your laptop
- Click "Scan" button to find the gateways on the LAN network

![config scan](https://i1.aprbrother.com/w/conf-scan.png)

## How To Test ##

Configure data capture and forwarding

:::tabs

@tab Forward data to MQTT broker

We provide testing MQTT broker `mqtt.bconimg.com` for your testing. Don't use it in your production environment.

- Change application settings for gateway and save
  - Application Type: `MQTT Client`
  - MQTT Host: `mqtt.bconimg.com`
  - MQTT Port: 1883
  - Publish Topic: `your-topic`
- Select `Save` to proceed
- Download and install [data viewer software](https://i1.aprbrother.com/ble-viewer-setup-1.0.2.zip)
- Fill the form with the parameters in first steps
- View the data from gateway

<img src="https://i1.aprbrother.com/ble-viewer.png" width="480">

@tab Forward data to HTTP server

To quickly validate that data is correctly received on the target computer on the host network, it is possible to run `gw-http-box` standalone to listen for HTTP POSTs on port `8000` as follows:

* Install Node.js
* Git and console are required
* Run command in the console
```
git clone https://github.com/aprilbrother/gw-http-box.git
npm install
npm start
```
- Change application settings for gateway and save
  - Application Type: `HTTP Client`
  - HTTP Host: The IP of your laptop, e.g. `192.168.1.123`
  - HTTP Port: 8000
  - URI: `/`
- Select `Save` to proceed

If the gateway is correctly configured and at least one BLE device is advertising in range, gateway data should appear in the console.
:::
