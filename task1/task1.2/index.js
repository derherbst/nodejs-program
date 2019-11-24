import fs from 'fs';
import path from 'path';
import csvToJson from 'csvtojson';

const csvFilePath = path.join(__dirname, '/example.csv');
const fileOutputPath = path.join(__dirname, '/result.txt');

csvToJson()
	.fromFile(csvFilePath)
	.subscribe((jsonObj) => {
		return new Promise((resolve, reject) => {
			resolve(jsonObj);
		})
	})
	.then(jsonObj => {
		jsonObj.map(obj => {
			const objectString = `${JSON.stringify(obj)}\n`;
			fs.appendFileSync(fileOutputPath, objectString, (writeErr) => {
				if(writeErr) {
					process.stdout.write(`Write error: ${writeErr}\n`);
				}
			});
		})
	})
	.catch(err => {
		process.stdout.write(`Subscription to file error: ${err}\n`);
	})