const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Listar tabla",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "Numero hasta la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw "La base debe ser un numero";
    } else {
      return true;
    }
  }).argv;

module.exports = argv;