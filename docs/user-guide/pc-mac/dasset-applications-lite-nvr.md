# Lite NVR

The DASSET device supports cameras compatible with the **Onvif protocol**, enabling centralized management of cameras, storage of surveillance video, real-time and historical video viewing, and PTZ (pan-tilt-zoom) control. You can securely view surveillance footage anytime, anywhere without the privacy risks associated with uploading video to the cloud.

![](../pc-images/image220.png)

### Add a Camera
1.  Click **+** to search for cameras on the same LAN as the DASSET device.
:::important
Ensure the camera and DASSET device are connected to the same LAN, the camera supports Onvif, and the camera is powered on with network access.
:::
![](../pc-images/image221.png)
2.  Wait for the search results. The process is usually quick.
![](../pc-images/image222.png)
3.  Once discovered, the camera will appear in the results list.
![](../pc-images/image223.png)
4.  Click the camera to open its configuration page. If authentication is required, enter the username and password of the camera (check the camera manual or contact the manufacturer if needed).
5.  On the add-camera page, configure the following settings:
![](../pc-images/image224.png)
1.  **Camera Name**: Display name in the Video Monitor application.
2.  **Enable recording:** Enable recording to save camera footage to the DASSET device.
3.  **Record Location**: Specify where video files will be saved.
:::tip
Unless the video needs to be shared with other DASSET members, save it in* **My Space** *or* **Group Space** *(accessible only by group members).*
:::
5.  **Segment Duration**: Define the length of each video file. DASSET will split and save videos accordingly.
![](../pc-images/image225.png)
5.  **Storage Capacity Limit**: Set a maximum storage capacity for video files. Once reached, older recordings will be overwritten to free space.
![](../pc-images/image226.png)
6.  **Brand**: The system will auto-detect the brand via the Onvif protocol. You can manually correct this if necessary.
![](../pc-images/image227.png)
7.  **LAN IP**: Displays the current LAN IP address of the camera.
6.  Click **Confirm Add**. The camera will now appear in the Video Monitor page.

### View Live Video
In the Video Monitor page, you can view connected cameras with a static preview, camera name, and timestamp. You can also edit or refresh the camera view.
1.  Camera preview and current time
2.  Camera name
3.  Camera configuration (including delete option)
4.  Refresh the current page
5.  Add a new camera
![](../pc-images/image228.png)

### Camera Monitoring Operations
Click a camera preview to enter its monitoring interface. You can:
1.  View the live feed with timestamp
2.  Adjust audio volume
3.  Switch to fullscreen
4.  Use PTZ controls
5.  View recorded playback
6.  Edit camera settings (see Add Camera section)
![](../pc-images/image229.png)

#### PTZ Control
Click the directional keys to adjust the camera angle. *If PTZ is not supported by your camera, a notification will be displayed.*
![](../pc-images/image230.png)

#### View Playback
1.  In the monitoring interface, click **Playback** to view recorded videos stored on the DASSET device. Recordings are listed chronologically based on recording duration.
![](../pc-images/image231.png)
2.  Use the calendar to locate recordings from a specific date.
![](../pc-images/image232.png)
3.  Click a video segment to play it. Options include:
    - Switch quickly between previous/next recordings
    - Pause/Play
    - Adjust audio volume
    - Display video duration and current playback timestamp
    - Fullscreen playback
    - Show the file name of the current video
![](../pc-images/image233.png)

### Delete a Camera
You can remove cameras from the DASSET device at any time.
1.  From the Video Monitor home page or monitoring interface, click the **gear icon**.
2.  Select **Delete Camera** to complete the removal.
![](../pc-images/image234.png)