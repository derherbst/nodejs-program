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

const transformKeysToLowercase = (inputObj) => {
	return Object.keys(inputObj).reduce((acc, curr) => {
		return {
			...acc,
			[`${curr.toLowerCase()}`]: inputObj[curr],
		}
	}, {})
}

let headers;

inputFileLine.on('line', (line) => {

	if (!headers) {
		headers = line.split(',');
		return;
	}

	csvToJson({
		headers: headers,
        noheader: true,
	})
	.fromString(line)
	.then((jsonObj) => {
		let bookInfo = jsonObj[0];
		delete bookInfo['Amount'];
		bookInfo = transformKeysToLowercase(bookInfo);
		
		output.write(`${JSON.stringify(bookInfo)} \n`);
	})
	
})