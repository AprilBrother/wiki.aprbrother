## Introduction

  - iBeacon Certified - All features of iBeacon supported.
  - ProximityUUID/major/minor/advertising interval configuable
  - Maintenance Cost and Maximum battery life
      - Using Dialog DA14580 chips, in same Tx power and Advertising
        interval configuration, double or triple battery lifetime of
        Nordic nrf51822 chips. Six battery lifetime of TI CC254x chips.
      - Fine tuned antenna, optimized transmit strength, covering same
        range using lower Tx power.
      - CR2450 coin cell battery
(500mAh)

## Technology Specification

|                                                  |                                                  |
| ------------------------------------------------ | ------------------------------------------------ |
| Name                                             | Parameters                                       |
| Chip                                             | Dialog DA14580                                   |
| Dimensions                                       | Diameter 31mm, Thickness 9mm                     |
| Protocol standard                                | BLE Through the iBeacon certification |
| System Requirements                              | iOS7.0 or above/ Android 4.3 or above            |
| Security                                         | Suport password for configure parameters         |
| TX Power                                         | 0dBm                                             |
| Transmission Range                               | Up to 35m                                        |
| Broadcast Frequency (Broadcasting time interval) | Adjustable (100~1285ms)                          |
| Supply Voltage                                   | 3.0V                                             |
| Battery                                          | CR2450 Battery                                   |
|  |

## Features

### Low power consumption

The power consumption of the different advertising events and the sleep
modes of the Beacon device. The tests have been executed using the
output power set to 0 dBm.

The Beacon device uses the non-connectable advertising mode (Beacon
mode). In this mode, the AprilBeacon DA transmits advertising packets in
all three advertising PHY channels without listening for packet
reception. Avoiding the reception process results in improved power
consumption compared with connectable advertising mode. When using
connectable advertising (Peripheral mode), the Rx slots are used, which
has an impact on the energy consumption as shown in upper
table.

|                                           |                 |          |         |
| ----------------------------------------- | --------------- | -------- | ------- |
| Event                                     | Average current | Duration | Charge  |
| Beacon mode (non-connectable advertising) | 967uA           | 9.85ms   | 9.53uC  |
| Peripheral mode (connectable advertising) | 967uA           | 12.56ms  | 12.15uC |
| Connection event                          | 590uA           | 10.02ms  | 5.92uC  |
| Extended sleep mode                       | 1.34uA          | \-       | \-      |
|  |

<img src="https://i1.aprbrother.com/da_power_1.png-640.jpg">

<img src="https://i1.aprbrother.com/da_power_2.png-640.jpg">

<img src="https://i1.aprbrother.com/da_power_3.png-640.jpg">

Based on the different scenarios and the power consumption measurements
shown in upper talbe, the expected lifetimes of CR2477 and CR2032 coin
cell batteries have been
calculated.

|                                             |                      |                                   |                                  |
| ------------------------------------------- | -------------------- | --------------------------------- | -------------------------------- |
| Scenario                                    | Advertising interval | Battery lifetime CR2477 (1000mAh) | Battery lifetime CR2032 (240mAh) |
| 1 Tx peripheral mode per 3 Tx BEACON events | 100ms                | 13.5 months                       | 3.5 months                       |
| 1 Tx peripheral mode per 3 Tx BEACON events | 500ms                | 60 months                         | 17.5 months                      |
| 1 Tx peripheral mode per 3 Tx BEACON events | 1000ms               | 120 months                        | 35 months                        |
|  |

### Configurable by App AprilBeacon

Download [app AprilBeacon from Apple App
Store](https://itunes.apple.com/app/aprilbeacon/id847517010?mt=8) for
configure AprilBeacon.

### Downloads

  - [Firmware 3.0.9 for EEK
    beacon](https://i1.aprbrother.com/eek_fw_2.img) -
    support Line beacon service

### FAQ

#### Q: Is EEK beacon can be program again?

A: EEK beacon is based on DA14580 from DialogSemi. DA14580 is designed
for OTP (One-Time-Programming). It can't be program again. You can buy
our blank device for write your own custom firmware.

#### Q: Is 6 pins on the PCB ready for JTAG programming header?

A: Yes. There's two jumpers for switch UART / JTAG programming.
