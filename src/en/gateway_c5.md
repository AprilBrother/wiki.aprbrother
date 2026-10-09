# Gateway c5 #

Gateway C5 is a versatile BLE gateway that supports two working modes: **Scanning** and **Connection**. It seamlessly captures the BLE data and transmits it to a local area network or internet server, enabling efficient data collection and monitoring for various application scenarios.

::: warning
The gateway supports both Scanning and Connection functionality, but it can only work in **one mode at a time**. You need to choose the mode that fits your use case.
:::

It supports WiFi connection (both 2.4GHz and 5GHz) and easy to installation. User can configure the transmit period and server information through a simple configure tool.

## Features ##

:::tabs

@tab Features of Scanning Gateway

The scanning gateway can scan nearby BLE broadcast packets, such as iBeacon, Eddystone, or custom broadcast data formats, and upload them to the server via HTTP or MQTT.

- Wi-Fi Connectivity (2.4GHz / 5GHz)
- Support HTTP/MQTT protocol
- Reads multiple BLE devices in the same time and upload to remote server
- User-Friendly Configuration Tool: The Gateway comes with a user-friendly configuration tool that provides a graphical interface for easy setup.

## How it works ##

```mermaid
flowchart LR
B[AB Gateway]
bleDevices["
Beacon
BLE device
N20
N02
N06
ABSensor
"]
cloud(("☁️: Cloud
HTTP/MQTT/Websocket
"))
bleDevices-. BLE boradcast .->B
B <-. WiFi .-> cloud
```
## Performance ##

* Scan duration = 1 second
* Upload maximum 170 ~ 180 advertsing data per second

## Applications ##

- iBeacon/Eddystone/tag receiver for location tracking
- BLE sensor reader for sensor network
- Building automation
- Health and wellness monitoring
- Cycling, biking
- Security
- Location tracking
- Access management
- Advertisement
- Industrial automation
- Indoor Location
- Meeting sign in
- Check in
- Parking & Checking in
- Home automation

@tab Features of Connection Gateway

The connection gateway is a high-performance device specifically designed to connect with BLE low-energy sensors. It can connect with various BLE sensors via the GATT protocol to obtain real-time key health information, such as heart rate and cadence, and upload the data to the server via the MQTT protocol. It supports WiFi connectivity (2.4GHz and 5GHz), ensuring stable and reliable data transmission.

* Supports simultaneous connection of up to 9 BLE devices
* Effective connection radius of 15 meters without obstruction
* Connects with various BLE sensors via the GATT protocol to obtain real-time physiological data such as heart rate and cadence
* Supports Wi-Fi connectivity (2.4GHz / 5GHz)
* Supports HTTP/MQTT protocols
* Can simultaneously read multiple BLE devices and upload data to a remote server
* User-friendly configuration tool: The gateway comes with a user-friendly configuration tool that provides a graphical interface for easy setup.
* Suitable for various environments such as gyms and homes, meeting different user needs.

## How it works ##

```mermaid
flowchart LR
B[AB Gateway]
bleDevices["
Heart Rate Monitor
Cadence Sensor
Temperature & Humidity Sensor
...
"]
cloud(("☁️: Cloud
HTTP/MQTT
"))
B-- BLE connection -->bleDevices
B <-. WiFi .-> cloud
```

## Applications ##

* Health Monitoring: Suitable for environments such as gyms, hospitals, and homes, providing real-time monitoring of users' health metrics.
* Sports Analysis: Offers precise data support for athletes, helping to optimize training effectiveness.
* Remote Healthcare: Provides remote monitoring solutions for medical institutions, enabling better patient management.

@tab Specifications

- Size: 59mm * 59mm * 11mm
- Power Input: DC 5V/2000mA, USB-C port
- Operating temperature: -20°C to 55°C
- Network connection: WiFi (2.4GHz / 5GHz)
- BLE 4.2
- Firmware upgrade: OTA

:::

## Documents And Links ##

- [Quick start](gwc3/quickstart.md)
- [Software and technical documents](gwc3/tech.md)
- [Support Forum](https://bbs.aprbrother.com/c/wifi)
