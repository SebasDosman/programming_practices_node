const fs = require("fs");
const { multiplicar } = require("./Helpers/Multiplicar");
const argv = require("./Config/Yargs");

console.clear();

/*const [ , , arg3 = "base=5"] = process.argv;
const [ , base = 5 ] = arg3.split("=");*/

multiplicar(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => {
    console.log(nombreArchivo);
  })
  .catch((err) => {
    console.log(err);
  });