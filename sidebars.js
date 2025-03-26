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
      label: 'Features',
      items: [
        {
          type: 'doc',
          id: 'features/account-settings'
        },
        {
          type: 'doc',
          id: 'features/homescreen'
        },
        {
          type: 'category',
          label: 'Applications',
          items: [
            {
              type: 'doc',
              id: 'features/apps/album-backup'
            },
            {
              type: 'doc',
              id: 'features/apps/contacts-backup'
            },
            {
              type: 'doc',
              id: 'features/apps/recycle'
            },
            {
              type: 'doc',
              id: 'features/apps/de-duplication'
            },
            {
              type: 'doc',
              id: 'features/apps/external-storage'
            },
            {
              type: 'doc',
              id: 'features/apps/samba'
            },
            {
              type: 'doc',
              id: 'features/apps/dlna'
            },
          ],
        },
        {
          type: 'category',
          label: 'Settings',
          items: [
            {
              type: 'doc',
              id: 'features/settings/settings-home'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-device-info'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-share-device'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-member-management'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-hardware-status'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-disk-management'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-disk-self-test'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-disk-sleep'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-security-settings'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-lan-settings'
            },
            {
              type: 'doc',
              id: 'features/settings/settings-power-management'
            },
          ],
        },
      ], 
     },
     {
      type: 'category',
      label: 'How to',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
          {
            type: 'doc',
            id: 'how-to/getting-started/dasset-app-install'
          },
          {
            type: 'doc',
            id: 'how-to/getting-started/device-set-up'
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
