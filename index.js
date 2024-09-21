import { displayHeader, start } from './src/core/init.js';
import chalk from 'chalk';

console.log(chalk.green('✰ Iniciando Admin-TK ✰'));

displayHeader();
start('./start.js');
