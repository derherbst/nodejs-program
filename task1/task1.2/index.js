import fs from 'fs';
import path from 'path';
import csvToJson from 'csvtojson';
import { pipeline } from 'stream';

const csvFilePath = path.join(__dirname, '/example.csv');
const fileOutputPath = path.join(__dirname, '/result.txt');

pipeline(
	fs.createReadStream(csvFilePath),
	csvToJson(),
	fs.createWriteStream(fileOutputPath),
	(err) => {
		if (err) {
			console.error('Pipeline failed.', err);
		} else {
			console.log('Pipeline succeeded.');
		}
	}
);
