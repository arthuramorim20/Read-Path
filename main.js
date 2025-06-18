import { readFile } from 'fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

class ReadCsv {
    static getPath() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
        const pathFile = join(__dirname, "./mockCSV.csv");

        return pathFile;
    }

    static async readPath() {
        const path = this.getPath();
        const text = (await readFile(path)).toString('utf-8');

        return text;
    }

    static async formatFile() {
        const file = await this.readPath() 
        const lines = file
        .split('\n')
        .map(Line => Line.trim())
        .filter(Line => Line.length > 0);

        const [ header, ...rows ] = lines;

        const keys = header.split(',');
        
        const data = rows.map(row => {
            const values = row.split(',');

            return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
        })
        
        return data;    
    }
}


const reading = await ReadCsv.formatFile();

console.log(reading)


