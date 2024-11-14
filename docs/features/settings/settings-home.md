---
sidebar_position: 1
---

# Settings Screen
After logging into your account and connecting to a Data Hub, you can access the **Settings** of the Data Hub to control specific behavior and hardware features of the device.  You can access **Settings** by clicking on the *Settings* icon on the DASSET navigation bar.

<p align="center">
<img src={require("./settings-icon.png").default} style={{transform:'scale(.75)'}} />
</p>

The **Settings Home** screen provides access to view and modify settings that are categorized into 3 areas:

- Devices
- Member Access
- System

<p align="center">
<img src={require("./settings-home.png").default} style={{transform:'scale(1.00)'}} />
</p>

:::info

Some settings may not be visible to users that are **Members**.  Users with the **Owner** and **Manager** role have access to all settings.

:::


## Devices
Under the **Devices** group, the **Device info** section will provide you with details regarding general information about the Data Hub, such as its name, the owner, serial number and networking details.  See [Device info](settings-device-info.md) for more information.

## Member Access
Under the **Member Access** group, the following sections are available:

1. **<u>Share Device</u>** - Provides the ability to invite other users to access your Data Hub.  See [Share Device](./settings-share-device.md) for more information.
2. **<u>Member Management</u>** - Provides the ability to manage the permissions for other users who have been invited to access your Data Hub.  See [Member Management](./settings-member-management.md) for more information.

## System
Under the **System** group, the following sections are available:

1. **<u>Hardware Status</u>** - Provides information and configuration details of the Data Hub, such as storage, CPU and memory usage.  See [Hardware Status](./settings-hardware-status.md) for more information.
2. **<u>Disk Management</u>** - Provides detailed information and configuration options for the storage devices (disks) installed in the Data Hub.  See [Disk Management](./settings-disk-management.md) for more information.
3. **<u>Disk Self-Test</u>** - Provides hard disk usage and health information, including the ability to manually run disk self-tests on the Data Hub.  See [Disk Self-Test](./settings-disk-self-test.md) for more information.
4. **<u>Disk Sleep</u>** - Provides the ability to set sleep timers for the disks installed in the Data Hub.  Useful for lowering power consumption during times of little/no usage, and extends the life of the disks.  See [Disk Sleep](./settings-disk-sleep.md) for more information.
5. **<u>Security Settings</u>** - Provides the ability to set secondary passwords for My Space and Public Space.  See [Security Settings](./settings-security-settings.md) for more information.
6. **<u>LAN Settings</u>** - Provides the ability to change the password for the account accessing the Data Hub from a Windows or MacOS device.  See [LAN Settings](./settings-lan-settings.md)
7. **<u>Power Management</u>** - Provides the ability to change the power management options of the Data Hub, such as configuring recurring shutdown times.  See [Power Management](./settings-power-management.md)

## Unbind this Device
**Unbinding this Device** removes your account from the Data Hub.  In order to re-gain access to the Data Hub, you will need to be re-invited by a user with the **Owner** or **Manager** role.  See [Device Binding](../../concepts/device-binding.md) for more information.