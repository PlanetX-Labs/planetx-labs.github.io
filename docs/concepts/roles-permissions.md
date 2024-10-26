---
sidebar_position: 3
---

# Roles & Permissions
DASSET uses Role-Based Access Control (RBAC) to control what permissions users of the Data Hub can, or cannot, do.  Each user of the system is assigned a role, either automatically by the system, or specifically by the Owner of the device.

The following roles are present in DASSET:

- Member
- Manager
- Owner

## Member Role
The Member Role is the default role assigned to users invited to join a Data Hub by an Owner or Manager.  A Member has complete control over their **My Space**, but limited default access to both **Public Space** and **Group Space**.  

Once a user has accepted an invite to access another user's Data Hub, the Owner or Manager of the Data Hub has the ability to grant them additional permissions as appropriate.

## Manager Role
The Manager role is an administrative role, having all of the same permissions as a Member with the additional ability to change permissions for Members.  The purpose of the Manager role is to give another user the ability to fully manage the settings of the Data Hub without requiring the Owner to do so.  The action 

## Owner Role
The Owner role is the highest-level of access control of a DASSET Data Hub.  It's an administrative role which provides the same permissions as the Manager role, with the only difference being the ability to transfer device ownership to another user.

There can only be one Owner of a DASSET Data Hub, which should be the individual who has physical custody of the Data Hub itself.

## Permissions by Role

| Permissions               | Member | Manager | Owner |
|:--------------------------|:-------|---------|-------|
| Use of My Space           |  ✅   | ✅      | ✅   |
| View Public Space         | ✅    | ✅      | ✅   |
| Edit Public Space         | ❌    | ✅      | ✅   |
| Use of Group Space        | ✅    | ✅      | ✅   |
| Creation of Groups        | ❌    | ✅      | ✅   |
| View External Storage     | ❌    | ✅      | ✅   |
| Edit External Storage     | ❌    | ✅      | ✅   |
| Change User Permissions   | ❌    | ✅      | ✅   |
| Invite users to device    | ❌    | ✅      | ✅   |
| Modify HW Settings        | ❌    | ✅      | ✅   |
| Transfer device ownership | ❌    | ❌      | ✅   |

