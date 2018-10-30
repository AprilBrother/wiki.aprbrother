[← Wireless iBeacon Receiver Main
Page](Wireless_iBeacon_Receiver.md)

## Instruction

TI provides Wi-Fi Starter App for Android and iOS devices. Application
binary and source code are available for download from
<http://www.ti.com/tool/wifistarter>.

This application is the configuring side in the process of connecting a
CC31xx/CC32xx device to a specific AP using the Smart Config feature,
using a specific API from a binary library file which is available as
part as the package. In order to develop similar application for your
product, please use the following sections in this wiki page to
understand which are the APIs provided and the correct way to use them.
It is highly recommended to use the Smart Config application example,
and complete a full Smart config process before continuing any further.

The device only support 802.11 b/g/n Wi-Fi AP, 5G not support.

Please refer [the
wiki](http://processors.wiki.ti.com/index.php/CC31xx_%26_CC32xx_Wi-Fi_Starter_App)
for more information.

## Configure with Wi-Fi with default profile

The receiver will try to connect WiFi hotspot that SSID = hello and
password = 12345678.

  - Turn on the "personal hotsport mode" for your mobile
  - Change the SSID = hello and password = 12345678
  - Power on the receiver
  - Access the IP with browser if the receiver connected to your
mobile

## [Configure the Wi-Fi with SmartConfig](Configure_the_Wi-Fi_with_SmartConfig.md)

## Configure the Wi-Fi by AP mode (Need open the casing)

The SmartConfig sometime does not work. There's another method to
configure the Wi-Fi parameter. The steps will turn the device to AP
mode, it need open the casing and make some wires.

  - Open the casing
  - Short the jumper near the label "Config Mode" on the PCB.
  - Power on the receiver, it will work at AP mode
  - Check the Wi-Fi AP "mysimplelink", connect to it
  - Open the url <http://192.168.1.1> if Wi-Fi connected. You can
    configure the parameters for Wi-Fi now.
  - Please open the jumper after configure
