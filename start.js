import './src/config/config.js'; // Carga el archivo de configuración
import { startWhatsAppConsole, startWhatsAppWeb } from './src/core/auth.js'; // Importar métodos de autenticación
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(chalk.green(`\nBienvenido a Admin-TK`));
  console.log(chalk.cyan('Seleccione un método de vinculación para WhatsApp:\n'));
  console.log('1. Vincular desde la consola (QR o código de 8 dígitos)');
  console.log('2. Vincular desde la interfaz web (QR)');
  console.log(chalk.yellow('Seleccione una opción (1 o 2):'));

  rl.question('> ', async (answer) => {
    switch (answer) {
      case '1':
        console.log(chalk.green('Vinculando desde la consola...'));
        await startWhatsAppConsole(); // Vinculación desde consola
        break;
      case '2':
        console.log(chalk.green('Vinculando desde la web...'));
        await startWhatsAppWeb(); // Vinculación desde la interfaz web
        break;
      default:
        console.log(chalk.red('Opción no válida. Intente nuevamente.'));
        showMenu(); // Volver a mostrar el menú si la opción es inválida
        break;
    }
  });
}

showMenu();  // Mostrar el menú de selección al arrancar
