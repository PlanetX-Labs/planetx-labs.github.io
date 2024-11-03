---
sidebar_position: 1
---

# Device Info
The **Device info** section will provide you with details regarding general information about the Data Hub currently being accessed.  The below shows all of the information available to a user who has the **Owner** or **Manager** role for the Data Hub.  Users with the **Member** role will show less information, with some settings being unavailable.

<p align="center">
<img src={require("./settings-device-info.png").default} style={{transform:'scale(1.00)'}} />
</p>

Settings and information presented in the **Device info** screen are categorized into 2 areas:

- General 
- Network 

## General 
Under the **General** group, the following sections are available:

### Device Name
This is the name of the Data Hub, which is visible to all users on the [Devices Screen](../../concepts/devices-screen.md).  Changing this name will be global to all users unless they have set their own **Remark** for the Data Hub.

### Remark
This is a personalized label for the Data Hub, allowing a user to give a Data Hub they have joined a custom name of their choosing, without it being visible to other users.

For example, the image below shows that the default **Device Name** for new users joining this Data Hub will show as *5G Labs*.  However, this user changed the **Remark** to *PlanetX Labs Demo Box*, and shows as such when viewed in the DASSET application.

<p align="center">
<img src={require("./settings-device-info-remark.png").default} style={{transform:'scale(1.00)'}} />
</p>

### Owner
This is the user account that has the [Owner](../../concepts/roles-permissions.md) role of the Data Hub.  Useful in situations where you need your permissions changed on the device.

### Joined on
This is the date the Data Hub was initially set-up by the [Owner](../../concepts/roles-permissions.md).

## Network
Under the **Network** group, the following sections are available:

### Virtual IP
DASSET Data Hubs construct a virtual network, which ensures direct, private communication between devices and the Data Hub.  The **Virtual IP** is the IP address given to Data Hub in the virtual network. 

### LAN IP
This is the IP address assigned to the Data Hub by your network's home or business router.  This is the IP address you use to connect to your Data Hub from a Windows or MacOS device, using [SAMBA](../apps/samba.md).

### Domain name
Each DASSET Data Hub has a domain name assigned by PlanetX Labs, which can be used for communicating with the Data Hub over the internet.

### Serial Number (SN)
This is the serial number given to the Data Hub by its manufacturer.  The SN is used by DASSET to provide manufacturer-specific features, such as applications and access to customer support.

