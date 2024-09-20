import { displayHeader, start } from './src/core/init.js'; // Cambiar 'startBot' por 'start'
import chalk from 'chalk';

console.log(chalk.green('✰ Iniciando Admin-TK ✰'));

// Mostrar el encabezado y luego iniciar el bot
displayHeader();
start('start.js');  // Iniciar el bot con el archivo 'start.js'
