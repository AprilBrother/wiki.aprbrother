[← ESPea Main Page](/ESPea_And_Shields "wikilink")

## Description

The BMP280 sensor can measure barometric pressure and temperature with
very good accuracy. This shield is good match with ESPea, ESPea32. It
also has nice
size.

<img src="https://blog.aprbrother.com/wp-content/uploads/2016/12/bmp280-1-600x600.jpg" width="400">

<img src="https://blog.aprbrother.com/wp-content/uploads/2016/12/bmp280-size.png">

## Technical Details

  - Size 15.62mm x 25.58mm

## Pinouts

I2C Data Pins

  - SCL - D1
  - SDA - D2

These pins can be shared with other I2C devices.

The I2C address is 0x77 and can be changed by jumper.

## Example Codes

Work with Arduino

  - Install Libraries Adafruit_BMP280 and Adafruit_Unified_Sensor
    with Library Manager (Sketch -\> Include Library -\> Manage
    Libraries)
  - Run example sketch bmp280test (Example -\> Adafruit_BMP280 -\>
    bmp280test)

## Links

  - [Hardware
    files](https://github.com/AprilBrother/ESPea-BMP280-Shield)