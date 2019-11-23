process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
	const inputString = process.stdin.read();
	if (inputString) {
		const reversedString = inputString.toString().trim().split('').reverse().join('');
		process.stdout.write(`${reversedString} \n`);
	} else {
		process.stdin.pause();
	}
});