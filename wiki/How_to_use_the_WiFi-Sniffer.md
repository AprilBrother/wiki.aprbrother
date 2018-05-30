[← Wireless iBeacon Receiver Main
Page](Wireless_iBeacon_Receiver.md)





## Introduction

WiFi-Sniffer is a device that searches for nearby ibeacon information
and uploads data to the MQTT server over a wireless network. It can
search for all ibeacon information in the vicinity of the radius of 30M,
but uploads only 20 ibeacon data to the server at a time. The data read
from the server can be analysed and applied to your development. This
article is to help you to configure and set up WiFi-Sniffer (Wireless
iBeacon Receiver).

## Software and hardware preparation

  - Install [Wi-Fi Starter
    APP](https://itunes.apple.com/app/texas-instruments-simplelink/id884122493?mt=8)
    in your cell phone for WIFI connection
  - WiFi-Sniffer devices (including power and data lines)
  - beacon device
  - [mosquitto for
    windows](http://mosquitto.org/files/binary/win32/mosquitto-1.3.5-install-win32.exe)
    software

## Let's go

#### Install Wi-Fi Starter software

`Install `[`Wi-Fi`` ``Starter``
``software`](https://itunes.apple.com/app/texas-instruments-simplelink/id884122493?mt=8)`,  it shows as below after installation`

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559ohqd60j306y080wep.jpg>

Figure1 WiFi Starter App logo showed as above on your cell phone

#### Power on the device

When you first connect power supply and USB connector to Wi-Fi-Sniffer,
you should see red and yellow led blink. Otherwise please check power
connection, or change a USB connector. When the yellow led is on, the
device prepare for connecting Wi-Fi AP. Configure the Wi-Fi SSID and
password by app Wi-Fi Starter. The status is as follows

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559ohzbmej307g06pweg.jpg>

Figure 2 The green led won’t blink, only red and yellow led blink when
it is first powered
on.

#### Use the Wi-Fi Starter software to connect WiFi and detect the devices

  - Open app Wi-Fi Starter, type in SSID and password and tap
Start.

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559oil49oj30cz0c73yx.jpg>

`* Choose the smart config interface`
`* Input your WiFi SSID(click the eye logo can show the input content)`
`* Input your WiFi password`
`* Tap start button to configure`

Figure 3

  - Wait a moment, the app will receive a notification for device
    discovering, now Wi-Fi config ok. (Note: Only work with 2.4G Wi-Fi
    AP)

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559oj1ci3j305m09m74a.jpg>

Figure 4

  - The green LED start blink after configure is done. The device upload
    data to MQTT broker per 10 seconds (default setting)

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559ojtsu8j307b077q2x.jpg>

Figure 5

  - Tap the Devices option at the bottom of the Device Configuration
    interface, you will see the devices which has just been configured.
    The device name contains its MAC address. Choose the name same as
    the Mac address sticker on the back of Wi-Fi sniffer, tap it to
    enter configuration interface.

Eg. Click on the F4B85E03F1EE @ mysimplelink to enter the device
configuration interface

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559okg53ej30ad09mjrj.jpg>

Figure 6 The IP address will be showed on the top of the
interface.(which is used for configuration by computer)

  - Tap F4B85E03F1EE@mysimplelink device name to enter the configure
    page for the device

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f562o2jm65j308v08vaak.jpg>

Figure 7

Right now, The Wi-Fi sniffer has connected to WiFi successfully.You can
see the overview info of this Wifi Sniffer as showed in Figure 6. We can
add more WiFi connection and set up for updating beacons info on next
step.

Let’s explain how to configure Wifi sniffer by IP address on computer

#### Configure WiFi-Sniffer on your computer

  - Open the browser in the address bar to enter IP address obtained,
    you will enter the Overview page the same as Figure 6.

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f562o3o4ckj30fc05iwex.jpg>

Figure 8

|                  |                                            |
| ---------------- | ------------------------------------------ |
| Fiemware Version | Firmware version for WiFi iBeacon Receiver |
| System Up Time   | Device start time                          |
| Device Mode      | working mode                               |
| MAC Address      | MAC address                                |
| Access Point IP  | Access Point IP                            |
|  |

  - Go to the Profiles page to add a new WiFi connection

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559oowvcgj30ff0470sp.jpg>

Figure 9

|                  |                                          |
| ---------------- | ---------------------------------------- |
| SSID             | The name of the WiFi                     |
| Security Tpye    | Security Type Open\\WEP\\WPA1\\WPA2      |
| Security Key     | WiFi Passord                             |
| Profile Priority | Priority 0 - 7 0 is the highest priority |
|  |

After typing all parameters, click Add to submit. You can see all WiFi
connections in the following Profiles list. The settings take effect
after sniffer restart. The WiFi-Sniffer can work in the wireless
environment in the list and upload the beacon information to the MQTT
server.You can also remove the wifi setting as you need.

<http://ww3.sinaimg.cn/mw690/006kIg7Xjw1f559osigblj30f7063wei.jpg>

Figure 10

You can also remove the wifi setting as you need.

  - Go to the Setup page for beacons data updating

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559oss0ocj30f9081wet.jpg>

Figure
11

`* In System section you can set beacon data update interval, filter beacon name and other parameters.`
`* Auto Update  --- Automatic update firmware `

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559ot6rlfj30a9038glm.jpg>

Figure
12

`* Work Mode  ---- upload beacon information format Full Mode / Simple Mode / RAW Mode`

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559owl1q1j30dm026gln.jpg>

Figure
13

`*  Request Interval  ---- Scan interval is default 10s, it can be modified according to your needs 1-10s`

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p03s0yj308505iq2y.jpg>

Figure
14

`* Min RSSI Filter --- Filter the beacon by RSSI value. the default is Default`

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p0ggo3j30a803ngll.jpg>

Figure
15

`* iBeacon UUID Filter --- Searches for beacon information for specified UUID and upload.`

<http://ww3.sinaimg.cn/mw690/006kIg7Xjw1f559p0xql2j30fd016jr8.jpg>

Figure 16

After the above parameters are modified, click the submit button

2、In the MQTT option you can set your own server

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p11ddyj30ch04pjrf.jpg>

Figure 17

|               |                                   |
| ------------- | --------------------------------- |
| MQTT Broker   | Server name or IP for MQTT broker |
| MQTT Uername  | username                          |
| MQTT Password | password                          |
| Topic         | /beacons                          |
|  |

Click the submit button when the modification is complete.

#### Read the uploaded beacon information from the MQTT server

Install
[mosquitto](http://mosquitto.org/files/binary/win32/mosquitto-1.3.5-install-win32.exe)
software.

  - Open command line mode by cmd
  - Change directory to the installation directory of mosquitto
  - Enter command to view beacon data

\<code mosquitto_sub.exe -h mqtt.bconimg.com -t "/beacons" </code>

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p2hn47j30hu081di5.jpg>

Figure 18

The beacon information format is as
follows:

`{"id":"F4B85E03F1EE","v":"0.10","mid":5260,"raw_beacons_data":"123B6A1A6E33B5B182C7EAB14988AA99B5C1517008D90001336EC5FFBD;}`

This is a set of json
data

|                    |                                                    |
| ------------------ | -------------------------------------------------- |
| id                 | Mac address for WiFi iBeacon Receiver F4B85E03F1EE |
| v                  | Firmware version 0.10                              |
| mid                | The number of times to upload                      |
| raw_beacons_data | Beacon data information                            |
|  |

Parsing beacon
data

|                         |                                                            |                                    |
| ----------------------- | ---------------------------------------------------------- | ---------------------------------- |
| Byte(hexadecimal digit) | description                                                | Example                            |
| 1 - 12                  | Mac address for Beacon                                     | `123B6A1A6E33`                     |
| 13 - 44                 | Beacon UUID                                                | `B5B182C7EAB14988AA99B5C1517008D9` |
| 45 - 48                 | major                                                      | `0001`                             |
| 49 - 52                 | minor                                                      | `336E`                             |
| 53, 54                  | measured power                                             | C5                                 |
| 55, 56                  | Battery level in percent, FF when battery power is unknown | FF                                 |
| 57, 58                  | RSSI                                                       | BD                                 |
|  |

## [Frequently Asked Questions and Solutions](http://wiki.aprbrother.com/wiki/Wireless_iBeacon_Receiver_Troubleshooting_and_FAQ)

