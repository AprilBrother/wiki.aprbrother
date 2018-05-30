<languages/>

注：原固件BlueBeacon现已更名为AprilBeacon

## ChangeLog

### 2.0.1 (04/21/2014)

  - 重大改动！去掉原蓝牙的配对密码。取而代之的是新增的AT指令`AT+AUTH` 来输入校验密码.
  - 修复了读取电量的bug.
  - 修复了设置TX发射功率的bug.
  - 新增 characteristic `0xFFF8` 用于输入 AT command.
  - 新增的 AT commands:
      - AT+RESET - 重启 AprilBeacon.
      - AT+DPLOY - AprilBeacon 在此指令之后会变成不可连接状态，仅发送广播，直至下次重启.
      - AT+AUTH - 输入校验密码使模块变得参数可修改. 默认校验密码是 `AprilBrother`. 这个校验密码可通过
        0xFFF6 修改.
  - 在蓝牙的服务中加入了mac地址信息 `Device Information -> System ID` (0x180A -\>
    0x2A23).