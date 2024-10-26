---
sidebar_position: 2
---

# Spaces

The exposure of the file system in DASSET is designed to present data to the user that only they have access to.  Rather than combing through a tree of file folders containing both user and system files, DASSET easily organizes user's data into **Spaces**.  Spaces are logical representations of data on the Data Hub.

There are 3 types of Spaces in DASSET:

<p align="center">
<img src={require("./spaces.png").default} style={{transform:'scale(.75)'}} />
</p>

## My Space
All of your personal data, by default, is stored in **My Space**.  Your User Account is the only authorized user to access this data.  While an Owner or Manager of the Data Hub will have the ability to assign how much storage space a user can occupy on the Data Hub, they have no ability to view or access the data stored in your My Space.

The only way other users will be able to access your **My Space** files or folders would be if you explicitly shared them with another user.  See **Sharing** for more details.

## Public Space
As the name implies, the **Public Space** is a location where any user who has access to the Data Hub can view, download and upload files.  Think of it as the "Town Square" of your Data Hub, where you can freely share content with other users without having to explicitly share files or folders.

The default permissions for new users added to a Data Hub are **view only** for content stored in the **Public Space**.  Owners and Managers of the Data Hub can change the permissions of new users to be able to **add** or **delete** files if desired.

## Group Space
The Group Space is an area where specific groups can be created that only contain a subset of users on the Data Hub.  For example, if your daughter is on a soccer team and you want all of the other parents to be able to share photos and other information regarding the team, you can create a group that includes only the parents to do so.  This is also useful for small businesses that may want to set-up specific groups for departments to share files, such as a group for Sales and another group for Marketing.

Being an Owner or a Manager on a Data Hub does not mean that they automatically have access to all Groups created on the device.  If a user has created a Group that excludes a user that is either an Owner or Manager, then those users will not be able to see or access the Group.