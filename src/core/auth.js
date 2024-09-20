import { useMultiFileAuthState } from '@whiskeysockets/baileys';

export let state, saveState, saveCreds;

export async function initAuth() {
  const auth = await useMultiFileAuthState('AdminTKSession');
  state = auth.state;
  saveState = auth.saveState;
  saveCreds = auth.saveCreds;
}
