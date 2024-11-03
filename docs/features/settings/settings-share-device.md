---
sidebar_position: 1
---

# Share Device
DASSET Data Hubs provide a simple, yet secure, method for sharing your data with others.  **Share Device** gives users with the [Owner or Manager](../../concepts/roles-permissions.md) role to invite a user to join the Data Hub.  When a user accepts an invite to join a Data Hub, they have access to files and applications on the device, based on the roles and permissions they have been assigned.

Selecting **Share Device** brings you to the **Share Device** page which presents the following options for sharing the Data Hub:

<p align="center">
<img src={require("./settings-share-device-home.png").default} style={{transform:'scale(1.00)'}} />
</p>

## 1 - Enable Sharing
This toggle turns on sharing for the Data Hub, or disables the ability to do so.  **Enable Sharing** is disabled by default, and requires an [Owner or Manager](../../concepts/roles-permissions.md) to enable if desired.  

:::info

Disabling the **Enable Sharing** toggle once the Data Hub has already been shared with other users does not remove these users, rather it only prevents sending new invitations in the future.

::: 

## 2 - Share via QR Code
When sharing a Data Hub to a new user, the invitation can be shared by sending the recipient either a QR code, or an invitation code.  

**Share via QR Code** provides a simple way for the recipient to join a Data Hub using their mobile device by simply scanning the QR code with the mobile device's camera.  The inviter has the option of either saving an image of the QR code to their device and sending it later, or by using the native share capability of their device.

<p align="center">
<img src={require("./settings-share-device-qrcode.png").default} style={{transform:'scale(1.00)'}} />
</p>

## 3 - Share via Invitation Code
Sharing a Data Hub using an invitation code generates a unique alphanumeric code that the invitor then sends to the recipient using email, SMS or other mechanism.  

## 4 - Require verification to add device
Selecting the **Require verification to add device** toggle requires the inviter of the share request to approve the request to join once the recipient responds to the either the QR code or Invitation Code.  The inviter will be notified in the **Notifications** area the **Home Screen** of DASSET once the request has been submitted.  Once opening the notifications, they will see the request and must manually select *Accept* in order for the recipient to see the Data Hub show up in the **Devices Screen** of DASSET.

<p align="center">
<img src={require("./settings-share-device-accept.png").default} style={{transform:'scale(1.00)'}} />
</p>

## Accepting a Share Device Invitation
The recipient of either a QR Code or Invitation Code share request must have a DASSET user account and the DASSET application installed on their phone, PC or Mac in order to accept the invitation.

After account creation (if not already completed), the recipient selects *+ Add device* from the **Devices Screen**.

<p align="center">
<img src={require("./settings-share-device-add-device.png").default} style={{transform:'scale(1.00)'}} />
</p>

The following screen then asks the recipient whether the device they want to add either belongs to them, or is a device being shared with them.

<p align="center">
<img src={require("./settings-share-device-other-device.png").default} style={{transform:'scale(1.00)'}} />
</p>

Selecting *No, someone shared it with me* will then take them to the QR Code scanner screen.  The recipient can either scan the QR code, or alternatively enter the Invitation Code by selecting *Add via share code*.

<p align="center">
<img src={require("./settings-share-device-qrcode-scan.png").default} style={{transform:'scale(1.00)'}} />
</p>

If the recipient was invited using an Invite Code, they would enter the code into the input box below and select *Get device info*

<p align="center">
<img src={require("./settings-share-device-invite-code.png").default} style={{transform:'scale(1.00)'}} />
</p>

Once the the DASSET Account Services validates the invite code, the Data Hub being shared is shown and the recipient must select the *Bind* option to finalize the invitation.

<p align="center">
<img src={require("./settings-share-device-bind.png").default} style={{transform:'scale(1.00)'}} />
</p>

If the inviter had selected the **Require verification to add device** option when sharing the Data Hub, the recipient will receive the following screen informing them that their accepted invitation is awaiting final confirmation before the sharing process is completed.

<p align="center">
<img src={require("./settings-share-device-complete.png").default} style={{transform:'scale(1.00)'}} />
</p>