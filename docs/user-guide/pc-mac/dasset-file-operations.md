---
sidebar_position: 12
---

# File Operations

### File Uploads

File uploads can be performed in two ways:
1. Use the **Uploads** button in the menu bar to upload files or folders from your computer to the DASSET device.
2. Drag and drop files or folders directly into the DASSET device. Drag-and-drop can be done either in a specific directory page or in the [Task Center](#task-center).

#### Method 1: Uploads Button
1.  Click **Uploads** and choose whether to upload files or folders.

![](../pc-images/image96.png)

2.  In the pop-up window, select the files or folders you want to upload to the DASSET device (multi-selection supported).
3.  After confirmation, DASSET will begin the upload process.

#### Method 2: Drag-and-Drop Upload
- Supports dragging and dropping single or multiple files.
- Supports dragging and dropping single or multiple folders.
- Supports mixed drag-and-drop of files and folders.
There are two ways to drag-and-drop files/folders:
  1. Drag files/folders directly into a specific DASSET device directory.

![](../pc-images/image97.png)

  2. On the Task Center page, drag files/folders into the DASSET client interface.  You will be prompted to select the destination path on the DASSET device.

![](../pc-images/image98.png)

#### Upload Progress
You can view your upload progress and history under [**Task Center Upload**](#task-center).

### File Downloads

File downloads can be performed in two ways:
  1. Use the **Download** button in the menu bar to download files from the DASSET device to your computer.
  2. Drag and drop files from the DASSET device to your computer.

#### Button Download
1.  Select the file(s) and click **Download**.

![](../pc-images/image99.png)

2.  DASSET will automatically begin downloading.
3.  Completed downloads will be saved in: `C:\users\[username]\Downloads` You can also open the file location directly by clicking the completed task in Task Center.

#### Drag-and-Drop Download
You can select and hold files on the file page, then drag them into a folder on your computer. The DASSET client will automatically create a download task and transfer the files from the DASSET device to your computer.
- Supports dragging and dropping single or multiple files.
- Supports dragging and dropping single or multiple folders.
- Supports mixed drag-and-drop of files and folders.

#### Download Progress
You can view your download progress and history under [**Task Center Upload**](#task-center).

### Media File Online Playback

DASSET supports online playback of pc-images, videos, and audio files. Simply double-click the file you want to view.

1.  **Supported Video Formats:**
    * avi, flv, mpg, mov, mkv, mp4, m2ts, asf, wmv, vob, divx, 3gp, mpeg, mts, ts, f4v, hevc
2.  **Supported Image Formats:**
    * bmp, gif, heic, jpg, png, jpeg, tif, tiff, dng
3.  **Supported Audio Formats:**
    * mp3, wma, flac, wav, aac, ape, m4a, ogg

#### Video Playback
Double-click a video file to open the video player for online playback.

1.  Play/Pause
2.  Adjust volume
3.  Video duration and current playback time
4.  Progress bar (supports drag)
5.  Switch between full screen and windowed playback
6.  Share/Send: Share video via member share, QR code, or send to another device
7.  Download: Save the file to your computer
8.  Move To: Move the file to another directory on the DASSET device
9.  Copy: Copy the file to another directory on the DASSET device
10. Delete: Remove the file

![](../pc-images/image105.png)

#### Image Viewing
Double-click an image file to open the image viewer and display the original image.

1.  Image display area
2.  Share/Send: Share image via member share, QR code, or send to another device
3.  Download: Save the file to your computer
4.  Move To: Move the file to another directory on the DASSET device
5.  Copy: Copy the file to another directory on the DASSET device
6.  Delete: Remove the file
7.  Image navigation: Switch between other pc-images in the same directory

![](../pc-images/image106.png)

#### Audio Playback
Double-click an audio file to open the audio player for online playback.

1.  Play/Pause
2.  Sequential/Shuffle play
3.  Progress bar (supports drag)
4.  Next/Previous track
5.  Playlist (all audio files in the same directory are automatically added)
6.  Audio file name

![](../pc-images/image107.png)

## File Sharing / Sending

DASSET supports sharing files stored on a DASSET device in multiple ways, including sending them to other DASSET devices.

### Member Sharing
Enables file sharing between members of the same DASSET device. Suitable for relatively private file sharing without using Group Space or Public Space. This feature is available to all users.

### QR Code Sharing
Generates a share code for a file, which can be provided to other DASSET users to retrieve the file. Suitable when the sender and recipient are not on the same DASSET device and secure file sharing is required.
:::note
The recipient must be the Owner of a DASSET device to receive the file.
:::

### My Other Devices
Copies files from one DASSET device to another, suitable for users who own multiple devices and need cross-device file transfer.
:::note
The operator must be the Owner of the receiving DASSET device.
:::

### Sharing & Sending Files
Right-click the file you wish to share/send, then select **Share/Send** from the context menu.

![](../pc-images/image108.png)

You can also select **Share/Send** from the **top menu bar** in the File Management interface.

![](../pc-images/image109.png)

#### Member Sharing
Member sharing enables file sharing between members on the same DASSET device. This is useful for private file sharing without using the Group Space or Public Space. All users can use this feature.

##### Send Files via Member Sharing
1.  Select the file, then right-click and choose **Share/Send  to Member**

![](../pc-images/image110.png)

2.  In the pop-up window, select the member(s) to share with (multi-selection supported). Click **Send** to confirm.

![](../pc-images/image111.png)

##### Receive Files from Member Sharing
You can find sent sharing requests in [**Task Center**](#task-center) **- Received Shares** on the DASSET device.

![](../pc-images/image112.png)

- Save the file to *My Space* or My Vault.
- Download the file to your local computer.
- Delete the file share entry.
- Delete all share entries.

#### QR Code Sharing
Generates a share code for a file, allowing other DASSET users to retrieve it. Useful when the sender and recipient are on different devices and secure file sharing is required.
:::note 
The recipient must be the Owner of a DASSET device to receive the file.
:::

##### Create QR Code Share
1.  Select the file, then right-click and choose **Share/Send  QR Code**.

![](../pc-images/image113.png)

2.  Sharing via QR code allows you to set rules for accessing the downloaded file, giving you control over its access.
    - **Expiration Date**: Defines validity. After expiry, the share becomes invalid.
    - **Downloadable**: Maximum number of times the file can be downloaded. After the limit, the share becomes invalid.
    - **Permission Settings**:
      - **Public**: Anyone with the QR code can access the file. Suitable for low-security scenarios.
      - **Require Password**: A password must be entered to access the file. Suitable for high-security scenarios.

![](../pc-images/image114.png)

3.  After setting the rules, click **Create Share**. A QR code share will be generated.
    - Click **Copy Full Info** to share all details.
    - Send only the QR code image.
    Displayed information includes:
    1.  QR code (scannable in the DASSET app to retrieve the file)
    2.  Remaining download count
    3.  Share content
    4.  Expiration date
    5.  Share code (can also be entered in the DASSET app to retrieve the file)
    6.  Password required (only shown if a password was set)

    ![](../pc-images/image115.png)

##### Retrieve Files via QR Code Share
1.  Go to [**Task Center**](#task-center) **- Received Shares - QR Code Share** on your DASSET device.
2.  Click **Add Share**.

![](../pc-images/image116.png)

3.  In the pop-up window, enter the share code string and click **Add**.

![](../pc-images/image117.png)

4.  If password-protected, enter the password.

![](../pc-images/image118.png)

5.  After entering the correct code (and password, if required), the file information will appear. Select the file and click **Save**.

![](../pc-images/image119.png)

6.  Choose a directory and click **Confirm**. The file will be saved to your DASSET device.

![](../pc-images/image120.png)

7.  You can monitor progress in the Task Center. Once completed, the file will be available in the selected directory.

#### Send to My Other Devices
Copies files from one DASSET device to another. Useful for users with multiple DASSET devices who need cross-device file transfers.
:::note
The operator must be the Owner of the receiving device.
:::

##### Steps:
1.  Select the file, then click **Share/Send  My Other Devices**.

![](../pc-images/image121.png)

2.  In the pop-up window, select the target DASSET device and click **Confirm**.
:::note
    Note: Only devices where you are the Owner will be displayed.
:::

![](../pc-images/image122.png)

3.  Choose the save path for the file and click **Confirm**. The file will be transferred from the source to the target device.

![](../pc-images/image123.png)

4.  On the target device, go to **Task Center  Received Shares  QR Code Share** to view the transfer progress.

![](../pc-images/image124.png)

### Other File Operations

#### Copy/Move To
You can copy or move files to other directories at any time from the File Management page.

##### File Copy
Copying a file creates a duplicate in the target directory, while the original file remains in its original location.
1.  Select the file and click **Copy/Move To - Copy To**.

![](../pc-images/image100.png)

2.  In the pop-up window, select the target path. DASSET will list all available spaces.

![](../pc-images/image101.png)

3.  Click **Confirm** to execute the copy operation.

##### File Move
Moving a file transfers it from one directory to another. After migration, the file will only exist in the new directory.
1.  Select the file and click **Copy/Move To - Move To**.

![](../pc-images/image102.png)

2.  In the pop-up window, select the target path. DASSET will list all available spaces.

![](../pc-images/image103.png)

3.  Click **Confirm** to execute the move operation.

##### Progress View
You can view copy and move tasks under [**Task Center Upload**](#task-center) **- Other Operations**.

#### Create Folder
Click the **Create Folder** button to create a new folder in the current directory. When creating a folder, you can assign it a name.

![](../pc-images/image104.png)

#### Rename
You can rename files stored on the DASSET device. Enter the new file name, click **Confirm**, and the change will be applied.

![](../pc-images/image125.png)

#### Favorites
You can add files to **Favorites** either by right-clicking a file and selecting *Add to Favorites* or by clicking the **Add to Favorites** button in the top menu bar. Afterward, you can quickly access these files from the Favorites section.

![](../pc-images/image126.png)

To remove a file from Favorites, perform the **Remove from Favorites** operation.

![](../pc-images/image127.png)

#### Delete
For unnecessary files, you can perform a delete operation. The **Delete** option is available in both the right-click menu and the top menu bar. Deletion supports both single and multiple files.

1.  Click the **Delete** button.

![](../pc-images/image128.png)

2.  Choose one of two options:
    - **Permanent Delete**: When selected, the file is immediately deleted and cannot be recovered.
    - **Recycle Bin** (default): If permanent delete is not selected, the file will first be moved to the **Recycle Bin** for 30 days before being permanently deleted.
      - Files in the Recycle Bin can be restored to their original directory if deleted by mistake.

![](../pc-images/image129.png)

#### Hide Files
For sensitive files, you can hide them by doing the following:
1.  Select one or multiple files and click **Hide**.

![](../pc-images/image130.png)

2.  Hidden files will no longer appear in the file list by default.

##### Show Hidden Files
If you want to display hidden files:
1.  On the device home page, click the top-right corner.
2.  Select **Security Settings**.
3.  Enable **Show Hidden Files and Folders**.
4.  Hidden files will now be visible in the file list.

![](../pc-images/image131.png)

#### File Compression and Decompression
DASSET supports online file compression and decompression without requiring local download.
- **Supported Decompression Formats**: .rar, .zip, .tar, .tar.gz
- **Default Compression Format**: Files are compressed into .zip for cross-platform compatibility.

##### Compression
1.  Select one or multiple files, then click **Compress** from the right-click menu or top menu bar.

![](../pc-images/image132.png)

2.  In the pop-up window, choose the save path for the compressed file. You may also create a new folder.
3.  After completion, the compressed file will be saved to the selected path.
    - Multiple files compressed together will generate an archive named **Archiver.zip**.
    - A single file compressed will generate an archive named **\[Original Filename\].zip**.

##### Decompression
1.  Select a compressed file, then click **Decompress** from the right-click menu or top menu bar.

![](../pc-images/image134.png)

2.  In the pop-up window, choose the save path for the decompressed files. You may also create a new folder.
3.  After completion, the decompressed files will be saved to the specified path.

##### Progress Tracking
You can view compression and decompression tasks under [**Task Center**](#task-center) **- Other Operations**.

#### View Details
You can view details of files/folders at any time. Details include file size, file location, creation time, modification time, and other attributes. Displayed details may vary depending on the file type.

![](../pc-images/image136.png)