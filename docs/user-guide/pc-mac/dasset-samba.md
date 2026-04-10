---
sidebar_position: 15
---

# Network Discovery Services

## Samba

DASSET supports the Samba protocol. Once enabled, you can connect from a computer, smart TV, or other devices to access files stored on the DASSET device via Samba.

![](../pc-images/image187.png)

1.  Enable or disable Samba protocol
2.  Allow discovery of the DASSET device from other devices on the local network
3.  **Current account:** Samba login account
4.  **Alias:** You can set an alias for Samba and use it later to log in
5.  **Password:** Set the Samba login password
6.  **Set the access path:** Specify the directories on the DASSET device that are accessible through Samba

### Windows Connection to Samba

#### Access via Network Discovery
When "Visible in LAN Scan" is enabled in DASSET, the device will appear automatically under the Network section in File Explorer. Simply double-click the DASSET device icon and enter your Samba username and password to log in.

![](../pc-images/image188.png)

#### Map as a Network Drive
1.  Open **File Explorer**, type `\\DASSET_DEVICE_IP_ADDRESS\]`in the address bar, and press **Enter**.

![](../pc-images/image189.png)

2.  When prompted, enter your Samba **username** and **password**, then click **OK**.

![](../pc-images/image190.png)

3.  Once authenticated, File Explorer will display all folders accessible under your **DASSET account.**
- **home:** Your My Space on the DASSET device.
- **public:** The Public Space accessible to all users on the DASSET device.
- **Other directories:** Shared Group Spaces that your account has joined on the DASSET device.

![](../pc-images/image191.png)

4.  Right-click the folder you access frequently, and select **Map network drive\...**.

![](../pc-images/image192.png)

5.  Choose an available **drive letter**, check **Reconnect at sign-in**, and click **Finish**.

![](../pc-images/image193.png)

6.  The mapped network drive will now appear under **This PC**, allowing quick access to shared files on your DASSET device.

![](../pc-images/image194.png)

### macOS Connection to Samba

1.  Open **Finder**... **Go**... **Connect to Server.**

![](../pc-images/image195.png)

2.  In the server address field, enter: `smb://DASSET_DEVICE_IP_address` (The Samba application interface will display your current IP s address.)

![](../pc-images/image196.png)

3.  Click **Connect** Select **Registered User**
4.  Enter your Samba username and password and click Connect.

![](../pc-images/image197.png)

5.  Select shared directories to access:
- **home (My space)**
- **public (Public space)**
- **Group spaces (if available)**

![](../pc-images/image198.png)

6.  **Quick access setup:** Drag frequently used folders to the \"Locations\" section in Finder\'s sidebar

![](../pc-images/image199.png)

## DLNA

 DASSET device supports the DLNA protocol. Once enabled, your computer, mobile phone, smart TV, and other devices can discover this device and access its media files directly. When using DLNA for the first time, you must add a DLNA scan path. Only media files stored in the added paths will be accessible to other devices on the LAN.

### Configuring DLNA

1.  Click **Add**.

![](../pc-images/image200.png)

2.  In the pop-up window, add the folder you want to make available via DLNA.

![](../pc-images/image201.png)

3.  Once added, any device on the LAN that supports DLNA will be able to discover the DASSET device and play the shared media files.

![](../pc-images/image202.png)

4.  You can modify or remove directories from the DLNA interface at any time. Once a folder is removed, other devices on the LAN will no longer have access to its contents.

![](../pc-images/image203.png)

:::note
DLNA is a standardized protocol that allows compatible devices (such as smart TVs, mobile phones, computers, and speakers) to automatically discover each other over a home network and directly stream or play music, videos, and photos stored on another device---without the need for manual file transfers or physical media such as USB drives.
:::

## Time Machine

The DASSET device supports Apple's Time Machine feature. Once enabled, you can back up your Mac directly to the DASSET device using Time Machine.

![](../pc-images/image204.png)

1.  **Enable or disable Time Machine:** When enabled, your Apple device can connect to the DASSET device for data backup and recovery.
2.  **Time Machine account:** The account used on your Mac to log in to the DASSET device for Time Machine backup.
3.  **Alias:** You can set an alternate account alias to be used as the login credential for Time Machine.
4.  **Password:** When enabling Time Machine for the first time, you must set a password for account authentication from your Mac.

:::important
Apple Time Machine does not support the `@` symbol in account names.
:::

### Connecting a Mac to Time Machine

1.  On your Mac, go to **System Settings  General  Time Machine**.
2.  Select **Add Backup Disk...**, then choose your device from the list and click **Set Disk...**.
3.  Enter the corresponding network account and password in the pop-up window, then click Connect.
4.  After setup is complete, your Mac will automatically back up files to the DASSET device using Time Machine.