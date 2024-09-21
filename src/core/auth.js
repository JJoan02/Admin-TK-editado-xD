import makeWASocket from '@whiskeysockets/baileys';
import { useMultiFileAuthState } from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';

// Vinculación desde la consola (QR o código de 8 dígitos)
export async function startWhatsAppConsole() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');

  const socket = makeWASocket({
    auth: state,
  });

  socket.ev.on('creds.update', saveCreds);

  socket.ev.on('connection.update', (update) => {
    const { qr, connection } = update;

    if (qr) {
      // Mostrar QR en consola
      qrcode.generate(qr, { small: true });
      console.log('Escanea el código QR con tu aplicación de WhatsApp.');
    }

    if (connection === 'open') {
      console.log('Conectado a WhatsApp');
    } else if (connection === 'close') {
      console.log('Conexión cerrada');
    }
  });
}

// Vinculación desde la web (interfaz web con Express y Socket.io)
export async function startWhatsAppWeb() {
  const express = require('express');
  const http = require('http');
  const socketIO = require('socket.io');

  const app = express();
  const server = http.createServer(app);
  const io = socketIO(server);

  app.use(express.static('public')); // Servir los archivos estáticos

  io.on('connection', async (clientSocket) => {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info');
    
    const socket = makeWASocket({
      auth: state,
    });

    socket.ev.on('creds.update', saveCreds);

    socket.ev.on('connection.update', (update) => {
      const { qr, connection } = update;

      if (qr) {
        // Enviar QR al cliente web
        clientSocket.emit('qr', qr);
      }

      if (connection === 'open') {
        console.log('Conectado a WhatsApp');
      } else if (connection === 'close') {
      console.log('Conexión cerrada');
      }
    });
  });

  // Iniciar el servidor en el puerto 3000
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
  });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
}        
