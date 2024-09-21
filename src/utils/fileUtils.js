// src/utils/fileUtils.js

import fs from 'fs';
import path from 'path';

// Lee un archivo y devuelve su contenido como texto
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

// Escribe contenido en un archivo
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

// Elimina un archivo
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
