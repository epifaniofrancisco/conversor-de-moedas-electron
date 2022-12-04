const fs = require("fs")

function writeJsonFile(text) {
	const data = JSON.stringify(text);

	try {
		fs.writeFile("nada.json", data, (err) => {
			if (err) {
				throw err;
			}

			console.log("Finished");
		});
	} catch (error) {
		console.error(err);
	}
}

function readJsonFile() {
	fs.readFile("data.json", "utf-8", (err, data) => {
		if (err) {
			throw err;
		}

		const user = JSON.parse(data.toString());

		console.log(user);
	});
}
