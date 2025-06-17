import { readFile } from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

class ReadText {
    static getPath() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const pathFile = join(__dirname, "./mockText.txt");

        return pathFile;
    }

    static async readPath() {
        const text = await readFile(this.getPath(), 'utf-8');

        return text.split(',');
    }
}


const reading = await ReadText.readPath();

console.log(reading)


// function textFile (filePath) {
//     const
// }
