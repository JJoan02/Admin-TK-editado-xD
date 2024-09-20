import { displayHeader, startBot } from './src/core/init.js'; // Encabezado y arranque
import chalk from 'chalk';

console.log(chalk.green('✰ Iniciando Admin-TK ✰'));

// Mostrar el encabezado y luego iniciar el bot
displayHeader();
startBot();
