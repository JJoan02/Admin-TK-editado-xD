import { makeWASocket, makeCacheableSignalKeyStore } from '@adiwajshing/baileys'; // Ajusta si es necesario
import { state, saveCreds } from './auth.js'; 
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
    console.log('Estado de la conexión:', update);
    if (update.connection === 'open') {
      console.log('🟢 Conexión establecida a Admin-TK');
    } else if (update.connection === 'close') {
      console.log('🔴 Conexión cerrada');
    }
  });

  conn.ev.on('creds.update', saveCreds);
}

