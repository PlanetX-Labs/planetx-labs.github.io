---
sidebar_position: 1
---

# How Instant Connect Works

## Overview

**What it does:** Instant Connect provides reliable connectivity between DASSET client applications and Data Hubs without requiring users to configure routers, networks, or firewalls.

**Why it matters:** Traditional NAS and self-hosted solutions require complex network configuration (port forwarding, dynamic DNS, VPN setup). Instant Connect eliminates this complexity entirely—users just log in and connect.

**How users experience it:** Click to connect. It works from anywhere—home network, coffee shop, hotel, or halfway around the world. No technical knowledge required.

## Instant Connect Connectivity Procedure
Instant Connect automatically performs a series of connection attempts to find the fastest, most reliable path to your Data Hub:

### Step 1: LAN/WAN Detection

**What happens:** When you try to connect, your DASSET app contacts PlanetX Labs Instant Connect servers with your credentials.

**What the server does:**

* Looks up your Data Hub's registered network information  
* Returns public IP address, local network IP, NAT type, and other connection details  
* All information is necessary for connectivity and doesn't compromise security

**What your app does:** Uses this information to determine the best connection method—local network (if you're home) or internet connection (if you're remote).

**Why this step:** Fastest possible connection is always local network. Instant Connect checks for this first before trying internet-based methods.

### Step 2: Direct Link Technology (DLT)**

**What it is:** If local connection isn't available, DLT creates a direct encrypted tunnel between your device and your Data Hub over the internet.

**How it works:**

1. Your app requests virtual IP and public IP information from Instant Connect server  
2. With server assistance, your app establishes direct encrypted tunnel to Data Hub  
3. Once tunnel is established, all data flows directly between your device and hub  
4. Session keys encrypt all network packets end-to-end

<img src={require("./dlt-connection.png").default} style={{transform:'scale(.80)'}} />

**Why this matters:** Direct connections are nearly as fast as local network access. No data routes through intermediate servers—it goes straight from your device to your hub.

**Technical benefit:** Lowest latency, highest throughput. Best experience for streaming media, editing files, or transferring large amounts of data.

### Step 3: Instant Connect Relay Service

**What it is:** Backup connectivity method when direct connection isn't possible due to restrictive networks or firewalls.

**When it's used:** If local network detection fails AND Direct Link Technology can't establish a tunnel, Instant Connect automatically falls back to relay service.

**How it works:**

1. Your app sends relay request to Instant Connect server  
2. Server enables relay function and begins forwarding encrypted data packets  
3. Data flows: Your device → Relay Server → Your Data Hub (and vice versa)  
4. If direct connection becomes possible later, system automatically switches back to DLT

<img src={require("./relay-connection.png").default} style={{transform:'scale(.80)'}} />

**Important notes:**

* All data is encrypted end-to-end—relay server can't read your data  
* Relay adds some latency compared to direct connection  
* Used as last resort for connectivity  
* Still maintains full security and privacy

**Why this matters:** Even in the most restrictive network environments, you can still access your data. Connection reliability is guaranteed.

## Security Architecture

**Data Hub Information Privacy**

**What gets reported:** To enable Instant Connect, your Data Hub registers with Instant Connect servers and reports its network status (public IP, local network address, NAT type, supported services).

**Why this information is needed:** Required for the connectivity procedure—helps your apps find and connect to your hub.

**Privacy protection:** This information is only used to deliver Instant Connect service. PlanetX Labs never accesses your actual data. We only see network metadata needed for connectivity.

**End-to-End Encryption**

**What it means:** Data transmission over network tunnels uses end-to-end encryption with SDVN protocol.

**How it works:**

* All data encrypted on your device before transmission  
* Encrypted packets travel over network (direct or relay)  
* Data decrypted only on receiving device (your hub or your device)

**Security guarantee:** Encrypted data packets cannot be read by any third party—not network providers, not relay servers, not even PlanetX Labs. Only your devices have the decryption keys.

**Technical specifications:**

* Industry-standard encryption protocols  
* Session-based keys for each connection  
* Perfect forward secrecy  
* Protection against man-in-the-middle attacks

## Infrastructure Security

**Data center security:**

* Instant Connect servers hosted in 12 locations globally  
* All facilities staffed 24/7  
* Physical security: surveillance systems, strict access controls  
* Redundant power and network for high availability  
* Geographic distribution ensures service reliability

**Operational security:**

* Regular security audits and penetration testing  
* Automated threat detection and response  
* Compliance with industry security standards  
* Transparent privacy policy and practices

## Performance Characteristics

**Connection priority (fastest to slowest):**

1. **Local network:** Full LAN speed, zero latency overhead  
2. **Direct Link Technology:** Near-local speed, minimal latency  
3. **Relay Service:** Reduced speed, moderate latency

**Automatic optimization:** System continuously monitors connection quality and switches to faster methods when available. Users don't manage this—it happens automatically.

**User experience:** Regardless of connection method, users experience seamless access. The system handles all complexity in the background.

## For OEMs: Why Instant Connect Matters

**Eliminates barriers to adoption:** Traditional NAS devices have terrible connectivity stories. Users struggle with router configuration, dynamic DNS, VPN setup. Instant Connect eliminates all of this.

**Reduces support burden:** No connectivity support tickets. No helping users configure routers. It just works.

**Competitive advantage:** Most competitors require technical expertise for remote access. DASSET-powered devices work out of the box for anyone.

**Cost included:** Global infrastructure included in your software license. No per-user fees, no infrastructure costs passed to your customers.

**Market positioning:** "Works like the cloud" is compelling marketing message. Instant Connect makes this possible while maintaining complete privacy.

## Summary: Key Technical Differentiators

**For End Users**

**Simple:** 15-minute setup, works like cloud storage **Private:** Data stays on your device, encrypted end-to-end **Smart:** AI-powered organization and search, all local **Accessible:** Connect from anywhere without configuration **Economical:** One-time purchase, no monthly fees

**For OEMs**

**Complete platform:** OS, apps, AI engine, global infrastructure included **Lower costs:** Reduced engineering and operational expenses **Market differentiation:** Privacy-first positioning captures growing market **Proven technology:** Battle-tested platform ready to deploy **Partner support:** Technical documentation, co-marketing, integration assistance

**For Developers**

**Open platform:** SDK for building AI agents and applications **Privacy-preserving:** Build on user-owned data **Rich capabilities:** Access to AI engine, storage, and sync services **Growing ecosystem:** Join partners building next-generation privacy-first solutions