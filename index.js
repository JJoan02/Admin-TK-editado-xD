import { displayHeader, start } from './src/core/init.js'; // Importar 'displayHeader' y 'start'
import chalk from 'chalk';

console.log(chalk.green('✰ Iniciando Admin-TK ✰'));

// Mostrar el encabezado y luego iniciar el bot
displayHeader();
start('../../start.js');  // Asegúrate de pasar el archivo correcto para iniciar
