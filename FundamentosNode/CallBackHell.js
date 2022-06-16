const empleados = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Pedro" },
  { id: 3, nombre: "Maria" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((empleado) => empleado.id === id);

  if (!empleado) {
    callback(`No existe un empleado con el ID ${id}`);
  } else {
    callback(null, empleado);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((salario) => salario.id === id)?.salario;

  if (!salario) {
    callback(`No se encontró un salario para el empleado con el ID ${id}`);
  } else {
    callback(null, salario);
  }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    return console.log(err);
  } else {
    console.log(empleado.nombre);
  }

  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(`El salario de ${empleado.nombre} es de ${salario}`);
    }
  })
});
