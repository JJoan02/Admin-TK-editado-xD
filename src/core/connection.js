import { makeWASocket, makeInMemoryStore, fetchLatestBaileysVersion } from '@adiwajshing/baileys';
import { state, saveCreds } from './auth.js'; 
import pino from 'pino';

export async function startConnection() {
    const { version } = await fetchLatestBaileysVersion(); // Obtiene la última versión de Baileys compatible con WhatsApp
    const store = makeInMemoryStore({ logger: pino().child({ level: 'fatal', stream: 'store' }) });
    store.readFromFile('./baileys_store.json'); // Ajusta si es necesario
    setInterval(() => store.writeToFile('./baileys_store.json'), 10_000); // Guardar cada 10 segundos

    const sock = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state, // Usa el estado de autenticación guardado
        version, // Usa la versión obtenida
        msgRetryCounterMap: {}, // Para manejar reintentos de mensajes
        syncFullHistory: true
    });

    // Almacena el estado de autenticación cuando cambia
    sock.ev.on('creds.update', saveCreds);

    // Escucha eventos de conexión
    sock.ev.on('connection.update', update => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            console.log('🟢 Conexión establecida con WhatsApp');
        } else if (connection === 'close') {
            console.log('🔴 Conexión cerrada');
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== 401; // Verifica si el error no es de autenticación fallida
            if (shouldReconnect) {
                startConnection(); // Intenta reconectar
            }
        }
    });
}

startConnection();
