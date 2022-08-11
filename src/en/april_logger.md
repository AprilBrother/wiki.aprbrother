# April logger - UART SD logger

The logger is a data logger that allows you to log serial data from your project. It logs to a microSD card and is compatible with high capacity cards. It can also transfer log to remote server via WiFi connection. It's based on espressif's `ESP32 C3` chip with WiFi, USB support. The board can be plugged in via Type-C USB to program directly.

This board comes with a DS1302 RTC module provides real-time information. You need solder a external battery for activate the module.

The logger ships with basic serial text. Users can easily start with this firmware. It's a truly easy to use logger.

`Placeholder for the photo`

## Hardware overview ##

### Power ###

The supply voltage can be 3.3V or 5V. It has a 3.3V power input and a 5V input. There's an low dropout 3.3V regulator behind the 5V power input.

It can also be powered with USB.

### Type-C USB connector ###

When connected to a computer using a Type-C cable, it can be used to program the logger directly. This will appear like a UART port once the board is turned on. 

The board can also be powered with USB port.

### Button ###

The board has a button wires to `GPIO9`. Hold on the button and connect the board to a computer, it can be program mode. You can use the button and USB port together to program the board.

## Logging configuration ##

### Configuring config.json file ###

The `config.json` allows you to control how the logger records data to the microSD card. Let's go over the different settings. It's written in JSON format.

An example:

```
{
  "wifi_ssid": "YOUR-WIFI",
  "wifi_password": "YOUR-PASS",
  "conn_type": 3,
  "wifi_type": 0,
  "broker_host": "mqtt.bconimg.com",
  "broker_port": 1883,
  "username": "",
  "password": "",
  "topic": "abtest",
  "heartbeat_time": 20
}

```

## Resources ##

* [Hardware files](https://github.com/AprilBrother/ab-hardware/tree/master/april-logger)
