import pkg from 'cfonts'; // Importar todo el paquete
const { say } = pkg;  // Extraer el método 'say'

export function displayHeader() {
  say('Admin-TK', {
    font: 'block',
    align: 'center',
    colors: ['cyan']
  });
  say('Multi Device', {
    font: 'chrome',
    align: 'center',
    colors: ['red']
  });
  say('Developed By • JoanTK', {
    font: 'console',
    align: 'center',
    colors: ['magenta']
  });
}

export function startBot() {
  console.log('Bot Admin-TK iniciado correctamente');
}

