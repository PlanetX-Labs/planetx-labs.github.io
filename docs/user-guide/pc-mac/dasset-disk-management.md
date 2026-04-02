---
sidebar_position: 6
---

# Disk Management

After binding, when you enter the device for the first time, you will be prompted to perform a hard disk format:

1.  Insert the hard disk into your DASSET device.
2.  From the **Discover**, click your device to enter.
3.  You will see a format prompt. Click **Confirm**.

![](../pc-images/image23.png)

4.  The DASSET client will redirect to **Device Management  Disk Management**. Click **Format and Rebuild System Volume**.
    - Select the disks you wish to format and the desired disk format, then click **OK**.
    - Disk format options include:
      - **Spanned Volume**: Basic mode; available capacity equals the sum of all disks, with no redundancy.
      - **RAID 0**: Optimized read/write performance; available capacity equals the sum of all disks, with no redundancy.
      - **RAID 1**: Two disks required; available capacity equals the smaller of the two disks, with redundancy.
      - **RAID 5 (Recommended)**: Minimum of three disks; available capacity equals the combined capacity of two data disks, with redundancy.
    - The disk format page will display the estimated capacity based on the chosen mode.

![](../pc-images/image24.png)

5.  The system will begin formatting. Depending on the number and size of disks, formatting may take a few minutes.

![](../pc-images/image25.png)

6.  Once formatting is complete, a confirmation message will appear. Click **OK** to start using your DASSET device.

## Disk Management

In **Disk Management**, you can view information about all hard drives currently inserted into the DASSET device and configure them accordingly.

1.  **Disk Management**: Configure system volumes, format disks, and display disk capacity and status.
2.  **Disk Self-Check**: Inspect the health status of the disks.
3.  **Disk Hibernation**: Configure hard drive sleep mode.
4.  **Format and Rebuild System Volume**: Reformat all or selected hard drives with a new disk format.
5.  **System Volume Status Display**: Show the current status of the system volume, including the number of drives.
6.  **External Disks**: Newly connected drives that are not part of a rebuilt system volume are displayed here. After formatting, these drives can be used as external storage under *External Storage*.

![](../pc-images/image54.png)

### Format and Rebuild System Volume

When replacing or adding new hard drives, if you do not wish to use them as external storage, you can choose **Format and Rebuild System Volume**.

1.  Go to **Device Management - Disk Management** and click **Format and Rebuild System Volume**.

![](../pc-images/image24.png)

2.  In the pop-up window, select a new disk format. DASSET devices support multiple disk formats:
    - **Spanned Volume**: Basic mode; available space equals the sum of all disks, no redundancy.
    - **RAID 0**: Optimized read/write performance; available space equals the sum of all disks, no redundancy.
    - **RAID 1**: Two disks required; available space equals the smaller of the two, with redundancy.
    - **RAID 5 (Recommended)**: Minimum of three disks; available space equals the combined capacity of two data disks, with redundancy.
    - **RAID 10 (Recommended)**: Minimum of four disks; available space equals the combined capacity of the smaller group of two, with redundancy.
    The disk format interface will display the estimated capacity based on the selected mode.
1.  Click **Confirm** to start formatting. Please wait patiently.

:::info

     In RAID modes, after formatting, the disk status may show **Synchronizing**. This indicates internal disk configuration. You can still perform normal operations such as file upload and download. The *Synchronizing* status does not affect your ability to use your DASSET device, although read/write operations may be slower until all disks are synchronized.
:::

![](../pc-images/image55.png)

![](../pc-images/image25.png)

When the device is performing formatting operations, you will also see the device status on the Device List page.

![](../pc-images/image56.png)

### Add External Disk

When inserting a new hard drive, if you do not wish to rebuild the system volume (which would erase existing disk data), you can configure the drive as an **external disk**.

1.  Go to **Device Management  Disk Management**, where the newly added disk will be shown as **Pending Configuration**.

![](../pc-images/image57.png)

2.  For the disk you want to add to external storage, click **Format**.
3.  In the pop-up prompt, click **Confirm**.

![](../pc-images/image58.png)

4.  The system will begin formatting. You can click **Background** to close the progress window while formatting continues in the background.

![](../pc-images/image59.png)

![](../pc-images/image60.png)

5.  After formatting is complete, the system will notify you that the task is finished, and the **Pending Configuration** status will be removed.

![](../pc-images/image61.png)

6.  Go to **Applications - External Storage** to see the disk added as external storage.

![](../pc-images/image62.png)

7.  Double-click the disk name to enter the external disk and perform file operations.

:::warning

    To avoid abnormal behavior, do not delete the *lost+found* folder.
:::

![](../pc-images/image63.png)

### Disk Self-test

Performing a self-test on the hard drives helps you identify problematic disks in time and take appropriate action to prevent data loss. We recommend running a disk self-test periodically to ensure data integrity.

To run a disk self-test:
1.  Go to **Device Information - Disk Management - Disk Self-test**.
2.  Click **Self-test Again**.
3.  The system will begin scanning the hard drives. Please wait patiently for the process to complete (the time required may vary depending on disk size and type).
4.  Once complete, you will see the current health status of the hard drive along with the self-check completion time.

![](../pc-images/image64.png)

### Disk Sleep

The purpose of disk sleep is to power-down hard drives when no read/write operations are occurring. This extends disk lifespan and reduces energy consumption while the device is idle.

#### Manual Hibernation

1.  Click **Sleep Now**.

![](../pc-images/image65.png)

2.  In the pop-up warning window, click **Confirm**. During disk hibernation, all applications and transfer tasks will be stopped.
3.  Once the disk enters hibernation, a notification will appear.

![](../pc-images/image66.png)

![](../pc-images/image67.png)

#### Scheduled Sleep

1.  Enable **Scheduled Sleep** to have the disks enter hibernation on a particular interval based on your usage of your DASSET Device.
2.  After enabling, configure the specific hibernation rules:
    1.  **System Time:** The time zone of your client.
    2.  **Wake Time / Sleep Time:** Set the start and end times for disk System Time: The time zone of your client.
    3.  **Repeat:** Choose when the rule applies---*Everyday*, *Weekdays*, *Weekends*, or custom days of the week.

![](../pc-images/image68.png)

3.  If you no longer wish to use scheduled sleep, simply disable this option.

#### Wake Disk

After disks enter hibernation, the DASSET client will automatically prompt you upon accessing the device. You can click **Wake Disk** to re-enable the hard drives and resume normal operations on the DASSET device.

![](../pc-images/image69.png)

![](../pc-images/image70.png)