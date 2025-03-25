---
sidebar_position: 1
---

# Install the DASSET app
The DASSET application is the way you access the data and applications on your DASSET Data Hub, or a Data Hub that has been shared with you by other Data Hub users.  Once you have the DASSET application installed, you can configure alternative ways to access your files, such as using [SAMBA](../../features/apps/samba.md) which allows you to mount your Data Hub as a mapped drive in Windows or MacOS.

## Step 1: Download DASSET
The DASSET application is available for Android and iPhone mobile devices and tablets, as well as Windows and MacOS computers.

Download DASSET on your device to get started:

<!-- This is a comment 
// <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
//    <a href="https://play.google.com/store/apps/details?id=io.dassetpxl.app">
//        <img src={require("./google-play.png").default} alt="Google Play" style={{transform:'scale(0.75)'}} />
//    </a>
//    <a href="https://apps.apple.com/us/app/dasset-mobile/id6717579195?platform=iphone">
//        <img src={require("./apple-store.png").default} alt="iOS Store" style={{transform:'scale(0.75)'}} />
//    </a>
// </p> -->

<p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
   <a href="https://dassetai.ai/download/dasset.html">
       <img src={require("./dasset-download.png").default} alt="Download DASSET" style={{transform:'scale(0.75)'}} />
   </a>
</p>

## Step 2: Create an Account
After installing the DASSET application, you are presented with the option to either log into an existing user account, or to create a new one.  

1. Select **Sign Up** to get started creating your user account.

<p align="center">
<img src={require("./dasset-app-sign-up.png").default} style={{transform:'scale(1.0)'}} />
</p>

2. By default, you sign-up for an account an email address.  However, you can do so using your mobile phone number if you wish by selecting **Switch to Phone number**.
   
   Enter your email or phone number and select **Send Verification Code** to proceed.

<p align="center">
<img src={require("./dasset-app-email.png").default} style={{transform:'scale(1.0)'}} />
</p>

3. A verification code will be sent to either the email address, or via SMS to your phone, based on which method of sign-up your chose. 
   Enter the verification code into the **Verification Code** field and select **Verify** to proceed.

<p align="center">
<img src={require("./dasset-app-verification.png").default} style={{transform:'scale(1.0)'}} />
</p>

4. You will be prompted to create a password for your new user account.  The password you create must meet the following requirements:
   
   1. No shorter than 6 characters and no longer than 32 characters.
   2. Must include a combination of letters, numbers or symbols.
   
   Be sure to read the **User Agreement** and **Privacy Policy** before proceeding by selecting **Create an account**.

<p align="center">
<img src={require("./dasset-app-password.png").default} style={{transform:'scale(1.0)'}} />
</p>

## Step 3: Log in & Configure
Once you've successfully created your user account, you will be prompted to sign-in for the first time.  When doing so, DASSET will ask for the following permissions:

* <u>**Access to photos and videos on this device**</u> - In order to provide the ability to perform functions such as **Album Backup**, this permission is needed to access your device's camera role.
* <u>**Access to music and audio on this device**</u> - In order to provide the ability to play music stored on your device, this permission is needed.

<p align="center">
<img src={require("./dasset-app-permissions.png").default} style={{transform:'scale(1.0)'}} />
</p>

:::info

When permissions are granted, DASSET never sends your data to PlanetX Labs or any other 3rd parties.

:::

Additionally, you will be asked whether to allow DASSET to send notifications to your phone.

<p align="center">
<img src={require("./dasset-app-notifications.png").default} style={{transform:'scale(1.0)'}} />
</p>

## Step 4: Connect your Data Hub
Upon completion of creating your user account and logging in, you will be presented with the **Devices** screen.  To connect your new Data Hub to your user account, continue to [Set-up your DASSET Data Hub](./device-set-up.md).

<p align="center">
<img src={require("./dasset-app-devices-screen.png").default} style={{transform:'scale(1.0)'}} />
</p>