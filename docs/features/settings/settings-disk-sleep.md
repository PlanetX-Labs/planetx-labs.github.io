---
sidebar_position: 1
---

# Disk Sleep
In the [**Disk Self-Test**](settings-disk-self-test.md) article, it was explained that disk drives can eventually fail after prolonged use.  A way to extend the life (MTBF) of the disks installed in your Data Hub is to use the **Disk Sleep** feature to put your disks into a low-power state when your Data Hub is not typically in use.  Your Data Hub is still powered-on and operating normally.  If the Data Hub needs to access data on the disks when they are in the sleep mode, the system will automatically wake-up the disks to read or write data as necessary.

<p align="center">
<img src={require("./settings-disk-sleep-run.png").default} style={{transform:'scale(1.0)'}} />
</p>

Upon entering the **Disk Sleep** screen, you have can either set a schedule for your disks to sleep automatically based on your typical usage, or you can manually put the disks to sleep by selecting the *Sleep now* button.

To set a sleep schedule for your disks, select the toggle next to the *Timed sleep* heading, and configure a schedule that best suits your needs.

<p align="center">
<img src={require("./settings-disk-sleep-schedule.png").default} style={{transform:'scale(1.00)'}} />
</p>