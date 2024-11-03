---
sidebar_position: 1
---

# Disk Management
The hard disk drives (HDD), solid-state drives (SSD) and any externally-connected drives installed or connected to your Data Hub are available for configuration in **Disk Management**.  DASSET supports the ability to configure your drives in a way for optimal performance and redundancy using data storage virtualization technology known as [RAID](https://en.wikipedia.org/wiki/RAID).

To change the configuration of your disks, select the three ellipses located to the right of the **System Volume** label.

<p align="center">
<img src={require("./settings-disk-management-home.png").default} style={{transform:'scale(1.0)'}} />
</p>

In the **Configure** pop-up, you will be presented with several options for disk configuration which can be navigated by selecting the right and left arrows for different options.  The configuration your disks are currently in will show as the default option.

<p align="center">
<img src={require("./settings-disk-management-configure.png").default} style={{transform:'scale(1.00)'}} />
</p>

:::danger

Changing the configuration of your disks will erase all of the data currently on the disks.  Only change your disk configuration if you have added or removed disks from your system or are setting-up your Data Hub for the first time.

:::


## Disk Configuration Options
The following options are available for disk configuration of your Data Hub.  Some options are only available with 3 or more disks installed.

1. **<u>Spanned Volume</u>** - Combines all of the drives in your system into a single virtualized disk.  This option allows you to utilize the full capacity of all drives in your system, however if one of your drives fails, the data on all drives is lost.  This option requires at least 2 disks installed in your Data Hub. Not recommended for data that you do not have backed-up elsewhere.
2. **<u>RAID 0</u>** - Similar to a **Spanned Volume**, but stores data differently on the disks such that read/write performance is greatly increased, however has the same data loss risk if a single drive fails.  This option requires at least 2 disks installed in your Data Hub.  Not recommended for data that you do not have backed-up elsewhere.
3. **<u>RAID 1</u>** - Combines 2 disks into a virtualized disk, mirroring the contents of one of the disks to the other.  As a result, the total storage available when using RAID1 is the capacity of one of the disks.  This ensures that in the event one of your disks fails, there is no data loss.  Results in lower read and write performance than other options.
4. **<u>RAID 5</u>** - Combines a minimum of 3 disks together into a virtualized disk using one disk for parity.  Ensures that in the event a disk fails, your data is not lost.  The total amount of storage available is the combined capacity of all the disks minus one disk.  Read performance is slightly improved while write performance is slightly degraded.
5. **<u>RAID 10</u>** - Combines a minimum of 4 disks together into a virtualized disk using half of the total number of disks for mirroring to ensure data is not lost in the event of a disk failure.  The total amount of storage available is half of the combined total of disk, but results in excellent read & write performance.