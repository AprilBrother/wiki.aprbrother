<languages/>



Firmware AprilBeacon

## Features

  - Default proximityUUID for iBeacon :
    `E2C56DB5-DFFB-48D2-B060-D0F5A71096E0`
  - Default major/minor identifier : 0
  - Default measured power : -59

## How to change iBeacons UUID

You can connect the service UUID `FFF0`, change the params for
advertise.

For version 2.0 or greater version, You should write
`AT+AUTHAprilBrother` to 0xFFF8 to make the module writeable.

### Characteristics

  - FFF1 - read/write proximityUUID
  - FFF2 - read/write major identifier
  - FFF3 - read/write minor identifier
  - FFF4 - read/write measured power
  - FFF5 - read/write tx power
  - FFF6 - write passcode
  - FFF7 - read/write advertising frequency
  - FFF8 - write AT command (Added in version 2.0.1)

## Downloads

### Firmware For AprilBeacon 201/202

Note: The AprilBeacon Module 201/202 has a reset button and a CR2450
battery holder. The firmware cannot be used for BlueBeacon 101.

  - AprilBeacon 2.0.1
      - [AprilBeacon 2.0.1 for 201/202
        imgA](http://aprbrother.qiniudn.com/iBeacon-cc2540-2.0.1-imgA.bin?download)
      - [AprilBeacon 2.0.1 for 201/202
        imgB](http://aprbrother.qiniudn.com/iBeacon-cc2540-2.0.1-imgB.bin?download)

## Related Links

  - [ChangeLog for Firmware
    AprilBeacon](ChangeLogForFirmwareAprilBeacon.md)

