[← a4 button main page](../a4-button.md)

# Quick start for a4 button #

## Compile your own firmware ##

1. Register a GitHub user if you do not have one
1. Open the repo [a4-button](https://github.com/AprilBrother/a4-button) with browser
![a4 button repo](https://i1.aprbrother.com/w/a4-repo.png)
1. Use the repo template to generate your own repository.
1. Browser to the file `secrets.yaml`, click `Edit this file`
   * Modify `wifi_ssid` and `wifi_pass` 
   * Modify `mqtt_broker`
   * Click `Commit changes...`
1. Click `Actions` and wait the build finish
1. Click the latest workflow and browse to the bottom of the page, it should show `Artifacts` which contains the compiled firmware files. Download the file and unzip the file. It should contains the `ota.bin` file.
   
## Update firmware for a4 button ##

1. The a4 button is sleep with factory firmware. Press the button to wakeup. You will see the LED is on a while. It means a4 button wake up and works as AP modete. 
1. Connect the WiFi `a4 button`. The WiFi password is `12345678te. 
1. Open the link `http://192.168.4.1` with browsete. 
1. Scroll the page down to OTA update. 
1. Choose the file `ota.bin` and click `Update`. Wait for firmware update
1. Now the a4 button is ready for your use.  
