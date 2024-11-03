---
sidebar_position: 1
---

# Power Management
There are times when you may want your DASSET Data Hub to be rebooted, or turned completely off for either saving power, upgrading hardware or applying updates to the system, which is accomplished through **Power Management**.  

<p align="center">
<img src={require("./settings-power-management.png").default} style={{transform:'scale(1.0)'}} />
</p>

## Timed Power On/Off
Setting a regular schedule for your Data Hub to be powered-off is helpful if you want to conserve power and decrease the wear and tear on the system when it is not regularly in use.

Selecting the toggle next to the *Timed power on/off* heading will present a pop-up which allows you to set a flexible schedule for system shutdown and power on.

<p align="center">
<img src={require("./settings-power-management-schedule.png").default} style={{transform:'scale(1.0)'}} />
</p>

Though this screen you can set the time of the day you want the system to power down, and subsequently power back on.  Additionally, you can choose which days of the week for the schedule to occur.

:::caution

With the system in a powered-off state, background operations such as cloud sync will not run until the system is powered back on.  If you need to power your system back on when it's off, press the power button on your Data Hub device.

:::

## Shutdown & Restart
If you need to immediately turn your Data Hub off, you can do so by selecting the *Shutdown* button.  You will need to physically press the power button on your Data Hub to power it back on.

If you simply need to restart your Data Hub, such as to apply updates to the system, selecting the *Reboot* button will power your Data Hub off, and subsequently power it back on again.  It may take a few minutes for your Data Hub to completely Reboot.