## Cactus Micro Rev2+DHT11 使用教程

### 硬件资源

1、 硬件列表

  - DHT11温湿度传感器 x1
  - Cactus Micro Rev2 x1
  - 面包板 x1
  - 锂电池 x1

<http://ww3.sinaimg.cn/mw690/006kIg7Xjw1ez8jfv2s9lj30b20c6jt9.jpg>

图1

2、Cactus Micro Rev2引脚说明(如下图2所示)

<https://i1.aprbrother.com/pinouts-txt.jpg>

图2

3、DHT11温湿度传感器引脚说明(如下图3所示)

<http://ww4.sinaimg.cn/mw690/006kIg7Xjw1ez8jfvvrr8j304i050jrg.jpg>

图3

    Pin1 ---- VCC  3—5.5V DC供电
    Pin2 ---- DATA 数据输出
    Pin3 ---- NC
    Pin4 ---- GND

### 软件资源

  - [DHT11 库](https://github.com/amengcool/libraries/tree/master/DHT11)

将DHTlib文件夹拷贝到Arduino/libraries下

  - [espduino
    库](https://github.com/amengcool/libraries/tree/master/espduino)

将espduino文件夹拷贝到Arduino/libraries下

  - [thinkspeak.ino](https://github.com/amengcool/OpenCode/tree/master/thingspeak)
  - <https://thinkspeak.com>

在thinkspeak上观察温湿度变化的折线图

### 硬件连接

硬件连接参考下图4

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1ez8jfy60ekj30ac0dpq4r.jpg>

图4

引脚连接说明(参考上面的图2和图3)

```
        DHT11        Cactus Micro Rev2
        Pin1  ----------   4(A6)
        Pin2  ----------   3(SCL)
        Pin3  ----------   NC
    Pin4  ----------   GND

        电池         Cactus Micro Rev2
        正极  ----------   RAW
    负极  ----------   GND
```

### [烧写ESP03模块的固件](http://wiki.aprbrother.com/wiki/How_to_made_Cactus_Micro_R2_as_ESP8266_programmer)

### 将Cactus Micro Rev2采集到的温湿度数据上传到thinkspeak

  - 打开<https://thingspeak.com> 登录后点击Channels下的New Channel 按钮(如下图所示)

<http://ww1.sinaimg.cn/mw690/006kIg7Xjw1ez8jfyuzhkj30cu04l0t1.jpg>

图5

  - 进入Create Channel页面后进行相关设置

<http://ww3.sinaimg.cn/mw690/006kIg7Xjw1ez8jg0dffmj30e805i0td.jpg>

图6

填写完上述信息之后点击页面最下方的Save Channel按钮 保存设置

注:在thingspeak中，每个channel可以指定8个栏位，分别是Field 1 ~~ Field
8,点击每个栏位后面的复选框才能使之变成有效。

  - 将API Keys选项下面的Write API Key复制到thinkspeak.ino程序的api_key设置处

<http://ww1.sinaimg.cn/mw690/006kIg7Xjw1ez8jg1i5kgj30dw07egm0.jpg>

图7

例如复制上图中的 Write API Key,填写到程序中的`sprintf(buff,
"/update?`**`api_key=123456789ABCD`**`&field1=%s&field2=%s", str_hum,
str_temp);`处

  - 打开IDE
    在[thinkspeak.ino](https://github.com/AprilBrother/espduino/tree/master/examples/thingspeak)中添加对应引脚设置并修改自己的WiFI名称和密码，之后烧写到Cactus
    Micro Rev2中，打开串口工具查看相关信息当DHT11正常发送数据时，打开ThinkSpeak中的Private
    View选项卡可以在Channel Stats下可以看到一段时间内温湿度变化的折线图(如下图所示)

<http://ww2.sinaimg.cn/mw690/006kIg7Xjw1ez8jg2xetcj30bb0fq75r.jpg>

图8
