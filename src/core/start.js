import { displayHeader, start } from './src/core/init.js';
import chalk from 'chalk';

console.log(chalk.green('✰ Iniciando Admin-TK ✰'));

// Mostrar el encabezado y luego iniciar el bot
displayHeader();
start('./start.js');  // Ruta corregida sin saltos de línea
