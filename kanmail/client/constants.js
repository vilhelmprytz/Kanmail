export const ALWAYS_SYNC_FOLDERS = [
    'inbox',
    'sent',
    'archive',
];

export const ALIAS_FOLDERS = ALWAYS_SYNC_FOLDERS.concat([
    'drafts',
    'trash',
    'spam',
]);

export const ALIAS_TO_ICON = {
    'inbox': 'inbox',
    'sent': 'paper-plane',
    'drafts': 'file',
    'archive': 'archive',
    'trash': 'trash',
    'spam': 'crosshairs',
};

export const PROVIDERS_DOC_LINK = 'https://kanmail.io/docs/email-providers'
export const SUPPORT_DOC_LINK = 'https://kanmail.io/support'
