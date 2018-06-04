

## 简介

YuePixels是运用最新的WiFi技术的LED控制器。我们可以方便的在电脑或手机上播放音乐，控制WS2812灯串随着音乐律动显示频谱。

<img src="https://dn-abcdn.qbox.me/wp-content/uploads/2016/06/yuepixels_5.jpg" width="600">

## 特点

  - WiFi控制WS2812灯串，不需要安装其它软件，直接采用电脑或手机控制
  - 跟随音乐律动控制灯串显示波形
  - 控制方式, YuePixels做AP或STATION两种模式
  - 支持固件空中升级，未来可以扩充添加更多功能

## 参数

|          |                           |
| -------- | ------------------------- |
| Name     | Parameters                |
| 工作电压     | DC直流 5V/2A 或 5V/3A        |
| 输出电压     | DC直流5V                    |
| 工作模式     | 支持STA/AP/STA+AP工作模式       |
| 安全模式     | WPA/WPA2                  |
| 频率范围     | 2.412GHz -- 2.484GHz      |
| WiFi控制距离 | 室内50米                     |
| 支持手机系统   | IOS7,安卓2.3及以上             |
| 工作温度     | \-20℃ - 65℃               |
| 电源输入端    | 5.5\*2.5 DC母头, 里面是正极外面是负极 |
|  |

## LED指示灯状态

  - 上电时，控制板上的指示灯会短暂亮起
  - 按下配置按键(Mode)后，指示灯会慢速闪烁，此时可以采用YuePixels应用配置WiFi参数，如果配置网络参数成功，手机上会提示分配给YuePixels驱动板的IP，同时LED指示灯停止闪烁

<img src="https://dn-abcdn.qbox.me/wp-content/uploads/2016/06/yuepixels_6.jpg" width="600">

## 使用说明

上电后，YuePixels会同时工作于WiFi的AP和STATION模式。

### YuePixels做为AP时

  - 打开电脑或手机，搜索名称为yuepixels的wifi热点并连接，默认密码为12345678
  - 连接成功后，在浏览器上打开控制网页 <http://192.168.4.1>
  - 点击"SELECT SONGS TO PLAY"选择mp3格式的歌曲（可以选择多首），开始播放。此时灯串会随着音乐律动开始变化

### YuePixels做为STATION时

  - 按下YuePixels上的配置(Mode)按键，此时LED指示灯会开始慢闪
  - 打开手机应用YuePixels，输入你的WiFi热点名称(SSID)和密码(Password)，如果热点是隐藏的，请选中 (SSID
    is hidden)，然后点选Confirm，如果配置网络成功，手机应用上会提示对应的设备IP，同时LED指示灯停止闪烁
  - 连接成功后，假设获得的IP是192.168.1.123，那么在浏览器上打开控制网页， <http://192.168.1.123>
  - 点击"SELECT SONGS TO PLAY"选择mp3格式的歌曲（可以选择多首），开始播放。此时灯串会随着音乐律动开始变化

## 进阶使用说明

YuePixels工作于websocket服务器模式，可以采用流行的开发语言发送灯串控制信号。控制8 x 8 =
64个LED的颜色，相当于一个64像素的显示屏。

## 常见问题

### Q:为什么灯串的会停止变化，此时音乐仍在播放

A: 请注意将播放网页置于当前网页，如果切换到了其它网页后面，会停止播放