import './src/config/config.js'; // Carga el archivo de configuración
import { startConnection } from './src/core/connection.js';
import { clearTmpFiles, purgeSessions } from './src/utils/fileUtils.js';
import { initAuth } from './src/core/auth.js'; // Importar la inicialización de auth

const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

// Inicializar la autenticación y luego iniciar la conexión
async function startBot() {
  await initAuth();  // Asegúrate de que la autenticación esté lista
  startConnection();

  // Limpiar archivos temporales periódicamente
  setInterval(() => clearTmpFiles(), 180000); // 3 minutos

  // Purgar sesiones cada hora
  setInterval(() => purgeSessions(), 1000 * 60 * 60);
}

startBot();  // Ejecutar la función de arranque del bot
