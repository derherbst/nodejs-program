import fs from 'fs';
import path from 'path';
import readline from 'readline';
import csvToJson from 'csvtojson';

const csvFilePath = path.join(__dirname, '/example.csv');
const fileOutputPath = path.join(__dirname, '/result.txt');

const input = fs.createReadStream(csvFilePath);
const output = fs.createWriteStream(fileOutputPath, {
	flags: 'w',
});

const inputFileLine = readline.createInterface({
	input,
	terminal: false,
	output,
})

inputFileLine.on('line', (line) => {	
	// ...
})