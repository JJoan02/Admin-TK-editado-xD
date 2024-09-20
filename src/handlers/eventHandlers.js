import { smsg } from '../lib/simple.js';
import { format } from 'util';
import path, { join } from 'path';
import chalk from 'chalk';
import fetch from 'node-fetch';
import { isNumber, delay } from '../utils/commandUtils.js'; // Funciones utilitarias
import { updateUser, updateChat, updateSettings } from '../core/database.js'; // Actualización en DB

// Maneja el evento de nuevos mensajes
export async function handler(chatUpdate, conn) {
  if (!chatUpdate) return;
  
  let m = chatUpdate.messages[chatUpdate.messages.length - 1];
  if (!m) return;

  m = smsg(conn, m) || m;
  if (!m) return;

  try {
    // Lógica para actualizar la base de datos del usuario, chat y settings
    updateUser(m.sender, m);
    updateChat(m.chat);
    updateSettings(conn.user.jid);

    // Lógica para comandos y plugins
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
    await processPlugins(m, groupMetadata, conn);
    
  } catch (e) {
    console.error(e);
  }
}

// Procesa los plugins del bot
async function processPlugins(m, groupMetadata, conn) {
  const ___dirname = path.join(path.dirname(import.meta.url), '../plugins');

  for (let name in global.plugins) {
    let plugin = global.plugins[name];
    if (!plugin || plugin.disabled) continue;

    const __filename = join(___dirname, name);

    if (typeof plugin.all === 'function') {
      try {
        await plugin.all.call(conn, m, { groupMetadata, __dirname: ___dirname, __filename });
      } catch (e) {
        console.error(e);
      }
    }

    // Filtra los comandos según los permisos del usuario
    if (m.text && m.text.startsWith(conn.prefix)) {
      await executeCommand(m, plugin, conn, groupMetadata);
    }
  }
}

async function executeCommand(m, plugin, conn, groupMetadata) {
  let [command, ...args] = m.text.slice(conn.prefix.length).split(/\s+/);
  let isValid = plugin.command instanceof RegExp ? plugin.command.test(command) : plugin.command === command;

  if (isValid) {
    try {
      await plugin.call(conn, m, { groupMetadata, args });
    } catch (e) {
      console.error(e);
    }
  }
}
