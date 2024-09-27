import cfonts from 'cfonts';

const isProduction = process.env.NODE_ENV === 'production';

// Función para mostrar la información inicial de Admin-TK
export const sayAdminTKInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK', {
            font: 'block',
            align: 'center',
            colors: ['white'],
            letterSpacing: 1, // Reduce el espacio entre letras
            lineHeight: 1, // Controla la altura entre líneas
            maxLength: '15' // Limita el número máximo de caracteres por línea
        });
        cfonts.say('TK-HOST', {
            font: 'chrome',
            align: 'center',
            colors: ['red'],
            letterSpacing: 1,
            maxLength: '15'
        });
        cfonts.say('Developed By • JoanTK', {
            font: 'console',
            align: 'center',
            colors: ['yellow'],
            letterSpacing: 1,
            maxLength: '15'
        });
    }
};

// Definir y exportar la función sayBotInfo (ajustada también para pantallas pequeñas)
export const sayBotInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK Bot Info', {
            font: 'console',
            align: 'center',
            colors: ['cyan'],
            letterSpacing: 1,
            maxLength: '15'
        });
    }
};

// Otras funciones de impresión
export const sayProcessArgs = (args) => {
    if (!isProduction) {
        cfonts.say(args.join(' '), {
            font: 'console',
            align: 'center',
            colors: ['green'],
            letterSpacing: 1,
            maxLength: '15'
        });
    }
};

export const sayError = (error) => 
{
    console.error('⚠️ Error:\n', error);
};
