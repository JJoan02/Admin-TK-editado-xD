import cfonts from 'cfonts';

const isProduction = process.env.NODE_ENV === 'production';

// Función para mostrar la información inicial de Admin-TK en formato móvil
export const sayAdminTKInfo = () => {
    if (!isProduction) {
        // Nombre del sistema "Admin-TK" con un tamaño más reducido para móviles
        cfonts.say('Admin-TK', {
            font: 'block',  // Compacto pero llamativo, adecuado para pantallas pequeñas
            align: 'center',
            colors: ['cyanBright', 'blue'],  // Efecto degradado para darle personalidad
            letterSpacing: 1,  // Compacto para ahorrar espacio
            lineHeight: 0.5,  // Reduce el espacio entre líneas para que sea más compacto
            space: false
        });
        
        // Texto "Bot oficial de" ajustado para móviles
        cfonts.say('Bot oficial de', {
            font: 'simple',  // Tamaño más pequeño pero claro
            align: 'center',
            colors: ['white'],
            letterSpacing: 1,  // Mantén la separación ajustada
            space: false
        });

        // Nombre "TK-HOST" destacado con tamaño y color llamativo
        cfonts.say('TK-HOST', {
            font: 'chrome',  // Grande y llamativo
            align: 'center',
            colors: ['magentaBright'],  // Color fuerte que resalta
            letterSpacing: 2
        });

        // Nombre del creador con estilo consola, más formal
        cfonts.say('Creador Joan TK', {
            font: 'console',
            align: 'center',
            colors: ['yellowBright'],
            letterSpacing: 1,
            lineHeight: 0.5
        });
    }
};

// Definir y exportar la función sayBotInfo para móviles
export const sayBotInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK Bot Info', {
            font: 'console',
            align: 'center',
            colors: ['cyan'],
            letterSpacing: 1,
            lineHeight: 0.5  // Mantenerlo compacto
        });
    }
};

// Otras funciones de impresión para argumentos de proceso
export const sayProcessArgs = (args) => {
    if (!isProduction) {
        cfonts.say(args.join(' '), {
            font: 'console',
            align: 'center',
            colors: ['green'],
            letterSpacing: 1,
            lineHeight: 0.5
        });
    }
};

export const sayError = (error) => 
{
    console.error('⚠️ Error:\n', error);
};
