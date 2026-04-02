---
sidebar_position: 10
---

# Member Management

On the **Member Management** page, you can manage all members and their permissions, as well as invite others to join the device.

![](../pc-images/image77.png)

1.  **Owner:** Displays the Owner's nickname and the time of device binding.
2.  **Manager/Administrator:** Displays all Administrators' nicknames and their binding times.
3.  **Member:** Displays all members' nicknames and their binding times.
4.  **Permission Details:** Shows your specific permissions on this device.
5.  **User Count:** Displays the number of users currently bound to the device and the maximum number of users allowed.
6.  **Invite Users:** Generates an invitation code to invite others to join the device.

:::note
Only Owners and Administrators can view and configure member permissions. Members can only view their own permissions and cannot modify them.
:::

### User Roles in Device Binding

In DASSET, accounts are classified into different roles based on their permissions:
- **Owner**: The first account to bind the device. Has full control over the device.
- **Administrator**: A role assigned by the Owner to a member account. Has most device management permissions and can configure member permissions.
- **Member**: Accounts invited to join the device default to member role, with only basic permissions.

#### Permission Description

The differences in permissions between user roles are shown in the table below:

| Permission Item | Owner | Administrator | Member |
| :--- | :---: | :---: | :---: |
| Manage account storage limit | √ | √ | |
| Read/Write My Space | √ | √ | √ |
| View Public Space | √ | √ | √ |
| Edit Public Space | √ | √ | |
| Use Group Space | √ | √ | √ |
| Create Groups | √ | √ | |
| View External Storage | √ | √ | |
| Edit External Storage | | √ | |
| Transfer Ownership | √ | | |
| Assign Administrator | √ | | |
| Remove Users | √ | √ | |

#### Adjust Member Permissions

You can configure detailed permissions for different members.
- Select a member account, then in the **Permission Details** section on the right, enable or disable specific permissions for that member.
- **Owners** can configure permissions for all users.
- **Administrators** can configure permissions for member accounts.

![](../pc-images/image78.png)

### Storage Quota Management

You can configure storage limits for different members:
- **Owners** can set storage limits for all users.
- **Administrators** can set storage limits for member accounts.

1.  Select a member account, then in the **Permission Details** section on the right, click **Manage Space Access**.

![](../pc-images/image79.png)

2.  In the pop-up window, configure the available storage limit for the account:
    - **No limit**: No restriction on the member's storage usage.
    - **Percentage**: Allocate a percentage of the device's total capacity.
    - **Customized Size**: Set a fixed maximum capacity (in GB).

![](../pc-images/image80.png)

Once configured, the member will not be able to exceed the assigned quota.

### Transfer Owner

The Owner can transfer device Ownership to another member account.

1.  Select a member account, then in the **Permission Details** section on the right, scroll down and click **Transfer Owner**.

![](../pc-images/image81.png)

2.  In the pop-up window, click **Transfer**.

![](../pc-images/image82.png)

3.  After transfer, the device will briefly go offline and then reconnect to update internal permission logic.
    - Once back online, your account will become a member, and the selected account will become the device Owner.

### Administrator Promotion and Demotion

**Promote Member to Administrator**
  1.  Select a member account, then in the **Permission Details** section on the right, scroll down and click **Promote to Administrator**.

![](../pc-images/image83.png)

  2.  The device will briefly go offline and then reconnect. After reconnection, the account will appear as an Administrator.

**Demote Administrator to Member**
  1.  Select an Administrator account, then in the **Permission Details** section on the right, scroll down and click **Demote to Member**.

![](../pc-images/image84.png)

2.  The device will briefly go offline and then reconnect. After reconnection, the account will appear as a member.

### Remove User

You can remove a user to unbind them from the device. After removal, the user will no longer see the device.
- Owners and Administrators can perform removals.
- Owners can remove Administrators and members.
- Administrators can remove members.

**Steps:**
1.  Select a user account, then in the **Permission Details** section on the right, scroll down and click **Remove This User**.

![](../pc-images/image85.png)

2.  In the pop-up window, click **Remove This User**. After system processing, the user will be removed from the device.
    - When a user is removed, their personal storage data will also be cleared to free up space.

![](../pc-images/image86.png)

### Invite Users

You can invite others to join the device via the Member Management page.

1.  Go to **Device Management  Member Management** and click **Invite Users**.

![](../pc-images/image87.png)

2.  The system will generate an invitation QR code window. You can send the QR code or invitation code to others.
    - On mobile: Scan the QR code with the DASSET mobile client.
    - On desktop: Enter the invitation code in the DASSET desktop client.
 See the [Add Device section](#add-device-via-invitation-code) for details on joining a device.

    **Options:**
    1.  **QR Code Display:** Shows the invitation QR code.
    2.  **QR Code Expiry:** Valid until the specified time, after which it cannot be used.
    3.  **Invitation Code:** Equivalent to the QR code for invitation purposes.
    4.  **Enable Sharing:** Must be enabled to generate the invitation QR code.
    5.  **Require Verification to add device:** If enabled, Owner/Administrator approval is required before new users can join.
    6.  **Allow regular Members to invite:** If enabled, regular member accounts can also invite others.
    7.  **Download QR Code:** Save the QR code image to your computer's download directory.

    ![](../pc-images/image88.png)

    8.  If **Verification Required** is enabled, when someone applies to join, the Owner/Administrator will see a notification in the system. Only after clicking **Accept** will the user be bound to the device.

    ![](../pc-images/image89.png)