---
sidebar_position: 1
---

# File De-Duplication
When bringing all of your data together from multiple devices and clouds, it's likely that you will have the same file from these locations, copied multiple times to your Data Hub.  Finding these files on your own, and deciding which ones to keep vs. delete can be daunting.  

DASSET comes with a built-in feature to find duplicate files, and give you the option to delete them.

<p align="center">
<img src={require("./de-duplication.png").default} style={{transform:'scale(.75)'}} />
</p>

**File De-duplication** can be found in the **Applications** section of the **Home Screen** of DASSET.  Once opened, it will give you the option to choose which Space you would like to scan for duplicate files.  After scanning, you'll be presented with a list of duplicate files found, with an automatic suggestion of which files to delete.  By choosing whether you want files with longer names to be kept, such as *20240502_1.jpg* vs. *20240502.jpg*, or by time and date, you have control over which files are selected by the default *Smart Selection* of files for deletion. Additionally, you are able to review the files before deletion, to ensure you're choosing the correct file.

<p align="center">
<img src={require("./de-duplication-all.png").default} style={{transform:'scale(1.0)'}} />
</p>

Optionally, you can manually select which files to delete by selecting the checkbox next to the file.  Files that are deleted by **File De-Duplication** are put into the [Recycle Bin](recycle.md) in the event you want to restore the file later.