## Firmware change logs for AB BLE Gateway V4 

### v1.5.15 ###

* Static IP settings are also effective for WiFi connections

### v1.5.14 ###

* Fix a bug for custom DNS not work if DHCP is disabled.

### v1.5.13 ###

* Change data structure to compatible with previous v1.4.x. Move the RSSI field to the end of data

### v1.5.12 ###

* Add MQTT OTA update command `ota`

### v1.5.11 ###

* Add MQTT query command `query/dev` for query device information

### v1.5.10 ###

* Add an option "enable/disable ping" for checking network connection

### v1.5.9 ###

* Turn off LED default for old batch of gateway

### v1.5.8 ###

* Add options `sign-in type`, `username`, `password` for 4G gateway

### v1.5.7 ###

* Supports MDNS. The name is `xbg-XXXXXX`. 
* Supports work period
* Supports clear MAC address filter with MQTT remote config

### v1.5.3 ###

* Fix a bug for no device data if device soft restart
* Support customize metadata if request format is JSON
* Add `ICCID` data for 4G gateway

### v1.5.2 ###

* Can save WiFi SSID contains `&`
* Add MNC and MCC options for 4G gateway

### v1.5.0 ###

* Add sensor mode for advertising filter. Supports Xiaomi sensor only
* Fix a bug for upload interval
* Report the RSSI of WiFi connection when upload with WiFi
* For 4G version Gateway
  * Read IMEI, ICCID of SIM card. 
  * Add APN option

### v1.4.15 ###

* Fixes a bug for active scan

### v1.4.14 ###

* Improve network connection
* Blink the internal LED if smartconfig is enabled
* Supports query config parameters via MQTT

### v1.4.13 ###

* Fixes an issue for save long length certificate

### v1.4.12 ###

* Improve 4G connection for 4G version

### v1.4.11 ###

* Support MQTT QoS option
* Support configure WiFi with ESPTouch and WeChat AirKiss

### v1.4.10 ###

* Support MQTT retain option
* Support advetising manufacture ID filter
* Update ethernet driver
* Gateway's API Support basic authentication. It's disabled default
* Fixes a bug for connect WPA2 enterprise

### v1.4.9 ###

* Support HTTPS/MQTTS/WSS option
* Support long upload interval which up to 30 minutes
* Fixes a bug for send heartbeat packet

### v1.2.5.29 ###

* Fix heartbeat time interval when request interval greater than 2 seconds
