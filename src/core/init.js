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
var isRunning = false;
function start(file) {
if (isRunning) return;
isRunning = true;
let args = [join(__dirname, file), ...process.argv.slice(2)];
say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
colors: ['green']
});
setupMaster({
exec: args[0],
args: args.slice(1),
});
let p = fork();
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill();
isRunning = false;
start.apply(this, arguments);
break;
case 'uptime':
p.send(process.uptime());
break;
}
});
p.on('exit', (_, code) => {
isRunning = false;
console.error('🚩 Error:\n', code);
process.exit();
if (code === 0) return;
watchFile(args[0], () => {
unwatchFile(args[0]);
start(file);
});
});
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim());
});
}
process.on('warning', (warning) => {
if (warning.name === 'MaxListenersExceededWarning') {
console.warn('🚩 Se excedió el límite de Listeners en:');
console.warn(warning.stack);
}
});
start('start.js');
