---
sidebar_position: 7
---
# Device Management

All management of DASSET devices is centralized on the **Device Management** page, which mainly includes the following functions:

- **Device Info**: Displays device software and hardware information, with quick access to operations such as shutdown.
- **Storage Management**: Shows storage usage details.
- **Disk Management**: Manages inserted hard drives and supports operations such as formatting.
- **Node Configuration**: Configures node information, allowing you to use this device as a *relay node* to access the Internet or resources within the device's local network.
- **Member Management**: Manages all members on the device and invites others to join the device.
- **Network Management**: Configures device network settings.

## Device Info

The **Device Info** page primarily displays the device's basic details and provides quick access to functions such as shutdown:

![](../pc-images/image26.png)

1.  **Edit Device Remarks:** After modification, the updated device name will appear on the device list and home page.
    - Remarks help you distinguish between multiple devices more clearly.
    - Remarks are visible only to you.
2.  **Device Model and Capacity Information**: Displays the device model and an overview of storage usage.
3.  **Device Basic Information:** Centralized display of all device-related details, including:
    - **Device Name**: Editable only by the device Owner.
    - **Owner**: Displays the account nickname of the current device Owner.
    - **Added Time**: Shows the date the device was bound.
    - **Domain Name**: Displays the device's virtual domain URL within the DASSET virtual network.
    - When logging in to DASSET, you can connect to the device using the domain name or virtual IP.
      :::info
      The virtual domain is static and will not change once assigned.
      :::
    - **Security**: Only users bound to the device can connect via the virtual domain. Other DASSET accounts cannot.
    - **Virtual Network IP**: The IP address assigned to the device within the DASSET virtual network.
      - This IP is dynamic.
      - **Security**: Only users bound to the device can connect via the virtual IP. Other DASSET accounts cannot.
    - **LAN IP**: The device's IP address within the local network.
    - **Device Model**: Factory model defined by the manufacturer.
    - **SN**: The device's unique serial number.
    - **MAC**: The MAC address of the device's network interface card.
    - **Firmware Version**: Current firmware version number.
    - **SDVN Version:** Current SDVN version number.
    - **CPU**: Device CPU model.
    - **RAM**: Device memory size.
4.  **Quick Functions**: Includes shortcuts for shutdown, unbinding, and other operations.

### Shutdown

This function is available only to Owner and Administrator accounts. Click the **Shutdown** button at the bottom of the Device Information page to remotely power off the DASSET device.

:::tip
**Note**: If your DASSET device does not support remote startup, there are two ways to restart it after shutdown:
1. Disconnect and reconnect the power supply (requires device support for power-on after power recovery).
1. Manually press the device's power button to restart.
:::

![](../pc-images/image27.png)

### Device Reboot

This function is available only to Owner and Administrator accounts. Click the **Device Reboot** button at the bottom of the Device Information page to remotely restart the DASSET device.

![](../pc-images/image28.png)

### Scheduled Power On/Off

This function is available only to Owner and Administrator accounts. Regular users can only view the scheduled rules. Click the **Scheduled Power On/Off** button at the bottom of the Device Information page to set your DASSET device to enter sleep mode at specified times.

#### Steps to configure:

![](../pc-images/image29.png)

1.  Go to **Device Management  Device Information  Scheduled Power On/Off**, then click **Enable Scheduled Power On/Off**.
2.  Set the specific rules:
    - **System Time**
    - **Time of power off/on**: Set the scheduled shutdown and startup times. You can either input the exact time or adjust in hourly increments using the up/down arrows.
    - **Repeat**: Set the repeat schedule for the rule to take effect. Options include *Everyday,* *Weekdays*, *Weekends*, or *Custom* days of the week.

![](../pc-images/image30.png)

3.  If you no longer wish to use **Scheduled Power On/Off**, simply disable the option.

### Security Settings

Click the **Security Settings** button at the bottom of the Device Information page to enter the Security Settings page.

![](../pc-images/image31.png)

- **Show Hidden Files and Folders**: When enabled, all hidden files and folders will be visible in the File Management page.
- **Personal Password**: When enabled, a password must be entered to access the device.
- **Public Space Password**: When enabled, a password must be entered to access data in the Public Space.

![](../pc-images/image32.png)

#### Show Hidden Files and Folders

