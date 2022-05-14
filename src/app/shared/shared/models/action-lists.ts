import { ActionList } from './action-list';

export const ACTIONLISTS: ActionList[] = [
  {
    message: 'Upload the invoice',
    from: {
      name: 'User 1',
    },
    description: 'Upload the file here',
    actions: [
      {
        control: 'file',
        config: {},
      },
    ],
  },
  {
    message: 'Here is the report',
    from: {
      name: 'User 2',
    },
    attachments: [
      {
        name: 'report.pdf',
        url: 'https://files.server.com/report.pdf',
      },
    ],
  },
  {
    message: 'Employees want to work from home',
    from: { name: 'User 1' },
    description: 'Should we allow this',
    actions: [
      {
        control: 'button',
        config: {
          label: 'Yes',
        },
      },
      {
        control: 'button',
        config: {
          label: 'No',
        },
      },
    ],
  },
];
