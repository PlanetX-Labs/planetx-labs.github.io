---
sidebar_position: 1
---

# Member Management
The **Member Management** screen shows all current users who have joined your Data Hub, as well as the [Roles and Permissions](../../concepts/roles-permissions.md) they have.  From this screen, **Owners** and **Managers** have the ability to modify permissions of users as well as having the ability to add additional users to the Data Hub.

<p align="center">
<img src={require("./settings-member-management-home.png").default} style={{transform:'scale(1.0)'}} />
</p>

:::info

**Owners** are the only role in DASSET where permissions cannot be changed.  They always have full access to all functionality of the Data Hub.

:::

Selecting a **Member** or **Manager** will then present the screen enabling you to modify the specific permissions assigned to their role.  The following areas are available for configuration:

- General
- Access Settings

<p align="center">
<img src={require("./settings-member-management-member-details.png").default} style={{transform:'scale(1.00)'}} />
</p>

## General
Under the **General** group, the ability to change how much disk space the selected user can consume along with changing their current role.

### Used Space
Selecting **Used Space** presents options to manage how much disk space the selected user is allowed to use for their [My Space](../../concepts/spaces.md), which is where their user data is stored.

<p align="center">
<img src={require("./settings-member-management-used-space.png").default} style={{transform:'scale(1.00)'}} />
</p>

1. **<u>No Limit</u>** - The user has no storage restrictions, based on how much storage is available in the Data Hub.
2. **<u>Percentage</u>** - Sets a percentage of available storage on the system for the user to consume.  For example, if the system has 1 TB of available space, setting this to 10% will give the user 100 GB of storage for consumption.
3. **<u>Customized</u>** - Sets an amount of storage for the user in GB for consumption.

### Role
Selecting **Role** will present options for changing a the selected user's role, along with the default permissions associated with the role.

<p align="center">
<img src={require("./settings-member-management-role.png").default} style={{transform:'scale(1.00)'}} />
</p>

## Access Settings
The **Access Settings** group shows the discrete permissions available for changing for the selected user.  The permissions are as follows:

1. **<u>Allow to use My Space</u>** - Gives the user the ability to use the [My Space](../../concepts/spaces.md) feature of DASSET.  This is granted by default to all user roles.
2. **<u>Allow to view Public Space</u>** - Gives the user the ability to view files in the [Public Space](../../concepts/spaces.md), but not the ability to add or delete files.
3. **<u>Allow to edit Public Space</u>** - Gives the user the ability to view/add/delete files in the [Public Space](../../concepts/spaces.md).
4. **<u>Allow to use Group Space</u>** - Gives the user the ability to be added to Groups in the [Group Space](../../concepts/spaces.md).
5. **<u>Allow to create groups</u>** - Gives the user the ability to create new Groups in the [Group Space](../../concepts/spaces.md).
6. **<u>Allow to view External Storage</u>** - Gives the user the ability to view files on storage devices that are attached to the system [externally](../../features/apps/external-storage.md), such as USB-connected disk drives or thumbdrives.

## Remove this user
If you want to remove the selected user from the system, including removing their stored files in [My Space](../../concepts/spaces.md), you can do so by selecting the **Remove this user** button.  