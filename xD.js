import cfonts from 'cfonts';

const isProduction = process.env.NODE_ENV === 'production';

// Función para mostrar la información inicial de Admin-TK
export const sayAdminTKInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK', {
            font: 'shade',  // Un poco más grande que 'simple' pero más pequeño que 'block'
            align: 'center',
            colors: ['white'],
            letterSpacing: 1,  // Ajusta el tamaño
            lineHeight: 1,  // Controla la altura entre líneas
            space: false  // Si deseas menos espacio alrededor del texto
        });
        cfonts.say('TK-HOST', {
            font: 'tiny',  // Más pequeño que Admin-TK pero visible
            align: 'center',
            colors: ['red'],
            letterSpacing: 2  // Mantén un poco de separación para que se vea claro
        });
        cfonts.say('Developed By • JoanTK', {
            font: 'console',
            align: 'center',
            colors: ['yellow']
        });
    }
};

// Definir y exportar la función sayBotInfo
export const sayBotInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK Bot Info', {
            font: 'console',
            align: 'center',
            colors: ['cyan']
        });
    }
};

// Otras funciones de impresión
export const sayProcessArgs = (args) => {
    if (!isProduction) {
        cfonts.say(args.join(' '), {
            font: 'console',
            align: 'center',
            colors: ['green']
        });
    }
};

export const sayError = (error) => 
{
    console.error('⚠️ Error:\n', error);
};
