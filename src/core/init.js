import { say } from 'cfonts';

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
  console.log('Admin-TK iniciado correctamente');
}
