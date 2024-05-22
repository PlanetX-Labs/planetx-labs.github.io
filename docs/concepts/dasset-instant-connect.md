---
sidebar_position: 1
---

# How Instant Connect Works

Instant Connect provides the ability to reliably connect to a DASSET Data Hub from the DASSET client applications on your phone, PC or Mac.  If Instant Connect is unable to connect to the destination Data Hub after completing the Instant Connect connectivity procedure, Instant Connect will route the connection through PlanetX Labs Cloud Relay Services to establish alternative connectivity.  The following explains the process by which Instant Connect performs for connectivity. 

## Instant Connect Connectivity Procedure
Instant Connect performs a series of attempts to connect the DASSET client application to the destination Data Hub using the user’s DASSET account credentials. Below is the connectivity procedure:

1.	Perform **LAN/WAN** detection to verify server reachability with the registered network addresses on the Instant Connect Server.
2.	Attempt to establish a direct communication tunnel between the DASSET client application and the Data Hub using **Direct Link Technology (DLT)**.
3.	In the event that the DLT tunnel fails to establish a connection, the **Instant Connect Relay Service** will provide alternate connectivity between the DASSET client application and the Data Hub.

### LAN/WAN Detection
When a client attempts to reach a DASSET Data Hub using the user’s DASSET account credentials, a request is sent to PlanetX Labs Instant Connect Server for the registered information of the Data Hub. This allows the client to obtain network information about the Data Hub to identify possible ways to connect it. The information includes the public IP, LAN IP, and NAT type among others, all of which are necessary for the link and do not compromise the security of the Data Hub. With the given information, the client can identify whether a direct connection with the IP or domain address can be established over LAN or WAN.

### Direct Link Technology (DLT)
If no direct local network connection can be established, the client will attempt to establish a virtual tunnel between the client and the Data Hub via Instant Connect to allow a temporary DLT link for data transmission. This technology allows the server and the client to experience Internet synchronization performance very similar to connecting via WAN IP/DDNS without physically having such an environment.

DLT works by initiating a virtual encrypted tunnel from the client to the DASSET Data Hub with the aid of the Instant Connect Server.

<img src={require("./dlt-connection.png").default} style={{transform:'scale(.80)'}} />

1.	When a client needs to access the Data Hub, the client sends a request to the Instant Connect Server to obtain the virtual IP address and public IP address of the Data Hub.
2.	After receiving the network information of the destination Data Hub, the client will try to establish a DLT communication tunnel with the Data Hub with the help of the Instant Connect Server.
3.	After the DLT direct communication tunnel is established, the client communicates with the Data Hub using a session key to implement encrypted network packet transmission. 

With the DLT tunnel successfully established, the remote client uses this connection to communicate with the Data Hub directly and no network relay is needed.

### Instant Connect Relay Service
In cases where the DLT virtual tunnel cannot be created, a relay service is available for data transmission. When traffic is relayed, it goes through a PlanetX Labs Relay Server before arriving at its destination. This requires more time compared to direct connections or DLT as the Instant Connect relay service serves as the final option for data to be communicated between the Data Hub and the client.

If the DLT fails to create a connection, the client will make one last connection attempt by creating a virtual network tunnel using the Instant Connect relay service. The service works as follows:

<img src={require("./relay-connection.png").default} style={{transform:'scale(.80)'}} />

1.	The client sends a relay request for the destination Data Hub to the Instant Connect server.
2.	The Instant Connect Server enables the relay function from the client to the Data Hub, and encrypted data packets are forwarded from the client to the Data Hub or vice versa from the Data Hub to the client on the Instant Connect Server.

In the event a DLT direct communication tunnel from the client to the Data Hub can be established, the client will re-select the DLT direct communication tunnel to exchange data with the Data Hub.  Communicating over the Relay Server can cause a significant delay in data delivery and is thus the last method a client will take in an attempt to reach the Data Hub.

## Instant Connect Security
Even though Instant Connect provides convenient Data Hub management over the web, individuals and businesses can rest assured that all of their private data is protected at all times. In fact, PlanetX Labs goes to great lengths to ensure that the Data Hub server data, data transmissions, web portal, and even the data centers for the PlanetX Labs Instant Connect Servers are impeccably secured.

### Data Hub Information
To enable the Instant Connect service, the PlanetX Labs Data Hub must be registered with the Instant Connect Server. This means the PlanetX Labs Data Hub reports its status, such as network environments and supported services, to the Instant Connect Server.

The reported information (i.e. the public IP address, LAN address, NAT type, etc.) is required for the connectivity procedure. PlanetX Labs safeguards users' digital privacy. The retrieved information is only used by PlanetX Labs in order to deliver the Instant Connect service.

### Relay Tunnel
With the SDVN protocol enabled, data transmission over the network virtual tunnel is secured with end-to-end encryption. Encrypted data packets on the network cannot be hacked by any third party other than the client and Data Hub, including PlanetX labs.Therefore, Instant Connect guarantees confidentiality and integrity of data transmission between the PlanetX Labs Data Hub and client devices.

While providing the promised services, Instant Connect makes no use of collected data from registered PlanetX Labs Data Hub servers except in delivering such services. For more details, visit the Privacy Terms on our official website.

### Facility Security
PlanetX Labs Instant Connect Servers are hosted in data centers in a total of eight sites around the globe to provide high-quality and stable service. All data centers are staffed 24/7, guarded with surveillance systems and strict policies governing personnel access. Facilities are also well equipped to ensure power supply and network availability in the event of outage or preventable disasters.