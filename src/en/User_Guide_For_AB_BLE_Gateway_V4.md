[← AB BLE Gateway V4 Main Page](AB_BLE_Gateway_V4.md)

## Performance

* Scan duration = 1 second
* Upload maximum 210 advertsing data per second with Ethernet wire
* Upload maximum 150 advertsing data per second with WiFi connection

## Data Format

Gateway V4 post data in [MessagePack](https://msgpack.org/) format. MessagePack is an efficient binary serialization format. It lets you exchange data among multiple languages like JSON. But it's faster and smaller. We can get more library for programming languages to parse MessagePack.

### Keys

The data decoded is a dictionary with these keys:

  - v - firmware version
  - mid - message ID
  - time - boot time
  - ip - the IP for gateway
  - mac - the mac address for gateway
  - rssi - the RSSI of WiFi connection for gateway. It appears when using WiFi connection from firmware v1.5.0
  - iccid - the ICCID of 4G module. It appears when using 4G connection from firmware v1.5.3
  - devices - an array for BLE advertising datas that gateway collected

The devices array contain RAW advertising data for BLE device. An example hex data frame, see the section "Data Format For Key Devices"

`00 12 3b 6a 1a 64 cf aa 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5`

| Bytes      | Description                           | Example |
| ---------- | ------------------------ | ------------------ |
| byte 1     | advertising type, see the table below | 00 |
| byte 2 - 7 | mac address for BLE device            | `12 3b 6a 1a 64 cf` |
| byte 8     | RSSI, minus 256 for real value        | aa, 0xaa - 256 = -86 |
| byte 9 -   | Advertisement data                    | 02 01 06 1a ff 4c 00 02 15 b5 b1 82 c7 ea b1 49 88 aa 99 b5 c1 51 70 08 d9 00 01 cf 64 c5 |


#### Example data for key devices

An example data from devices array 

hex data : `02C8FD1949A530CE0201061AFF4C000215EB6D469624BE4663B15230D46B0E9CC9000D002AC0`

| Data | Description |
| --- | --- |
| 02 | adv type |
| C8FD1949A530 | mac address |
|   CE | rssi |
|   0201061AFF4C000215EB6D469624BE4663B15230D46B0E9CC9000D002AC0 | raw advertising data |

### Advertising Type Code

| Code | Description                              |
| ---- | ---------------------------------------- |
| 0    | Connectable undirected advertisement     |
| 1    | Connectable directed advertisement       |
| 2    | Scannable undirected advertisement       |
| 3    | Non-Connectable undirected advertisement |
| 4    | Scan Response                            |

## Configuration options ##

### Application options ###

#### Advertising filter ####

1. Allow All Advertising Data: scan all data, default
2. iBeacon Only: scan iBeacon data only. Please search iBeacon protocol for more information
3. Eddystone UID Only: scan Eddystone UID only
4. Eddystone URL Only: scan Eddystone URL only
5. Sensor mode, supports some Xiaomi sensor: Experimental feature, scan only xiaomi sensors such as temperature/humidity sensor
6. iBeacon And Eddystone TLM Plain: scan iBeacon And Eddystone TLM Plain data only
7. Eddystone UID And Eddystone TLM Plain: scan Eddystone UID And Eddystone TLM Plain only
8. Eddystone URL And Eddystone TLM Plain: scan Eddystone URL And Eddystone TLM Plain only

For more information about eddystone protocol, please check [the specification](https://github.com/google/eddystone/blob/master/protocol-specification.md)

#### Manufacture Filter ####

The general structure of advertising packets is described in Bluetooth Advertising Data Basics. 
Manufacturer-specific data can be used to add any custom data into advertising packets in any format suitable for your application. For example, you could create a beacon that includes the reading of a temperature sensor in the advertising data.

See the image below which contains company ID 02FF for company Silicon Labs. You can input "Manufacture Filter" = 02FF to scan the advertising data only

![advdata](https://i1.aprbrother.com/advdataex1.png)

## Hardware

### LED Status

The ethernet port has a green LED and a yellow LED. 

| Color |  Description |
| ---------- | ------------------------ | 
| Green | Blink when ethernet start | 
| Yellow | Turn on when it got IP address | 

### Schematic And PCB Layout

* [Schematic](https://github.com/AprilBrother/ab-hardware/tree/master/ab-ble-gateway-v4)
* PCB Layout for Gateway V4. The microcontroller is ESP32 and NRF52832.

![PCB Layout](https://i1.aprbrother.com/gw4-layout.png)

![PCB dimension](https://i1.aprbrother.com/gw4-dimension.png)

### Pinouts

| Pinouts | Description |
| --- | --- |
| J3 | I2C ports for ESP32 module |
| P2 | Program pins for ESP32 module |
| P3 | Program pins for NRF52832 module |
| P4 | UART ports for NRF52832 module |

#### J3 pinouts

PCB v5.4

* VCC
* GND
* GPIO16
* GPIO04

PCB v5.3

* VCC
* GND
* GPIO07
* GPIO06


