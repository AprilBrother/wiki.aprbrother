[← Wireless iBeacon Receiver Main
Page](/Wireless_iBeacon_Receiver "wikilink")

<languages/>

## WiFi-Sniffer用户使用说明

WiFi-Sniffer是一款搜索附近ibeacon信息并通过无线网络将数据上传到MQTT服务器的设备，它能够搜索附近半径30m范围内的所有ibeacon信息，但每次只上传20条ibeacon信息到服务器。从服务器读取数据后进行解析可以应用到自己的开发当中。此文章主要是帮助客户配置和使用WiFi-Sniffer(Wireless
iBeacon Receiver)。

## 准备

  - 安装[Wi-Fi Starter
    APP](https://itunes.apple.com/app/texas-instruments-simplelink/id884122493?mt=8)的手机
  - WiFi-Sniffer设备(包括电源和数据线)
  - beacon设备
  - [mosquitto for
    windows](http://mosquitto.org/files/binary/win32/mosquitto-1.3.5-install-win32.exe)软件

## 操作

#### 安装Wi-Fi Starter软件

安装[Wi-Fi Starter
软件](https://itunes.apple.com/app/texas-instruments-simplelink/id884122493?mt=8)，安装后如下图

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559ohqd60j306y080wep.jpg>

图1

#### 设备上电

将配套的电源、数据线、WiFi-Sniffer设备连接好上电，没有配置网络的情况下绿灯是不亮的，并且在黄灯亮起来后才可以进行网络的配置，如果黄灯未亮请重新上电，或换一条USB电源线，状态如下

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559ohzbmej307g06pweg.jpg>

图2

#### 使用Wi-Fi Starter软件配置网络、查看设备

  - 打开Wi-Fi Starter软件，输入你的WiFi SSID和密码，点击下面的Start按钮开始配置

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559oil49oj30cz0c73yx.jpg>

图3

  - 配置完成后如下图所示

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559oj1ci3j305m09m74a.jpg>

图4

  - 配置完成后WiFi-Sniffer的绿灯亮起来，并且每隔10S(默认)上传一次数据到MQTT服务器

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559ojtsu8j307b077q2x.jpg>

图5

  - 点击Wi-Fi
    Starter页面下方的Devices选项可以看到刚刚配置完成的设备，名称中会显示设备的MAC地址，找到和设备后面贴的MAC地址相同的名称点击就可对设备进行设置，也可以在点击后通过IP地址在电脑上进行设置

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559okg53ej30ad09mjrj.jpg>

图6

  - 点击上图的F4B85E03F1EE@mysimplelink
    设备名称后进入设备配置界面

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f562o2jm65j308v08vaak.jpg>

图7

#### 在电脑上配置WiFi-Sniffer

  - 打开浏览器在地址栏输入获得的IP地址，进行配置，进入后是Overview页面，显示一些基本信息，固件版本号、工作模式、设备MAC地址、接入点IP等

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f562o3o4ckj30fc05iwex.jpg>

图8

|                  |                      |
| ---------------- | -------------------- |
| Fiemware Version | WiFi-Sniffer 固件版本号   |
| System Up Time   | 上传数据的更新时间，刷新页面才会更新时间 |
| Device Mode      | WiFi-Sniffer 工作模式    |
| MAC Address      | WiFi-Sniffer MAC地址   |
| Access Point IP  | 接入点IP                |
|  |

  - 进入Profiles页面进行配置WiFi 的相关配置

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559oowvcgj30ff0470sp.jpg>

图9

|                  |                            |
| ---------------- | -------------------------- |
| SSID             | WiFi 的名称                   |
| Security Tpye    | 保密类型 Open\\WEP\\WPA1\\WPA2 |
| Security Key     | WiFi密码                     |
| Profile Priority | 优先级 0 – 7 0优先级最高           |
|  |

上面参数配置完成后点击Add即配置完成，可以在下面的Profiles列表中看到配置的WiFi
参数，当设备重启后生效，以后WiFi-Sniffer就可以在列表中显示的无线环境中工作并上传beacon信息到MQTT服务器中。

<http://ww3.sinaimg.cn/mw690/006kIg7Xjw1f559osigblj30f7063wei.jpg>

图10

也可以将配置的无线参数移除，点击前面的复选框，点击Remove Selected Profiles 即可删除无线参数。

  - 进入Setup配置页面

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559oss0ocj30f9081wet.jpg>

图11

1、在System选项下进行设备的一些性能设置

  - Auto Update --- 自动更新 ON / OFF

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559ot6rlfj30a9038glm.jpg>

图12

  - Work Mode ---- 上传beacon信息的格式 Full Mode/Simple Mode/RAW Mode

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1f559owl1q1j30dm026gln.jpg>

图13

  - Request Interval ---- 请求时间间隔/扫描间隔 默认10s 可以根据需要自行修改 1—10s

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p03s0yj308505iq2y.jpg>

图14

  - Min RSSI Filter --- 最小RSSI值过滤器，过滤设定值之外的beacon信息，默认为Default

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p0ggo3j30a803ngll.jpg>

图15

  - iBeacon UUID Filter --- UUID 过滤器 只搜索指定UUID的beacon信息并上�

<http://ww3.sinaimg.cn/mw690/006kIg7Xjw1f559p0xql2j30fd016jr8.jpg>

图16

上述参数修改完成之后点击 提交 按钮

2、在MQTT选项下可以配置自己的服务器

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p11ddyj30ch04pjrf.jpg>

图17

|               |           |
| ------------- | --------- |
| MQTT Broker   | 服务器域名和端口号 |
| MQTT Uername  | 登录服务器用户名  |
| MQTT Password | 登陆服务器密码   |
| Topic         | /beacons  |
|  |

修改完成后点击 提交
按钮

#### 从MQTT服务器上读取上传的beacon信息

安装[mosquitto](http://mosquitto.org/files/binary/win32/mosquitto-1.3.5-install-win32.exe)软件，安装后在命令行模式下进入mosquitto的安装目录
输入以下命令即可产看beacon信息 输入的命令: mosquitto_sub.exe -h mqtt.bconimg.com -t
"/beacons"

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1f559p2hn47j30hu081di5.jpg>

图18

显示的beacon信息格式如下
{"id":"F4B85E03F1EE","v":"0.10","mid":5260,"raw_beacons_data":"123B6A1A6E33B5B182C7EAB14988AA99B5C1517008D90001336EC5FFBD;}
这是一组json 数据

|                    |                                 |
| ------------------ | ------------------------------- |
| id                 | WiFi-Sniffer的MAC地址 F4B85E03F1EE |
| v                  | WiFi-Sniffer 的固件版本0.10          |
| mid                | 上传的次数                           |
| raw_beacons_data | beacon的数据信息                     |
|  |

Beacon信息解析

|             |                       |                                    |
| ----------- | --------------------- | ---------------------------------- |
| 字节(16进制数位数) | 描述                    | Example                            |
| 1 - 12      | Beacon的MAC地址          | `123B6A1A6E33`                     |
| 13 - 44     | Beacon的UUID           | `B5B182C7EAB14988AA99B5C1517008D9` |
| 45 - 48     | major                 | `0001`                             |
| 49 - 52     | minor                 | `336E`                             |
| 53, 54      | 电压测量                  | C5                                 |
| 55, 56      | 电池电量百分比,当电池电量未知的时候为FF | FF                                 |
| 57, 58      | RSSI值                 | BD                                 |
|  |

## 常见问题及解决办法

1、设备上电后黄灯不亮，可能是供电不足，请使用我们配套的电源和USB电源线

2、无法联网(绿灯不亮)，请将设备重新上电，如果还是无法联网的话可能是在配置网络时未成功，请重新使用 WiFi-Starter
配置一下网络

3、如果经过上述两步仍无法连接到网络，您需要看看您的网络是否是2.4G的网络，我们的设备只能工作在2.4G的无线网络下。您可以试试将自己的WiFi名称改成hello,WiFi密码改成12345678，或者将手机4G热点名称改成hello,密码改成12345678。将WiFi-Sniffer放置到新设置的WiFi环境中，重新上电后看能否连接上网络(绿灯亮)，如果能连接到网络说明设备没有问题，您需要查看您的网络问题。