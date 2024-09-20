import { useMultiFileAuthState } from '@whiskeysockets/baileys';

export const { state, saveState, saveCreds } = await useMultiFileAuthState('AdminSession');
