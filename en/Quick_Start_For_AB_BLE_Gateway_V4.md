[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

## Usage

  - Prepare a power adapter 5V/2A. Please note the the current 2A is required
  - Wire gateway with ethernet cable. Please use the micro USB cable as power cable. Wire the cable to power adapter. Don't wire the cable to Laptop directly. It may cause weak power. It means the gateway connected to LAN network if yellow LED around the ethernet port is on.
  - Install configure tool at your laptop
  - Click at application, you can see some configure options

## How To Test

  - Change application settings for gateway and save
      - Application Type -\> MQTT Client
      - MQTT Host -\> `mqtt.bconimg.com`
      - MQTT Port -\> 1883
      - Publish Topic -\> your-topic
  - Download and install [data viewer
    software](http://7fvk57.com1.z0.glb.clouddn.com/ble-viewer-setup-v1.0.0.exe.zip)
  - Fill the form with the parameters in first steps
  - View the data from
gateway

<img src="http://7fvk57.com1.z0.glb.clouddn.com/ble-viewer.png" width="480">

