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
    console.log('Estado de la conexión:', update);  // Agregar depuración
    if (update.connection === 'open') {
      console.log('🟢 Conexión establecida a Admin-TK');
    } else if (update.connection === 'close') {
      console.log('🔴 Conexión cerrada');
    }
  });

  conn.ev.on('creds.update', saveCreds);
}
