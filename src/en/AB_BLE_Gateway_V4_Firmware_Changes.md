## Firmware change logs for AB BLE Gateway V4 

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
