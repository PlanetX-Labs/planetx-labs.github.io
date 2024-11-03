---
sidebar_position: 1
---

# LAN Settings
Viewing and configuring how your DASSET Data Hub is accessible on your home or business network is available through the **LAN Settings** screen.

<p align="center">
<img src={require("./settings-lan-settings.png").default} style={{transform:'scale(1.0)'}} />
</p>

The **Settings Home** screen provides access to view and modify settings that are categorized into 3 areas:

- LAN access account
- LAN IP Management
- Dual-port link aggregation

## LAN Access Account
In the [SAMBA](.././apps/samba.md) feature of DASSET, you are able to set and configure multiple options in order to make your Windows or MacOS device have direct access to your Data Hub on your home or business network.  The **LAN Access Account** allows you to change the password of your SAMBA account just as you would be able to do in the [SAMBA](.././apps/samba.md) feature of DASSET.

## LAN IP Management
Under the **LAN IP Management** group, the following sections are available:

1. **<u>Mode</u>** - Routers and wi-fi access points today use [Dynamic Host Configuration Protocol (DHCP)](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) which automatically assigned IP addresses to all of the devices on your network.  By changing the **Mode** of your DASSET Data Hub, you can manually apply settings, such as fixed IP addresses or custom DNS Servers.

<p align="center">
<img src={require("./settings-lan-settings-ip-management.png").default} style={{transform:'scale(1.0)'}} />
</p>

:::danger

The **Mode** capability in **LAN IP Management** is intended for individuals who understand networking technology and have specific needs to change these settings due to unique network configurations.  It is not recommended for most users to change these settings.  Doing so incorrectly can make your Data Hub inaccessible from your local area network.

:::

2. **<u>IP</u>** - Shows the IP address of our Data Hub, which is used to access your Data Hub from your local area network.
3. **<u>Subnet Mask</u>** - The Subnet Mask of the network your Data Hub is connected to.
4. **<u>Gateway</u>** - Usually the IP address of the wi-fi access point or router that your Data Hub is connected to.

## Dual-Port Link Aggregation
If you have a network environment where you have more than one connection to the internet, you can use **Dual-Port Link Aggregation** which uses both internet connections for your Data Hub which increases your upload and download speeds.  

In addition to having two internet connections, your DASSET Data Hub will need to have two network access ports in order to support **Dual-Port Link Aggregation**.