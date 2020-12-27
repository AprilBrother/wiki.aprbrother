

 Note: The Firmware BlueBeacon was renamed to AprilBeacon.

## ChangeLog

### 2.0.1 (04/21/2014)

  - Important change\! Remove the original pair passcode for Bluetooth.
    Replace the passcode with AT command `AT+AUTH` .
  - Fix a bug for read battery level.
  - Fix a bug for change TX power.
  - Add characteristic `0xFFF8` for input AT command.
  - New AT commands:
      - AT+RESET - Reset the AprilBeacon.
      - AT+DPLOY - The AprilBeacon will be un-connectable util next
        restart.
      - AT+AUTH - Input the passcode for change the module to editable.
        The default passcode is `AprilBrother`. It can be modified by
        0xFFF6.
  - Add mac address in the Bluetooth service `Device Information ->
    System ID` (0x180A -\> 0x2A23).

