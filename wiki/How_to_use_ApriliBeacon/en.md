<languages/>

## General

### What is iBeacon?

iBeacon is a technology which Apple calls "a new class of low-powered,
low-cost transmitters that can notify nearby iOS 7 devices of their
presence". They can also be used by the Android operating system
(limited to central-only).

April iBeacon's Android and iOS 7 SDK include respective readme files
that provide SDK installation and usage steps. Additionally, each
platform's SDK is well documented. readme.md files; Android iOS 7 SDK
documentation; Android iOS 7

### How does it work?

April beacon broadcast a signal which contain the UUID, major, and minor
values. Bluetooth 4.0 LE enabled devices in the beacon's range are able
to pick up this signal, and businesses can choose what interaction to
deliver to the device via their app.

### User Guide of AprilBeacon?

Please download User Guide of AprilBeacon
[1](http://abcdn1.qiniudn.com/UserguideofAprilBeacon0818.pdf?download)

### How to maintain April Beacons?

April Brother provide free ibeacon maintenance system [iBeacon
Maintenance System](http://skymap.aprbrother.com/) The system detail,
please refer to [Maintenance
article](http://www.chinaibeacons.com/index.php?a=shows&catid=1&id=54)

### How to get firmware version?

View the firmware version via app AprilBeacon.

### Why beacon is not visible after UUID changing?

iOS can't recognize all proximityUUID of beacons. You need add modified
UUID to the whitelist. In AprilBeacon App, go to setting interface, add
new modified UUID to the whitelist.

### Do these April beacons support the Apple iBeacon profile?

Yes\! We are officialy licensed by Apple and all beacons we ship are
iBeacon-compatible and work seamlessly with iPhones and iPads.

### How to calibrate AprilBeacon?

Please refer to [Calibration Blog](http://blog.aprbrother.com/p/95)

### How to achieve successful deployment of April Beacon?

Please refer to [Deployment Blog](http://blog.aprbrother.com/p/75)

### How long does a battery last for April Beacon?

Normally, for testing cell battery, it should last up to 3 months. For
Panasonic cell battery, it should last up to 6 months.

### How precise should the indoor location be?

It very much depends on your intended use and the immediate
surroundings, but you could detect the presence of beacons as far away
as 50-70 meters or as little as 10 inches, so it could be very accurate.
It’s super important to consider your specific use case. For example: if
you’re placing beacons in a museum, you probably don’t want users to be
pinged with notifications until they’re really close to a particular
painting, sculpture, or an installation. In a restaurant, however, you’d
most likely prefer to reach all your customers in the room.

### What is a UUID?

A beacon identifies itself using three customizable values: Proximity
UUID, Major and Minor; there is also an additional Internal Identifier
for your own reference. Therefore you have three levels to identify a
micro-location: only Proximity UUID, Proximity UUID and Major, or
Proximity UUID and Major and Minor. For example, Proximity UUID
identifies your entire retail company, Major identifies a specific store
and Minor specify individual shelves or different points inside each
store. Another example: Proximity UUID identifies your museum, Major
identifies a specific gallery within the museum and Minor identifies an
exhibit within that
gallery.

### Do I need to be connected to the internet to receive beacon notifcations?

No, Users do not need an internet connection to receive a notification
from a beacon. But there might be content 'behind' the notification that
will need an internet connection.

### Does using iBeacon technology put user’s private data at risk?

iBeacon advertisements only contain UUID, major and minor values. This
is a unidirectional broadcasting; there is no bidirectional
communication between a beacon device and an iOS device via iBeacon
technology, therefore iBeacon technology cannot be used to receive by a
beacon to receive information from a user. What an app does in response
to a notification triggered by an iBeacon advertisement is a separate
matter, but this is no different from using existing geofencing
technologies.

### Is the April Beacon case waterproof? Do they come in other colors?

Our beacon’s case is not waterproof for now. We have white and black
cases with or without logo “ab” available. If you would like other
colors or put your logo on the cases, please contact us directly. Mail
to Contact@aprbrother.com

### What kind of apps could be developed with the beacons?

Your app is able to pick up a beacon's signal and retrieve data such as
UUID, location and other information. It could do it in the background
and trigger different actions depending on the proximity of the beacon.
The possibilities are endless - indoor navigation, proximity marketing,
automatic check-ins.

### Do the beacons need Bluetooth to be turned on?

Indeed\! We assume that most consumers always have both Bluetooth and
Wi-Fi on. If they don't want their phones to interact with the
beacon-enabled apps, they could easily turn off the Bluetooth for all
the apps or for the annoying one.

### Do consumers need an app in order to interact with beacons?

Yes\! Interaction is possible only if consumers have any smartphone apps
on that support our beacons. Without the app, the smartphone will simply
ignore any signals from
beacons.

### Does the app need to be active on the screen in order to pickup signals?

No\! The app could run in the background and still receive beacons
signals. The general behavior is very similar to satellite-based
location and geofencing.

### Which smartphones and tablets will interact with beacons?

Technically, all Bluetooth 4.0-enabled devices could pick up the BLE
signals. Bluetooth Special Interest Group maintains a list of all
devices that support Bluetooth Low Energy. The most popular are iPhone
4S, iPhone 5 or later, iPad 3, Samsung Galaxy S III and Motorola RAZR.

### Can I get SDK for Android and iOS?

Yes, we can give you SDK for both Android 4.3 and iOS 7.0. You can
download from [SDK](https://github.com/AprilBrother)

### What is Measured Power?

Measured Power is a constant which indicates what's the expected RSSI at
a distance of 1 meter to the beacon. Combined with RSSI, this allows to
AprilBeacon the actual distance between the device and the beacon.

### 发射功率对应的距离？

Aprilbeacon发射功率共有4挡，分别是 0dbm, 4dbm, -6dbm, -23dbm， 对应的距离大约是
30m，60m，20m，5m。

### 获取不到beacon的推送？

1、首先检查手机是否开启了定位和蓝牙，看startRangingBeaconsInRegion之后的回调是否有值。
2、如果ranging能够得到值，尽可能的先把beacon拿远，拿到ranging都找不到的地方。
3、慢慢靠近beacon，此时应该会执行didEnterRegion（前提是调用过startMonitoringForRegion）。
4、若在后台，请确定是否允许推送通知。

## iOS

### Issues with detecting iBeacons in iOS 7.1

Please look [this
link](/Issues_with_detecting_iBeacons_in_iOS_7.1 "wikilink") if you have
issues with detecting iBeacons in iOS 7.1.

### How to use AprilBeacon's SDK for iOS?

Please refer to [SDK for iOS Blog](http://blog.aprbrother.com/p/100)

### How to trigger notifications for AprilBeacon on iPhone?

Holding your cellphone，leave April Beacon enough distance where it can't
be detected. You can experience the trigger notification of leaving the
beacon. When you walk back April beacon closely, you will trigger the
notification of entering the range of beacon. The trigger App:[iOS App
BTrigger](https://itunes.apple.com/app/btrigger/id883566531)。

### April Beacon and App Requirements

Please refer to [April Beacons and App
Requirements](/April_Beacons_and_App_Requirements "wikilink")

## Android

## Developer

### How to find beacon distance by the received RSSI?

Please [check the
topic](http://bbs.aprbrother.com/t/how-to-find-beacon-distance-by-the-received-rssi-in-android/425).