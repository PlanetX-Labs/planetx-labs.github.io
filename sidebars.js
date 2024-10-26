/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

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
          id: 'features/contacts-backup'
        },
        {
          type: 'doc',
          id: 'features/recycle'
        },
        {
          type: 'doc',
          id: 'features/de-duplication'
        },
        {
          type: 'doc',
          id: 'features/external-storage'
        },
        {
          type: 'doc',
          id: 'features/samba'
        },
        {
          type: 'doc',
          id: 'features/dlna'
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
