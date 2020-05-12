## General

### 什么是iBeacon?

iBeacon是苹果公司开发的一种通过低功耗蓝牙技术进行一个十分精确的微定位技术。通过此技术设备可以接收一定范围由其他iBeacons发出来的信号，同时也可以把你的信息在一定范围内传给其他用户。所有搭载有蓝牙4.0以上版本和iOS7的设备都可以作为iBeacons技术的发射器和接收器

四月兄弟公司的Android和iOS 7 SDK
包含各自的readme文件，详述了关于如何安装和使用SDK的步骤。另外,每个平台的SDK包含详细的文档。
readme.md files; Android iOS 7 SDK documentation; Android iOS
7

### iBeacon如何工作？

Beacon广播信号包含UUID,major,和minor值。低功耗蓝牙技术可以让设备在beacon的范围内检索到它的信号,商家可以通过beacon应用将需要交互的数据推送到设备中。

### iBeacon的广播包格式?

参考[iBeacon Packet](iBeacon_Packet.md)

### 四月兄弟AprilBeacon用户手册

请下载用户手册[1](https://i1.aprbrother.com/userguidechinese.pdf?download)

### 如何维护April Beacons？

四月兄弟公司开发了免费的[iBeacon维护系统](http://skymap.aprbrother.com/)供大家使用。使用介绍请参照文章[如何维护一套iBeacon系统](http://www.chinaibeacons.com/index.php?a=shows&catid=1&id=54)

### 如何查看固件的版本号

通过AprilBeacon应用查看固件的版本号。

### 为什么修改了beacon的UUID后，就找不到了？

iOS系统不能识别所有的beacon的UUID.
需要将修改后的UUID加入白名单。以AprilBeacon应用为例，通过配置界面，将beacon修改后的UUID加入白名单，就可以找到那个beacon啦。

### 四月兄弟公司的April Beacons符合苹果公司的iBeacon的规范吗？

是的，我们公司所有beacon产品都是通过苹果公司的认证的，都可以应用在iPhone和iPads上。

### 如何校准AprilBeacon?

请参考 [校准Blog](http://blog.aprbrother.com/p/95)

### 如何获得April Beacon的最佳部署效果?

请参考 [如何获得April
Beacon的最佳部署效果](http://blog.aprbrother.com/p/75)

### 电池的使用时间一般是多长？

通常情况下，测试电池可以续航至3个月。对于松下等电池，续航时间可达6个月。

### 室内定位需要有多精确？

室内定位需要有多精确，大多取决于具体的使用用途和场景。Beacon信号的接收范围大到50-70米，小到10英寸，可以说是比较精准的。根据特定的使用场景来考虑定位的精确度是非常重要的。例如，如果在博物馆里部署Beacon,我们可能需要游客距离特定的展画，雕像或者装置很近的时候才推送相应消息，而在一个饭店中，我们可能需要给在店内的所有客户推送信息。

### 什么是UUID?

一个信标可以用三个自定义的值来唯一标识，他们分别是Proximity
UUID，Major和Minor，也可以用一个额外的内部标识作为自己的参考。由此一个地方可以用三个级别来标识。只根据Proximity
UUID,或者根据 Proximity UUID和Major,或者根据Proximity UUID，Major和Minor.
例如，用Proximity
UUID来表示整个零售公司，Major标识其下的各个商店，Minor标识商店中具体的各个货架或者不同的地点。另一个例子：用Proximity
UUID标识一个博物馆，Major表示馆内具体的展厅，而Minor用来标识展厅内具体的展品。

### 接收信标的推送信息需要我连接网络吗？

不用，用户接收信标的推送信息是不需要网络连接的，但是推送的具体内容的显示可能需要网络的连通。

### iBeacon技术会侵犯个人隐私吗？

iBeacon广播信息只包含UUID,
major和minor值，是单向的广播，beacon设备和iOS设备之间通过iBeacon技术的通信不是双向的，beacon是不能接收用户信息的。用户手机的应用响应由iBeacon广播触发的推送是另外一个范畴的事情，类似于使用现有的geofencing技术。

### 四月兄弟公司的beacon外壳防水吗？外壳还有其他颜色吗？

目前我们的外壳是不防水的，有白色和黑色带Logo“ab”或不带logo的几种。如果您需要其他颜色的外壳或者想将您公司的Logo印在外壳上，请直接联系我们，邮箱：Contact@aprbrother.com

### Beacon的应用开发有什么要求？

Beacond的应用程序需要能够检索到beacon的信号并且获得UUID值、位置和其他信息。它可以在后台运行并能根据离beacon的远近来触发不同的推送。它的应用非常广泛：室内导航、近场营销和自动签到等。

### Beacon应用需要开启蓝牙吗？

必须的！通常大多数用户总是开着蓝牙和Wi-Fi.如果他们不想接收跟beacon有关的应用，只需要关掉蓝牙，就不会被打扰了。

### 用户必须要有应用才能跟beacon交互吗？

是的，用户只有安装了支持beacon的应用才有交互可能性。如果没有安装应用，智能手机会忽略beacon发送的任何信号。

### 为了检索到beacon的信号，应用必须在手机屏幕上启动运行吗？

不需要。应用运行在后台仍可以接收beacon的信号。这个方式类似于卫星定位或者地理围栏技术。

### 哪些智能手机和平板电脑可以与beacon实现交互？

从技术上来讲，所有支持蓝牙4.0的设备都能检索到低功耗蓝牙的信号。蓝牙技术联盟有相关的名单。最普遍的是：iPhone 4S,iPhone 5
及以上,iPad 3,Samsung Galaxy S III及以上和Motorola RAZR。

### 我能得到Android和iOS系统的SDK吗？

Yes, we can give you SDK for both Android 4.3 and iOS 7.0. You can
download from [SDK](https://github.com/AprilBrother)

### 什么是Measured Power?

Measured Power是一个固定值，它是在离beacon一米处的RSSI平均值。和RSSI配合计算，可以估算出比较准确的距离。

### 发射功率对应的距离？

Aprilbeacon发射功率共有4挡，分别是 0dbm, 4dbm, -6dbm, -23dbm， 对应的距离大约是
30m，60m，20m，5m。

### 获取不到beacon的推送？

1、首先检查手机是否开启了定位和蓝牙，看startRangingBeaconsInRegion之后的回调是否有值。
2、如果ranging能够得到值，尽可能的先把beacon拿远，拿到ranging都找不到的地方。
3、慢慢靠近beacon，此时应该会执行didEnterRegion（前提是调用过startMonitoringForRegion）。
4、若在后台，请确定是否允许推送通知。

## iOS

### 在iOS 7.1下检测iBeacon的一些常见问题

请查看 [在iOS
7.1下检测iBeacon的一些常见问题](Issues_with_detecting_iBeacons_in_iOS_7.1/zh.md)

### 如何使用AprilBrother的SDK之iOS?

请参看[SDK
Blog](http://blog.aprbrother.com/p/100)

### 如何测试AprilBeacon触发iPhone的推送功能？

手持手机，离开AprilBeacon足够远的距离，足够远是指手机检测不到beacon这样的距离，这时可以检测到离开beacon的事件触发推送，这时候慢慢走回AprilBeacon的附近，可以触发进入beacon范围的推送。测试应用可以是[iOS
应用BTrigger](https://itunes.apple.com/app/btrigger/id883566531)。

### April Beacon 和 App 最低需求

请参考 [April Beacons and App
Requirements](April_Beacons_and_App_Requirements.md)

## Android

## Developer

### 如何根据beacon的RSSI值估算距离?

请参考[这个主题](http://bbs.aprbrother.com/t/how-to-find-beacon-distance-by-the-received-rssi-in-android/425).
