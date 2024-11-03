---
sidebar_position: 1
---

# Disk Self-Test
Hard Disk Drives (HDD) are mechanical storage devices, and as such, will eventually fail if not replaced.  Known as the [Mean Time Between Failure (MTBF)](https://en.wikipedia.org/wiki/Mean_time_between_failures), most HDDs have a MTBF between 300,000 and 1,200,000 hours.  When a HDD begins to experience failure due to MTBF, you may see things such as failure to read or write files, or mechanical clicking sounds coming from your HDD.

Today's HDDs and SSDs have a capability to determine the health of the drive through [Self-Monitoring, Analysis and Reporting Technology (SMART)](https://en.wikipedia.org/wiki/Self-Monitoring,_Analysis_and_Reporting_Technology), which can alert you before a HDD or SSD completely fails.

DASSET Data Hubs provide the ability to view and test the drives in your system using SMART through **Disk Self-Test**.

<p align="center">
<img src={require("./settings-disk-self-test.png").default} style={{transform:'scale(1.0)'}} />
</p>

When entering the **Disk Self-Test** screen, you are presented with the current details of the disks installed in your Data Hub since the last test, which includes how many hours the disk has been actively powered-on.

You can manually run the SMART test yourself by clicking on the *Self-Test Again* button at the bottom of this screen.  Testing can take a few minutes based on how many disks are installed in your system.

<p align="center">
<img src={require("./settings-disk-self-test-run.png").default} style={{transform:'scale(1.0)'}} />
</p>