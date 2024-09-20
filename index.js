import { join, dirname } from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';
import chalk from 'chalk';

// Estilo de inicio
const startUpMessage = `
██████╗ ██╗   ██╗██╗███╗   ██╗██╗  ██╗
██╔══██╗██║   ██║██║████╗  ██║██║  ██║
██████╔╝██║   ██║██║██╔██╗ ██║███████║
██╔═══╝ ██║   ██║██║██║╚██╗██║██╔══██║
██║     ╚██████╔╝██║██║ ╚████║██║  ██║
╚═╝      ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝
`;

console.log(chalk.green(startUpMessage));
console.log(chalk.yellow('✰ Iniciando Admin-TK ✰'));

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(__dirname);
const { name, description, author, version } = require(join(__dirname, './package.json'));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

// Función para mostrar el encabezado del bot
function displayHeader() {
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

let isRunning = false;

// Función para iniciar el proceso del bot
function start(file) {
    if (isRunning) return;
    isRunning = true;
    
    const args = [join(__dirname, file), ...process.argv.slice(2)];
    
    say([process.argv[0], ...args].join(' '), {
        font: 'console',
        align: 'center',
        colors: ['green']
    });

    setupMaster({
        exec: args[0],
        args: args.slice(1),
    });

    const worker = fork();

    worker.on('message', data => {
        if (data === 'reset') {
            worker.process.kill();
            isRunning = false;
            start.apply(this, arguments);
        } else if (data === 'uptime') {
            worker.send(process.uptime());
        }
    });

    worker.on('exit', (_, code) => {
        isRunning = false;
        console.error(chalk.red('🚩 Error:\n'), code);
        if (code !== 0) {
            watchFile(args[0], () => {
                unwatchFile(args[0]);
                start(file);
            });
        }
    });

    const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();

    if (!opts['test'] && !rl.listenerCount()) {
        rl.on('line', line => {
            worker.emit('message', line.trim());
        });
    }
}

// Manejo de advertencias
process.on('warning', warning => {
    if (warning.name === 'MaxListenersExceededWarning') {
        console.warn(chalk.yellow('🚩 Se excedió el límite de Listeners en:'));
        console.warn(warning.stack);
    }
});

// Ejecutar la función para mostrar el encabezado
displayHeader();
start('start.js');
