---
sidebar_position: 2
---

# DASSET Software Platform

The DASSET software platform is a suite of components that power the Data Hub ecosystem.  The following are the core components that make-up the software platform:

* **DASSET OS & firmware** 
* **DASSET Client application** 
* **DASSET Instant Connect Networking Service** 

## DASSET OS & Firmware

The Data Hub itself is a computer, which spans several hardware configurations based on the computer manufacturer's preferences.  The DASSET OS is a Linux-based operating system which provides the capabilities needed to run the Data Hub itself.  This also includes the lower-level firmware for specific hardware components of the Data Hub as well as the the DASSET AI engine, which applications use to process AI-related tasks on the Data Hub directly.

:::info

DASSET-powered Data Hub hardware will be available in the market soon for purchase.

Sign-up on the [waitlist](https://forms.gle/4x1JTsdVEz5kqG2h7) to be notified when DASSET-powered Data Hubs will be available!

:::

### Features
DASSET-powered Data Hubs are designed to blend in with your everyday life.  An appliance, like any other in
in your home, should be attractive, quiet and reliable.  Below are some of the hardware features of the
Data Hub:

:::info

Specific HW features of the Data Hub will vary based on the configuration offered by the computer manufacturer

:::

| Feature                   | Details                                                   |
|:--------------------------|:----------------------------------------------------------|
| LVM, RAID 0,1,5,6         | Options to configure the HDDs in your Data Hub to protect against failure        |
| Quiet operation           | Thermal-based, low-rpm fan                                |
| Tool-free maintenance     | Adding or removing HDDs can be done without tools         |
| Adaptive power management | Options to shut down and restart based on timers or usage |
| Status LED indicators     | Indicates status of power, HDD activity and network status |
| Reset button              | Recessed reset button to reset the Data Hub's networking configuration |


## DASSET Client Applications

DASSET-powered Data Hubs are **headless**, meaning that they do not connect to a computer monitor, keyboard or
mouse.  Instead, you interact with the Data Hub through the DASSET client applications for your computer or mobile device.

The DASSET client applications are avaialble for the following platforms:

* ![Android](android16x16.png)  Android ([download on Google Play](https://play.google.com/store/apps/details?id=io.weline.dasset))
* ![iOS](ios16x16.png)  iOS (coming soon)
* ![Windows](windows16x16.png)  Windows (coming soon)
* ![MacOS](macos16x16.png)  MacOS (coming soon)

### Features
What you can do with DASSET goes beyond just file storage and data sharing.  The below table are
just some of the capabilities of DASSET:

| Feature               | Details                                                   |
|:----------------------|:----------------------------------------------------------|
| File Synchronization  | Synchronize files from your client device to the Data Hub & vice-versa |
| File Sharing          | Share files with anyone, including download limits and expiration date |
| User management       | Ability to invite others to access and use your Data Hub    |
| Quota Management      | Set the amount of storage others can use on your Data Hub    |
| SMB Sharing           | Connect your PC directly to the Data Hub as a mapped network drive |
| File Indexing         | Quickly search for files on your Data Hub |
| Cloud Sync            | Synchronize your files between your Data Hub and cloud provider |
| Docker                | Host your own Docker containers on the Data Hub |
| Secure Anywhere Access | Access your files on the Data Hub from any internet location using the built-in VPN |
| File De-Duplication   | Search for, and remove, duplicate files on the Data Hub |
| DLNA                  | Broadcast your Data Hub on your local network for devices such as TVs to see and access content |

## DASSET Instant Connect
The ability to securely connect to your DASSET-powered Data Hub is paramount in protecting your privacy.  While connecting to devices within your home or small business network is relatively easy, doing so from the internet is more complicated as the public internet is inherently not secure.

DASSET Instant Connect is the networking service used to ensure easy, secure connectivity to your Data Hub, regardless of your network infrastructure.  DASSET Instant Connect uses Software-Defined Networking (SDN) and Software-Defined Virtual Network (SDVN) technology to establish a virtual tunnel between the client and the Data Hub when connecting to your Data Hub from the internet.  This point-to-point connection is encrypted, ensuring your connection is not only secure, but fast.

And the best part, no configuration is needed by the user to use DASSET Instant Connect.  It automatically detects your network environment, and does the configuration needed to establish the appropriate connection.

For more information on the DASSET Networking Sevice, see [**What is SDN & SDVN?**](../concepts/sdnsdvn.md).