If you have hidden certain files and wish to access them again, you can enable **Show Hidden Files and Folders** to display hidden files/folders in the File Management page.

#### Personal Password

To set a Personal Password:
1.  On the Device Information page, click **Security Settings** and enable **Personal Password**.
2.  In the pop-up input box, enter a password to complete the setup.

![](../pc-images/image33.png)

After setting a personal password, you will be prompted to enter it when accessing the device home page. Only after entering the correct password can you access the device.

![](../pc-images/image34.png)

To change your Personal Password:
1.  Go to **Device Information Security Settings - Personal Password** and click **Change Password**.

![](../pc-images/image35.png)

2.  In the pop-up window, enter the current personal password to verify your identity.

![](../pc-images/image36.png)

3.  Enter the new password to complete the change.

![](../pc-images/image37.png)

To recover a forgotten Personal Password:
1.  In the personal password input or change password window, click **Forgot Password**.

![](../pc-images/image38.png)

2.  Enter the email address or mobile phone number bound to your DASSET account.

![](../pc-images/image39.png)

3.  Enter the correct verification code.
4.  After verification, set a new personal password in the new password window.

#### Public Space Password

Setting a Public Space Password is available only to Owner and Administrator accounts.

To set a Public Space Password:
1.  On the Device Information page, click **Security Settings** and enable **Public Space Password**.
2.  In the pop-up input box, enter a password to complete the setup.

![](../pc-images/image40.png)

When attempting to enter a password-protected Public Space, you will be prompted to input the correct password before access is granted.

![](../pc-images/image41.png)

To change the Public Space Password:
1.  To change the Public Space password, go to **Device Information Security Settings  Public Space Password** and click **Change Password**.

![](../pc-images/image42.png)

2.  In the pop-up window, enter the current Public Space password to verify your identity.

![](../pc-images/image43.png)

3.  Enter the new password to complete the change.

![](../pc-images/image44.png)

##### Forgot Public Space Password -- Recovery

This recovery function is available only to Owner and Administrator accounts.

1.  In the Public Space password input or change password window, click **Forgot Password**.

![](../pc-images/image45.png)

2.  Enter the email address or mobile phone number bound to your DASSET account.

![](../pc-images/image46.png)

3.  Enter the correct verification code.
4.  After verification, set a new Public Space password in the new password window.

### Firmware Updates

Periodic firmware updates are pushed to DASSET devices to enable new features and functionality as well as providing bugfixes and security updates. This function is available only to Owner and Administrator accounts.

Firmware updates are provided in two ways:
1. Automatic check with client update notifications
2. Manual check for updates

#### Automatic Firmware Update Notification

When a new firmware version is detected for the DASSET device, the DASSET client will automatically display a **Firmware Update** prompt upon entering the device home page.

![](../pc-images/image47.png)

The system checks for updates every 8 hours. If a new version is found, you will be notified at login.
- Click **Update Now** to begin the upgrade.
- If you prefer not to upgrade immediately, click **Next Time** to postpone the update.

#### Manual Check for Firmware Updates

Click the **Firmware Updates** button at the bottom of the Device Information page to manually check for available firmware updates.

![](../pc-images/image48.png)

- If a firmware upgrade is detected, a small red dot will appear on the **Firmware Update** option, indicating a pending update compatible with your device.

![](../pc-images/image49.png)

**Firmware upgrade steps:**
1.  Click **Device Information  Firmware Update**.
2.  Check for updates:
    - If an update is available, the upgrade page will display the firmware version, release date, and detailed update information.
    - If no update is available, a message will confirm that the device is up to date.
3.  Click **Update Now**. The system will automatically download and install the firmware. Please wait patiently.

    :::danger
    Do not power off or restart the device during the upgrade process to avoid firmware failure or device malfunction.
    :::

4.  After the upgrade is complete, the device will restart automatically. You will receive a device offline notification, and once the restart finishes, the device will appear online again in your device list.

### State of Operation

This function is available only to Owner and Administrator accounts. Click the **Running Status** button at the bottom of the Device Information page to view the current operating status of the device.

On the Running Status page, you can monitor the following information:
1.  Memory usage
2.  CPU usage
3.  Device traffic, including upload and download speed
4.  Hard disk temperature, showing the operating temperature of inserted disks
5.  Fan speed, showing the rotation speed of the device's built-in cooling fan

![](../pc-images/image50.png)