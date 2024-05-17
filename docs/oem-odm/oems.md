---
sidebar_position: 1
---

# DASSET Software Platform

The DASSET Software Platform is a suite of components and services that enables OEMs to build DASSET-Powered Data Hubs.  The following are the core components that make-up the software platform:

<img src={require("./dasset-software-platform.png").default} style={{transform:'scale(.80)'}} />

OEMs can license the DASSET Software Platform from PlanetX Labs, which lowers their non-recurring engineering costs for entering the smart storage market for Consumers and SMBs.  

## Data Hub OS

The Data Hub itself is a computer, which spans several hardware configurations based on the computer manufacturer's preferences.  The DASSET OS is a Linux-based operating system which provides the capabilities needed to run the Data Hub itself.  This also includes the lower-level firmware for specific hardware and networking components of the Data Hub as well as the the DASSET AI & ML engine, which applications use to process AI-related tasks on the Data Hub directly.

### OEM Hardware Options
DASSET-powered Data Hubs are designed to blend in with your everyday life.  An appliance, like any other in your home, should be attractive, quiet and reliable.  Below are some of the hardware features OEMs should consider when building a DASSET-powered Data Hub:

| Feature                   | Details                                                   |
|:--------------------------|:----------------------------------------------------------|
| AI-optimized chipset      | Chipsets which include integrated GPU & NPU to accelerate AI operations such as Intel's Core Ultra 7 series |
| Discrete graphics         | Optional but recommended when AI-optimized chipsets are not present |
| 4GB - 32GB DDR5 RAM       | Certain capabilities and response time will be limited on 4-8GB configurations |
| eMMC 32G                  | For DASSET OS image                                       |
| M.2 SSD / 3.5" SATA HDD   | For end-user data storage.  Minimum 2 disks, recommended 4-8                 |
| LVM, RAID 0,1,5,6         | Options to configure the HDDs/SSDs to protect against failure  |
| RJ45 Gigabit Ethernet     | Minimum 1, recommended 2                                  |
| USB 3.2 / Thunderbolt 4   | Both recommended for data ingestion flexibility with Thunderbolt ports on front and back, and USB Type A port in the front |
| Quiet operation           | Thermal-based, low-rpm fan                                |
| Tool-free maintenance     | Adding or removing HDDs can be done without tools         |
| Status LED indicators     | Indicates status of power, HDD activity and network status |
| Reset button              | Recessed reset button to reset the Data Hub's networking configuration |


## DASSET Client Applications

DASSET-powered Data Hubs are **headless**, meaning that they do not connect to a computer monitor, keyboard or
mouse.  Instead, you interact with the Data Hub through the DASSET client applications for your computer or mobile device.

The DASSET client applications are available for the following platforms:

* ![Android](android16x16.png)  Android ([download on Google Play](https://play.google.com/store/apps/details?id=io.weline.dasset))
* ![iOS](ios16x16.png)  iOS (coming soon)
* ![Windows](windows16x16.png)  Windows (coming soon)
* ![MacOS](macos16x16.png)  MacOS (coming soon)

### OEM Customization
With multiple OEMs producting DASSET-Powered Data Hubs, it's important that OEMs have options to differentiate their products, giving customers an OEM experience when interacting with their Data Hub using the DASSET client applications.

PlanetX Labs offers OEM customization services, enabling OEMs to deliver their branding directly to customers. The DASSET client application is developed and published on respective app stores by PlanetX Labs.  Rather than having multiple DASSET client applications for each OEM, the application is built to support OEM customization such that once a user connects to the OEM's DASSET-Powered Data Hub, the OEM customization will be surfaced to the user.

The default customization option in the DASSET client application 

#### 1 - Default OEM Customization
When the user logs into the DASSET Client Application and is presented with the Devices page, each Data Hub the user is connected to will be shown.  Data Hubs produced by OEMX will have the image of their particular device shown, along with OEMX's logo.  The same is true if OEMY is also a device connected to the user's DASSET account.

<img src={require("./oem-customization.png").default} style={{transform:'scale(.80)'}} />

#### 2 - Other OEM Customization Options
For OEMs that want additional customization options, this service is available for a fee based on the level of customization desired, based on technical feasability. OEMs can contact [PlanetX Labs](https://planetxlabs.io/contact) for more information and pricing.

## SDVN Network Infrastructure
The SDVN Network Infrastructure (DASSET Instant Connect), is a service offered by PlanetX Labs for OEM's customers using a DASSET-Powered Data Hub to establish secure, private communication between the user and the Data Hub.  PlanetX Labs offers 12 super gateways, geographically distributed to ensure quick authentication at the following locations:

* Beijing
* Guangzhou
* Hong Kong
* Tokyo
* Singapore
* Sydney
* Djibouti
* Frankfurt
* San Francisco
* New York
* Oregon
* Vancouver BC

Learn more about the [**DASSET Instant Connect**](../concepts/dasset-instant-connect).

## OEM Licensing Details

In addition to the above components, included in the OEM License for OEMs is the following:

* 5 concurrent users connected to a DASSET-Powered Data Hub
* Allowance for each user to connect up to 3 devices to a DASSET-Powered Data Hub
* Basic DASSET Instant Connect service usage

For details on licensing options, including additional client connectivity, user connectivity or accelerated DASSET Instant Connect service usage, contact [PlanetX Labs](https://planetxlabs.io/contact).