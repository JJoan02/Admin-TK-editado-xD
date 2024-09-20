import './src/config/config.js'; // Carga el archivo de configuración
import { startConnection } from './src/core/connection.js';
import { clearTmpFiles, purgeSessions } from './src/utils/fileUtils.js';

const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

// Iniciar la conexión del bot
startConnection();

// Limpiar archivos temporales periódicamente
setInterval(() => clearTmpFiles(), 180000); // 3 minutos

// Purgar sesiones cada hora
setInterval(() => purgeSessions(), 1000 * 60 * 60);
