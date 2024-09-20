import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

// *───────────────────────────*
// *       PROPIETARIOS        *
// *───────────────────────────*

global.owner = [
   ['51927803866', 'JoanTK 👑', true],
   ['51927803866', 'Admin-TK', true],
];

global.mods = [];
global.prems = [];

// *───────────────────────────*
// *       INFORMACIÓN         *
// *───────────────────────────*

global.packname = '⪛✰ 𝗔𝗱𝗺𝗶𝗻-𝗧𝗞 ✰⪜';
global.botname = '𝗔𝗱𝗺𝗶𝗻-𝗧𝗞';
global.wm = '𝗝𝗼𝗮𝗻𝗧𝗞';
global.author = '𝗝𝗼𝗮𝗻𝗧𝗞';
global.dev = '𝗔𝗱𝗺𝗶𝗻-𝗧𝗞';
global.textbot = '𝗔𝗱𝗺𝗶𝗻-𝗧𝗞 : 𝗝𝗼𝗮𝗻𝗧𝗞';
global.vs = '1.0.0';

// *───────────────────────────*
// *         MULTIMEDIA        *
// *───────────────────────────*

global.imagen1 = fs.readFileSync('./media/AdminTK1.jpg');
global.imagen2 = fs.readFileSync('./media/AdminTK2.jpg');
global.imagen3 = fs.readFileSync('./media/AdminTK3.jpg');
global.welcome = fs.readFileSync('./media/welcomeTK.jpg');
global.catalogo = fs.readFileSync('./media/catalogoTK.jpg');
global.banner = fs.readFileSync('./media/bannerTK.jpg');

global.fantasyVid = [
  './media/menus/Menuvid1.mp4',
  './media/menus/Menuvid2.mp4',
  './media/menus/Menuvid3.mp4',
];

// *───────────────────────────*
// *        ENLACES GRUPOS     *
// *───────────────────────────*

global.grupo = 'https://chat.whatsapp.com/GrupoAdminTK1';
global.grupo2 = 'https://chat.whatsapp.com/GrupoAdminTK2';
global.channel = 'https://whatsapp.com/channel/0029VaJoanTKChannel';

// *───────────────────────────*
// *     ESTILO DE MENSAJE     *
// *───────────────────────────*

global.estilo = { 
    key: {  
        fromMe: false, 
        participant: `0@s.whatsapp.net`, 
        ...(false ? { remoteJid: "1234567890-1234567890@g.us" } : {}) 
    }, 
    message: { 
        orderMessage: { 
            itemCount: -999999, 
            status: 1, 
            surface: 1, 
            message: '𝗔𝗱𝗺𝗶𝗻-𝗧𝗞 💼', 
            orderTitle: 'Menu Admin-TK', 
            thumbnail: global.catalogo, 
            sellerJid: '0@s.whatsapp.net',
        },
    },
};

// *───────────────────────────*
// *      HERRAMIENTAS         *
// *───────────────────────────*

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;

// *───────────────────────────*
// *  ACTUALIZACIÓN AUTOMÁTICA *
// *───────────────────────────*

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Actualización en 'config.js' para Admin-TK"));
  import(`${file}?update=${Date.now()}`);
});
