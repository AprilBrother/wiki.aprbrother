<languages/>

<translate>

## Instroduction

YuePixels is newest WiFi technology LED driver. You can control WS2812
led strips at PC or mobile by web player and very
easy.

<img src="https://dn-abcdn.qbox.me/wp-content/uploads/2016/06/yuepixels_5.jpg" width="550">

## Features

  - Control WS2812 led strips through Wifi, no other app or software
    needed, control by web page directly
  - Default player will output music visualizer signal
  - Control mode, YuePixels work as AP or STATION
  - OTA support

## Specification

|                       |                        |
| --------------------- | ---------------------- |
| Name                  | Parameters             |
| Work Voltage          | DC 5V/2A or 5V/3A      |
| Output Voltage        | DC 5V                  |
| Work Mode             | STA/AP/STA+AP          |
| Security Mode         | WPA/WPA2               |
| Frequency             | 2.412GHz -- 2.484GHz   |
| WiFi Control Distance | Indoor 50 meters       |
| Work Temperature      | \-20℃ - 65℃            |
| Power Input Interface | 5.5\*2.5 female header |
|  |

## LED Status

  - LED is on shortly when power on
  - LED will start blink slowly after button Mode pressed, you can use
    app YuePixles configure WiFi parameters. If WiFi configuration ok,
    the led will stop
blink.

<img src="https://dn-abcdn.qbox.me/wp-content/uploads/2016/06/yuepixels_6.jpg" width="600">

## Usage

YuePixels work at WiFi AP and STATION mode after power on.

### YuePixels Work As AP

  - Open PC or mobile and search WiFi named "yuepixels" and connect,
    default password is 12345678
  - Open web page <http://192.168.4.1> after WiFi connected
  - Click "SELECT SONGS TO PLAY" to choose mp3 files and start play. The
    ws2812 led strips will play with fun

### YuePixels Work As STATION

YuePixels only support 2.4G WiFi spot.

  - Press the Mode button on YuePixels, the led will start blink slowly
  - Open mobile app YuePixels, input your WiFi name and password. If the
    WiFi is hidden, please check the checkbox "WiFi is hidden". Click
    "Confirm"
  - The app will pop an alert window if network is ready and led stop
    blink
  - Let's say the IP for YuePixels is 192.168.1.123, then open the
    control page at browser, <http://192.168.1.123>
  - Click "SELECT SONGS TO PLAY" to choose mp3 files and start play. The
    ws2812 led strips will play with fun

## Advance Usage

YuePixels work as websocket server mode, you can use popular language
such as javascript to control the led strips.

## FAQ

### Q: Why led strips will stop blink but the player still worked

A: Please put the player web page to foreground. For Chrome, you can
split a single window for the player tab.

</translate>

## Links

  - [Source Code](https://github.com/AprilBrother/YuePixels)