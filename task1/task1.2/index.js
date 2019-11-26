import fs from 'fs';
import path from 'path';
import csvToJson from 'csvtojson';
import { pipeline } from 'stream';

const csvFilePath = path.join(__dirname, '/example.csv');
const fileOutputPath = path.join(__dirname, '/result.txt');

// fs.createReadStream(csvFilePath)
// 	.pipe(csvToJson())
// 	.pipe(fs.createWriteStream(fileOutputPath));

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

// csvToJson()
// 	.fromFile(csvFilePath)
// 	.subscribe((jsonObj) => {
// 		return new Promise((resolve, reject) => {
// 			resolve(jsonObj);
// 		})
// 	})
// 	.then(jsonObj => {
// 		jsonObj.map(obj => {
// 			const objectString = `${JSON.stringify(obj)}\n`;
// 			fs.appendFileSync(fileOutputPath, objectString, (writeErr) => {
// 				if(writeErr) {
// 					process.stdout.write(`Write error: ${writeErr}\n`);
// 				}
// 			});
// 		})
// 	})
// 	.catch(err => {
// 		process.stdout.write(`Subscription to file error: ${err}\n`);
// 	})