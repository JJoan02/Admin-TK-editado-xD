import cfonts from 'cfonts';

const isProduction = process.env.NODE_ENV === 'production';

// Función para mostrar la información inicial de Admin-TK
export const sayAdminTKInfo = () => {
    if (!isProduction) {
        cfonts.say('Admin-TK', {
            font: 'chrome',
            align: 'center',
            colors: ['white']
        });
        cfonts.say('TK-HOST', {
            font: 'chrome',
            align: 'center',
            colors: ['red']
        });
        cfonts.say('Developed By • JoanTK', {
            font: 'console',
            align: 'center',
            colors: ['yellow']
        });
    }
};

// Definir y exportar la función sayBotInfo (anteriormente faltaba)
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



Ocupo achicar un poco las letras Admin-TK 

Pero que sea más grande que TK-HOST
