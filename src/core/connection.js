import { makeWASocket } from '../lib/simple.js';
import { state, saveCreds } from './auth.js'; // Autenticación
import pino from 'pino';

export async function startConnection() {
  const conn = makeWASocket({
    logger: pino({ level: 'silent' }),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'fatal' }).child({ level: 'fatal' })),
    }
  });

  conn.ev.on('connection.update', update => {
    if (update.connection === 'open') {
      console.log('🟢 Conexión establecida a Admin-TK');
    }
  });

  conn.ev.on('creds.update', saveCreds);
}
