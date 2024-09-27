import cfonts from 'cfonts';

const isProduction = process.env.NODE_ENV === 'production';

// Función para mostrar la información inicial de Admin-TK en formato móvil optimizado
export const sayAdminTKInfo = () => {
    if (!isProduction) {
        // Admin-TK con fuente compacta y visible
        cfonts.say('Admin-TK', {
            font: 'block',  // Compacto para mejor visualización
            align: 'center',
            colors: ['cyanBright', 'blue'],  // Efecto degradado llamativo
            letterSpacing: 0.5,  // Ajustado para ser más compacto
            lineHeight: 0.3,  // Reduce el espacio entre líneas
            space: false
        });

        // Texto "Bot oficial de" ajustado con fuente más pequeña
        cfonts.say('Bot oficial de', {
            font: 'tiny',  // Fuente más pequeña para que encaje bien
            align: 'center',
            colors: ['white'],
            letterSpacing: 0.3,
            space: false
        });

        // TK-HOST más destacado pero optimizado para móvil
        cfonts.say('TK-HOST', {
            font: 'chrome',  // Llamativo pero ajustado para móvil
            align: 'center',
            colors: ['magentaBright'],  // Manteniendo el color que te gustó
            letterSpacing: 1.5,  // Espaciado más ajustado
        });

        // Creador con estilo minimalista para una mejor visualización
        cfonts.say('Creador Joan TK', {
            font: 'console',
            align: 'center',
            colors: ['yellowBright'],  // Manteniendo los colores originales
            letterSpacing: 0.5,  // Ajustado para ser compacto
            lineHeight: 0.3  // Menos espacio entre líneas
        });
    }
};

// Información del bot también ajustada
export const sayBotInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK Bot Info', {
            font: 'console',
            align: 'center',
            colors: ['cyan'],
            letterSpacing: 0.5,
            lineHeight: 0.3  // Mantenerlo compacto
        });
    }
};

// Otras funciones para la terminal optimizadas
export const sayProcessArgs = (args) => {
    if (!isProduction) {
        cfonts.say(args.join(' '), {
            font: 'console',
            align: 'center',
            colors: ['green'],
            letterSpacing: 0.5,
            lineHeight: 0.3
        });
    }
};

export const sayError = (error) => 
{
    console.error('⚠️ Error:\n', error);
};
