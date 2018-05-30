[← Wireless iBeacon Receiver Main
Page](/Wireless_iBeacon_Receiver "wikilink")

## Description

Azure IoT Hub enables devices to communicate with the IoT Hub device
endpoints using the MQTT v3.1.1 protocol on port 8883 or MQTT v3.1.1
over WebSocket protocol on port 443. IoT Hub requires all device
communication to be secured using TLS/SSL (hence, IoT Hub doesn’t
support non-secure connections over port 1883).

See more details at [Communicate with your IoT hub using the MQTT
protocol](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-mqtt-support)

## About the MQTT protocol for Azure IoT Hub

Wireless iBeacon Receiver can support IoT Hub after firmware v0.16.

  - For the ClientId, receiver use AB_{macaddr} as ClientId, for
    example: `AB_1234567890AB`.
  - For the Username field, use
    `{iothubhostname}/{device_id}/api-version=2016-11-14`, where
    `{iothubhostname}` is the full CName of the IoT hub. For example, if
    the name of your IoT hub is contoso.azure-devices.net and if the
    name of your device is AB_1234567890AB, the full Username field
    should contain
    `contoso.azure-devices.net/AB_1234567890AB/api-version=2016-11-14`.
    Unfortunately, the username is too long for Wireless iBeacon
    Receiver, only support maximum to 58 bytes username. You can't set
    to the username for receiver directly.
  - For the Password field, use a SAS token. The format of the SAS
    token: `SharedAccessSignature
    sig={signature-string}&se={expiry}&sr={URL-encoded-resourceURI}`.
    Unfortunately again, the password is also too long (129+ bytes\!\!)
    for receiver. You can't set to the password for receiver directly.

## Setup the MQTT protocol for Azure IoT Hub

### Setup an Azure IoT Hub

  - Prepare A Microsoft Azure Account
  - Setup an Azure IoT Hub
  - Once the IoT Hub is created, navigate into it and:
      - Click on the key icon at the top of the blade
      - In the next blade, click on the iothubowner entry
      - Copy the Connection string-primary key to your
        clipboard
        <img src="http://7fvk57.com1.z0.glb.clouddn.com/AzureIoTConnectionString.png" width="95%">

### Install Azure IoT Hub DeviceExplorer

Azure IoT Hub only allows connections from known devices that present
proper credentials. In this lab series you will use either the
DeviceExplorer utility or the iothub-explorer command line interface to
provision a device for use in Azure IoT Hub. While Azure IoT Hub
supports multiple authentication schemes, you will use pre-shared keys
in this lab series.

The simplest way to provision a new device is with the DeviceExplorer
utility (Windows only). If you are using Windows, download and run
Device Explorer. After running the installed, the DeviceExplorer.exe can
be found at C:\\Program Files (x86)\\Microsoft\\DeviceExplorer. When you
run the utility you need to input the iothubowner connection strong
(from the previous step) in the IoT Hub Connection String field found in
the Configuration
tab.

<img src="http://7fvk57.com1.z0.glb.clouddn.com/deviceexplorer01.png" width="95%">

### Create a New Azure IoT Device

WiFi iBeacon Receiver use `AB_{macaddr}` as ClientId. The ClientId is
equal to Azure IoT device ID. Let's say the mac address for your WiFi
iBeacon Receiver is `1234567890AB` (see the label at the back side of
receiver). You must create a device that has device ID
`AB_1234567890AB`.

Open DeviceExplorer, open the Management tab and click the Create
button. In the dialog that opens, enter the name of your device -
something like `AB_1234567890AB` works well. Then Click the Create
button, and click Done on the confirmation dialog that
opens.

<img src="http://7fvk57.com1.z0.glb.clouddn.com/deviceexplorer02.png" width="95%">

You will see your device in the Devices list. Once a device is created,
you can get the device-specific connection string by selecting it in the
Devices list.

### Get Password For IoT device

  - Open the IoT Hub page you created, navigate into it and:
      - Click on the key icon at the top of the blade
      - In the next blade, click on the device entry
      - Copy the Connection string-primary key to your clipboard
  - Open DeviceExplorer
      - Click the tab "Configuration"
      - input the Connection string-primary key to "IoT Hub Connection
        String", click update
      - click "Generate SAS"
      - Let's say the token is `SharedAccessSignature
        sr=blah.azure-devices.net&sig=ltT7NLRkMWM%2FoOYVy%2Bfv5uHypcLMcm%2F31wkiEuyxUuw%3D&se=1519363284&skn=device`.
        The password is too long for Wireless iBeacon Receiver. The
        quick and dirty way for compatible with receiver, use
        `1519363284` as username, use
        `ltT7NLRkMWM%2FoOYVy%2Bfv5uHypcLMcm%2F31wkiEuyxUuw%3D` as the
        password.

### Setup MQTT For Wireless iBeacon Receiver

  - Open setup page for receiver
  - Input your MQTT broker, for example: blah.azure-devices.net
  - Change the MQTT port to 8883
  - Input username 1519363284 and password
    `ltT7NLRkMWM%2FoOYVy%2Bfv5uHypcLMcm%2F31wkiEuyxUuw%3D`. Note: these
    are not really username and password.
  - The topic must be in this format
    `devices/AB_1234567890AB/messages/events/yourTopic`
  - Choose option "Use Azure IoT Hub", receiver will reorganize these
    information above and post correct username and password to azure
    IoT Hub.
  - Submit and restart the receiver

## Relative Links

  - [Setting Up Azure IoT Hub](http://thinglabs.io/setup-azure-iot-hub/)