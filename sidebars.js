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
      ], 
     },
    {
      type: 'category',
      label: 'OEMs',
      items: ['oem-odm/oems'],
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
