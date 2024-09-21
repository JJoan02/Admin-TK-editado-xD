// src/utils/fileUtils.js

import fs from 'fs';
import path from 'path';

// Función para limpiar archivos temporales
export function clearTmpFiles() {
    const tmpDir = path.resolve('./tmp'); // Cambia la ruta si es necesario
    try {
        const files = fs.readdirSync(tmpDir);
        files.forEach(file => {
            const filePath = path.join(tmpDir, file);
            fs.unlinkSync(filePath);
        });
        console.log('Temporary files cleared.');
    } catch (err) {
        console.error(`Error clearing temporary files in ${tmpDir}:`, err);
        throw err;
    }
}

// Función para purgar sesiones
export function purgeSessions() {
    const sessionsDir = path.resolve('./sessions'); // Cambia la ruta si es necesario
    try {
        const files = fs.readdirSync(sessionsDir);
        files.forEach(file => {
            const filePath = path.join(sessionsDir, file);
            fs.unlinkSync(filePath);
        });
        console.log('Sessions purged.');
    } catch (err) {
        console.error(`Error purging sessions in ${sessionsDir}:`, err);
        throw err;
    }
}

// El resto de las funciones
export function readFile(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        const data = fs.readFileSync(absolutePath, 'utf8');
        return data;
    } catch (err) {
        console.error(`Error reading file at ${filePath}:`, err);
        throw err;
    }
}

export function writeFile(filePath, data) {
    try {
        const absolutePath = path.resolve(filePath);
        fs.writeFileSync(absolutePath, data, 'utf8');
        console.log(`File written successfully at ${filePath}`);
    } catch (err) {
        console.error(`Error writing file at ${filePath}:`, err);
        throw err;
    }
}

export function deleteFile(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        fs.unlinkSync(absolutePath);
        console.log(`File deleted successfully at ${filePath}`);
    } catch (err) {
        console.error(`Error deleting file at ${filePath}:`, err);
        throw err;
    }
}

