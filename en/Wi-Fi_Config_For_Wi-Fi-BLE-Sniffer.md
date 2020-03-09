[← Wireless iBeacon Receiver Main Page](Wireless_iBeacon_Receiver.md)

## Instruction

The device only support 802.11 b/g/n Wi-Fi AP, 5G not support.

## Configure with Wi-Fi with default profile

The receiver will try to connect WiFi hotspot that SSID = hello and
password = 12345678.

  - Turn on the "personal hotsport mode" for your mobile
  - Change the SSID = hello and password = 12345678
  - Power on the receiver
  - Access the IP with browser if the receiver connected to your
mobile

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
