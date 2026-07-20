---
sidebar_position: 9
---

# Network Management

On the **Network Management** page, you can configure:
- **LAN Settings**: Change the password for Samba and Time Machine access.
- **LAN IP Management**: Configure the DASSET device's network information.
- **Link Aggregation**: If your device has multiple network ports, you can aggregate them into a single logical port to improve transfer performance.

### LAN Settings

1.  Click **Change Password**.
2.  In the pop-up window, enter the new password and click **Confirm**.

![](../pc-images/image90.png)

### LAN IP Management

LAN IP address management supports two modes:
- **Automatic IP (DHCP)**: The switch assigns the device an IP automatically, requiring no manual configuration. Suitable for out-of-the-box use without networking knowledge.
- **Manual Network Configuration**: Assign a fixed IP address to the device. Recommended for scenarios requiring a stable IP, such as Samba services.

:::warning
When manually configuring IP, ensure the address matches the connected network segment and is not already in use. If the device cannot come online after manual configuration, press and hold the device's **reset** button to restore IP settings.
:::

![](../pc-images/image91.png)

#### Automatic IP (DHCP)

By default, DASSET devices use **DHCP** for ease of setup.
On the **LAN IP Management** page, you can view:
- Current IP address of the device
- Subnet mask
- Gateway IP address

:::note
DHCP-assigned IPs cannot be modified manually.
:::

![](../pc-images/image92.png)

#### Manual Network Configuration

Recommended for Samba or similar services to avoid IP changes caused by DHCP.
When enabled, you can configure:
- IP address
- Subnet mask
- Gateway
- Primary and secondary DNS
After setup, you can access services like Samba using the fixed IP address.

![](../pc-images/image93.png)

### Dual-port Link Aggregation

If your device has multiple network ports, you can connect multiple cables and configure link modes in **Network Management**:
- **Balance Polling Mode**: Network ports take turns transmitting packets, providing load balancing and fault tolerance. Requires switch support for port aggregation.
- **Primary/standby Mode**: One port is active while the other serves as backup. The backup port takes over if the primary fails.
- **Dynamic Link Aggregation (IEEE 802.3ad LACP)**: For switches supporting LACP. Provides real-time link monitoring, load balancing, and failover.
- **Adaptive Load Balancing**: Distributes traffic automatically across ports without requiring special switch support.

:::warning
To avoid issues, connect both network ports to the same switch when using link aggregation.
:::

![](../pc-images/image94.png)