[← AB BLE Gateway V3 Main Page](AB_BLE_Gateway_V3.md)

## 使用步骤

  - 使用电源+网线方式连接网络，绿色灯亮表示已经开机网络连接正常.
  - 打开路由器寻找连接到网络的客户端 hostname 为 AB_BLE_GATEWAY 找到相应 ip.
  - 浏览器打开 上一步找到的 ip地址.
  - 打开ABBLEGATEWAY 登录页面 登录用户名密码(默认:admin,123456)

### Dashboard

  - SERIAL NUMBER 设备序列号
  - MAC 设备MAC地址
  - VERSION 设备版本
  - UPLOAD 当前上传方式
  - CPU TEMPERATURE CPU温度
  - MEM 设备可用内存
  - SD 设备当前磁盘剩余量

### 上传设置

#### aws 设置

  - 点击aws Tab按钮
  - endpoint aws后台设置的 endpoint
  - topic aws后台设置的topic
  - rootCA aws ca 证书 aws后台提供
  - cert aws后台提供cert证书
  - key aws 后台提供
  - Frequency 上传频率

点击保存 提交到设备

#### http(https) 设置

  - 点击http Tab按钮
  - Http Host:http服务器地址(ip 或者域名不带协议)
  - Port:提供http服务的服务器端端口
  - Path:数据提交到服务器的路径
  - SSL:是否启用SSL
  - ca CA证书
  - cert CART证书
  - key KEY 证书
  - Frequency: 提交频率

注意;数据是以 http multipart/form-data 的方式提交到服务器的 数据存储在 http协议 body上面
点击保存,重启设备

#### mqtt (mqtts)设置

  - 点击mqtt Tab按钮
  - MQTT Host:mqtt服务器地址(ip 或者域名不带协议)
  - Port:提供http服务的服务器端端口
  - Topic:数据提交到broker的topic
  - ClientID:设备clientid
  - QoS:mqtt协议Qos
  - Auth 是否启动 用户名密码认证
  - username Auth用户名
  - password Auth密码
  - SSL 是否启动SSL认证
  - ca broker提供的ca证书
  - cert broker提供的cert证书
  - key broker提供的key证书
  - Frequency: 提交频率

点击保存,重启设备

#### websocket(wss)设置

  - 点击websocket Tab按钮
  - Websocket Host:websocket服务器地址(ip 或者域名不带协议)
  - Port:提供websocket服务的服务器端端口
  - Path:websocket 服务器提供的path上传路径
  - SSL 是否启动SSL认证
  - ca broker提供的ca证书
  - cert broker提供的cert证书
  - key broker提供的key证书
  - Frequency: 提交频率

点击保存,提交到设备.

### 设置 setting

设置 ble rssi的过滤