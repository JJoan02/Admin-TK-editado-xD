import cfonts from 'cfonts';

const isProduction = process.env.NODE_ENV === 'production';

// Función para mostrar la información inicial de Admin-TK
export const sayAdminTKInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK', {
            font: 'block',  // Puedes cambiar a 'simple' o 'tiny' si aún es muy grande
            align: 'center',
            colors: ['white'],
            letterSpacing: 1,  // Ajusta el tamaño del texto, aquí es más pequeño que el original
            lineHeight: 1,  // Controla la altura entre líneas
            space: false  // Si deseas menos espacio alrededor del texto
        });
        cfonts.say('TK-HOST', {
            font: 'chrome',  // Mantienes el estilo 'chrome' pero es más pequeño que el de Admin-TK
            align: 'center',
            colors: ['red'],
            letterSpacing: 2  // Un poco más grande en tamaño que Admin-TK
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
