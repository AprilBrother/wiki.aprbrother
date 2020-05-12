## iBeacon packet structure

After 9 bytes of constant preamble, the Proximity UUID, Major and Minor values are transmitted.

UUID is 16 bytes long, Major and Minor are 2 bytes long. Together they form an ID for your iBeacon. Mobile devices recognize which Beacon they approach on the basis of these values.

Byte offset	| Default value	| Description	| Properties
----------- | ------------- | ------------- | ----------
0	| 0x02	| Data length – 2 bytes	| constant preamble
1	| 0x01	| Data type – flags	| constant preamble
2	| 0x06	| LE and BR/EDR flag	| constant preamble
3	| 0x1a	| Data length – 26 bytes	| constant preamble
4	| 0xff	| Data type - manufacturer specific data	| constant preamble
5	| 0x4c	| Manufacturer data	| constant preamble
6	| 0x00	| Manufacturer data	| constant preamble
7	| 0x02	| Manufacturer data	| constant preamble
8	| 0x15	| Manufacturer data	| constant preamble
9	| 0xb5	| Proximity UUID 1st byte	| set user UUID
10	| 0xb1	| Proximity UUID 2nd byte	| set user UUID
11	| 0x82	| Proximity UUID 3rd byte	| set user UUID
12	| 0xc7	| Proximity UUID 4th byte	| set user UUID
13	| 0xea	| Proximity UUID 5th byte	| set user UUID
14	| 0xb1	| Proximity UUID 6th byte	| set user UUID
15	| 0x49	| Proximity UUID 7th byte	| set user UUID
16	| 0x88	| Proximity UUID 8th byte	| set user UUID
17	| 0xaa	| Proximity UUID 9th byte	| set user UUID
18	| 0x99	| Proximity UUID 10th byte	| set user UUID
19	| 0xb5	| Proximity UUID 11th byte	| set user UUID
20	| 0xc1	| Proximity UUID 12th byte	| set user UUID
21	| 0x51	| Proximity UUID 13th byte	| set user UUID
22	| 0x70	| Proximity UUID 14th byte	| set user UUID
23	| 0x08	| Proximity UUID 15th byte	| set user UUID
24	| 0xd9	| Proximity UUID 16th byte	| set user UUID
25	| xx*	| Major 1st byte	| set major value
26	| xx*	| Major 2nd byte	| set major value
27	| xx*	| Minor 1st byte	| set minor value
28	| xx*	| Minor 2nd byte	| set minor value
29	| 0xc6	| Signal power (calibrated RSSI@1m)	| signal power value
