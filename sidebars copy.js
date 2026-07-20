const sidebars = {
  DocsSidebar: [
    {
      type: 'doc',
      id: 'getting-started/intro', // document ID
      label: 'Introduction', // sidebar label
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'concepts/device-binding'
        },
        {
          type: 'doc',
          id: 'concepts/devices-screen'
        },
        {
          type: 'doc',
          id: 'concepts/spaces'
        },
        {
          type: 'doc',
          id: 'concepts/roles-permissions'
        },
        {
          type: 'doc',
          id: 'concepts/dasset-instant-connect'
        },
        {
          type: 'doc',
          id: 'concepts/dasset-ai'
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        {
          type: 'category',
          label: 'Windows & macOS',
          items: [
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-introduction'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-installation'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-registration'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-device-list'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-adding-devices'
            },
            {
              type: 'category',
              label: 'Device Management',
              items: [
                {
                  type: 'doc',
                  id: 'user-guide/pc-mac/dasset-device-management'
                },
                {
                  type: 'doc',
                  id: 'user-guide/pc-mac/dasset-storage-management'
                },
                {
                  type: 'doc',
                  id: 'user-guide/pc-mac/dasset-disk-management'
                },
                {
                  type: 'doc',
                  id: 'user-guide/pc-mac/dasset-node-configuration'
                },
                {
                  type: 'doc',
                  id: 'user-guide/pc-mac/dasset-member-management'
                },
                {
                  type: 'doc',
                  id: 'user-guide/pc-mac/dasset-network-management'
                },
              ],
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-file-management'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-file-operations'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-filessync-dedupe'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-applications'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-samba'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-notes'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-im'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-lite-nas'
            },
            {
              type: 'doc',
              id: 'user-guide/pc-mac/dasset-client-settings'
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'OEMs',
      items: [
        {
          type: 'doc',
          id: 'oem-odm/oem-opportunity'
        },
        {
          type: 'doc',
          id: 'oem-odm/oem-software-platform'
        },
      ],
    },
    {
      type: 'doc',
      id: 'faq/faqs',
      label: 'FAQ',
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/connectivity'],
    },
    {
      type: 'doc',
      id: 'privacy-policy/privacy-policy',
      label: 'Privacy Policy',
    },
  ],
};

module.exports = sidebars;