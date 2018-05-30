<languages/>

Firmware AprilBeacon

## Features

  - Default proximityUUID for iBeacon :
    `E2C56DB5-DFFB-48D2-B060-D0F5A71096E0`
  - Default major/minor identifier : 0
  - Default measured power : -59

## 如何修改iBeacon的参数

可通过蓝牙连接UUID为`FFF0`的service，修改iBeacon广播参数。修改后需要重启模块才可以生效。

固件2.0版本以上，需要向0xFFF8写入`AT+AUTHAprilBrother`之后，模块的内容才可编辑

### Characteristics

  - FFF1 - read/write proximityUUID
  - FFF2 - read/write major identifier
  - FFF3 - read/write minor identifier
  - FFF4 - read/write measured power
  - FFF5 - read/write tx power
  - FFF6 - write passcode
  - FFF7 - read/write advertising frequency
  - FFF8 - write AT command (Added in version 2.0.1)

## 下载

### Firmware For AprilBeacon 201/202

注意：AprilBeacon 202/202基站有一个复位按钮和一个CR2450电池座。这里提供的固件不能用于BlueBeacon
101，否则会变砖。

  - AprilBeacon 2.0.1
      - [AprilBeacon 2.0.1 for 201/202
        imgA](http://aprbrother.qiniudn.com/iBeacon-cc2540-2.0.1-imgA.bin?download)
      - [AprilBeacon 2.0.1 for 201/202
        imgB](http://aprbrother.qiniudn.com/iBeacon-cc2540-2.0.1-imgB.bin?download)

## 相关链接

  - [ChangeLog for Firmware
    AprilBeacon](/ChangeLogForFirmwareAprilBeacon "wikilink")