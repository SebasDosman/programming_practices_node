const empleados = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((empleado) => empleado.id === id)?.nombre;

    if (!empleado) {
      reject(`No existe un empleado con el ID ${id}`);
    } else {
      resolve(empleado);
    }
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((salario) => salario.id === id)?.salario;

    if (!salario) {
      reject(`No existe un salario para el empleado con el ID ${id}`);
    } else {
      resolve(salario);
    }
  });
};

const id = 3;

/*getEmpleado(id)
  .then((empleado) => console.log(empleado))
  .catch((err) => console.log(err));

getSalario(id)
  .then((salario) => console.log(salario))
  .catch((err) => console.log(err));*/

/*getEmpleado(id)
  .then((empleado) => {
    getSalario(id)
      .then((salario) => {
        console.log(`El salario de ${empleado} es de ${salario}`);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));*/

let nombre;

getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) => console.log(`El salario de ${nombre} es de ${salario}`))
  .catch((err) => console.log(err));
