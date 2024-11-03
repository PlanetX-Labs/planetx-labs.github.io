---
sidebar_position: 1
---

# Hardware Status
Viewing the specific devices of your Data Hub, such as CPU, memory and storage can be found in **Hardware Status**.

<p align="center">
<img src={require("./settings-hardware-status-home.png").default} style={{transform:'scale(1.0)'}} />
</p>

At the top of this screen is an image of your device, along with the device name, or remark, you assigned to your Data Hub in [Device info](settings-device-info.md).

## 1 - Hardware Information
Selecting the *Learn more >* link located underneath the name and SN of your device will bring you to the **Hardware Information** screen.

<p align="center">
<img src={require("./settings-hardware-status-hw-information.png").default} style={{transform:'scale(1.00)'}} />
</p>

The following HW details can be found on the **Hardware Information** screen:

1. **<u>Product model</u>** - The model number of the Data Hub, assigned by the manufacturer of the device.  Helpful when needing support from the hardware manufacturer.
2. **<u>Serial Number (SN)</u>** - The Serial Number (SN) is a unique identifier for your Data Hub specifically, assigned by the manufacturer of the device.  Helpful when needing support from the hardware manufacturer.
3. **<u>MAC</u>** - The MAC Address of the network adapter in your Data Hub.
4. **<u>System Version</u>** - The version of specific hardware components of the Data Hub.
5. **<u>CPU</u>** - Make, model and operating frequency of the CPU installed in your Data Hub.
6. **<u>Memory</u>** - The amount of memory (RAM) installed in your Data Hub.

The following section shows the number of disks installed in your Data Hub.  Each disk will have the following information:

1. **<u>Capacity</u>** - The total amount of storage the disk is capable of providing.
2. **<u>Model</u>** - The model number of the disk, assigned by the manufacturer of the disk.  Helpful when needing support from the hardware manufacturer.
3. **<u>Serial Number (SN)</u>** - The Serial Number (SN) is a unique identifier for the disk specifically, assigned by the manufacturer of the disk.  Helpful when needing support from the hardware manufacturer.

## 2 - Storage used
Top-level information regarding the amount of storage currently being used on the Data Hub.  Selecting the *Learn more >* link located underneath the graph will bring you to the **Storage** screen.

<p align="center">
<img src={require("./settings-hardware-status-storage.png").default} style={{transform:'scale(1.00)'}} />
</p>

The **Storage** screen gives you detailed information regarding how much data is being stored by [Spaces](../../concepts/spaces.md) as well as by user.

## 3 - State of operation
Underneath the **Storage used** section provides detailed, realtime information about the **State of operation** of your Data Hub.  This includes CPU usage and temperature, memory usage, hard disk temperature and upload/download speeds.

Selecting the *Learn more >* link located on the right of the screen will bring you to the **State of operation** screen.

<p align="center">
<img src={require("./settings-hardware-status-operation.png").default} style={{transform:'scale(1.00)'}} />
</p>

The **State of operation** screen provides you visual representation of CPU and Memory usage followed by Download and Upload speed information. 

Depending upon your Data Hub system configuration, your system may have one or two fans.  The **Fan Speed** section shows the operating speed of the fan(s) your system has.

Lastly, the **Hard disk temperature** section provides specific temperatures measured on each of the installed hard disks in your system.  

:::warning

Temperatures exceeding 40°C for hard disk drives can shorten the lifespan of the disks.  If the hard disks in your Data Hub are regularly above 40°C, consider re-locating your Data Hub to a location with better airflow or lower ambient temperature.

:::