const fs = require("fs");
const colors = require("colors");

const multiplicar = async (num1 = 1, listar = false, hasta = 10) => {
  let salida, salida1 = "";

  salida =
    "------------------".blue +
    "\n" +
    `   Tabla del ${colors.red(num1)}    `.blue +
    "\n" +
    "------------------".blue +
    "\n";
  salida1 =
    "------------------" +
    "\n" +
    `   Tabla del ${num1}    ` +
    "\n" +
    "------------------" +
    "\n";

  for (let i = 1; i <= hasta; i++) {
    resul = num1 * i;
    salida += `${num1} x ${i} = ${colors.red(resul)} \n`.blue;
    salida1 += `${num1} x ${i} = ${resul} \n`;
  }

  if (listar) {
    console.log(`${salida}`);
  }

  try {
    fs.writeFileSync(`./Output/tabla${num1}.txt`, salida1);
    return `tabla${num1}.txt creado`.green;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  multiplicar,
};