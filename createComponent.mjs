import { writeFile } from "fs";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2)); //getting just the first argument (file name) passed to the file as an object {_: [input]}

const name = argv._[0];

const content = `import styles from "./styles/${name}.module.css"

function ${name}() {
    return;
}

export default ${name}`;

writeFile(`${name}.js`, content, (err) => {
	if (err) throw err;
	console.log("File created!");
});

writeFile(`${name}.module.css`, "", (err) => {
	if (err) throw err;
});

