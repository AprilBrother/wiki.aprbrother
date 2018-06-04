



## Description

AprilBeacon 302 provides a firmware update function via the USB
interface.

Note: Firmware upgrade has a risk, be careful.

## How to upgrade the firmware

Please note, this command is not reversible, entered the upgrade mode,
if you do not want to upgrade, so, you will get a 238KB super small
disk.

  - Download firmware from [the
    page](AprilBeacon_302#Downloads.md), you will get a .bin
    file
  - Plug-in AprilBeacon 302 to USB
  - Send AT command "AT+UBLUP" by serial software such as
    RealTerm/CoolTerm. AprilBeacon 302 will enter upgrade mode and do
    not accept any AT commands.
  - In the upgrading mode, the computer will add a disk, double-click
    the disk
  - Please don't move the DEFAULT.CFG file, just remove the bin file.
    After the file is deleted, the disk will temporarily disappear,
    please wait for the disk appears again, this time there is no bin
    file in the disk.
  - Copy the new firmware you downloaded to the disk. After the
    completion of the copy, AprilBeacon 302 will automatically restart,
    then enter the normal working state, the upgrade is complete.

