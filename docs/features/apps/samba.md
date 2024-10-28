---
sidebar_position: 1
---

# LAN Access (Samba)
In addition to accessing files on your Data Hub through the DASSET application, the ability to do so directly from a device that supports the [SMB networking protocol](https://en.wikipedia.org/wiki/Samba_(software)), such as Windows and Linux/Unix-based Operating Systems like Android and Apple MacOS and iOS.  **Samba** in DASSET is an implementation of the SMB networking protocol, making it easy to establish file-sharing between your Windows, MacOS or mobile phone and a DASSET Data Hub.

<p align="center">
<img src={require("./samba.png").default} style={{transform:'scale(.75)'}} />
</p>

Once in the **Samba** application, several options are presented enabling you to set-up sharing your DASSET Data Hub on your local area network.  

<p align="center">
<img src={require("./samba-settings.png").default} style={{transform:'scale(1.0)'}} />
</p>

1. **<u>Samba protocol</u>** - This toggle enables the Samba functionality on your DASSET Data Hub for use.  It is disabled by default.
2. **<u>Network Discovery</u>** - This toggle, only available if the **Samba Protocol** is also enabled, broadcasts the availability of your DASSET Data Hub to your local area network.  With this toggle enabled, you can see your DASSET Data Hub listed in Network Devices of Windows Explorer, for example.
3. **<u>Account</u>** - For security purposes, an account is needed to access data on your Data Hub when using Samba.  By default, this will be the same user account and password you configured when you initially set-up your DASSET Data Hub.  
4. **<u>Alias</u>** - If you'd rather have a shorter, simple name for your user account for using Samba, you can set-up an alias that you would use in place of your email address.
5. **<u>Set Password</u>** - Enables you to change the password of your Samba account without affecting the password you have for your DASSET user account.  Useful if you want to have a simpler, or shared password, for LAN access.
6. **<u>Samba access path</u>** - Specifies the directory/directories that you'd like available for Samba file sharing, enabling you to restrict access if needed.
7. **<u>About Samba</u>** - More information about how Samba works, and how to connect your Windows or MacOS device.
