[← Gateway c3 Main Page](../gateway_c3.md)

## Quick start ##

Step-by-step guide to configure the gateway to forward data to remote server

## Prerequisites ##

- Prepare a power adapter 5V/2A. Please note the the current 2A is required
- Please use the USB cable shipped as power cable. Wire the cable to power adapter. Don't wire the cable to Laptop directly. It may cause weak power.
- Prepare an Android phone
- Download and install [Gateway config tool📱](tech.md)

## Configure connectivity ##

- **How to connect?**  - The gateway c3 requires [Gateway config tool](tech.md) for connect to WiFi fist time. The app is available for Android and PC right now.

Steps

* Power on the `gateway c3` and wait seconds for boot
* Fast tripple click on the button. It should start blinking fast. This means the gateway enter WiFi config mode.

![Button and led](https://i1.aprbrother.com/gwc3/gwc3-btn-led.jpg)

:::tabs

@tab Connect to the gateway c3 via WiFi connectivity.

- Download and install the [Gateway config tool for Android](tech.md) 
- Open the app and tap on "Add a gateway"
- Grant the Location permission so the app can fill the WiFi SSID your phone connected automatic
- Fill the WiFi password for current WiFi SSID

<img src="https://i1.aprbrother.com/gwc3/conf-wifi.jpg" width="500">

- Tap "start" button and wait minutes. It should display "Found a gateway" if successful
- Configure the gateway with the tool

@tab Connect to the gateway c3 via USB cable

Note: **Wire the gateway to your laptop with USB-C cable first. The USB cable for Android phone is a good choice.**

- Download and install the [Gateway config tool for PC](tech.md) 
- Open the config tool and click "More" -&gt; "Setup WiFi with cable" -&gt; "Connect gateway with cable"

<img src="https://i1.aprbrother.com/w/gw-wifi.png">

- Fill the WiFi SSID and WiFi password. Click "Submit"
- The gateway will connect to WiFi if the SSID and password are ok. 


:::

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
