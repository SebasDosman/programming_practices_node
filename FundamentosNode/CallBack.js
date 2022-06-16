/*console.time();

setTimeout(function() {
    console.log('Hola Mundo');
    console.timeEnd();
} , 3000);*/

const getUser = (id, callback) => {
  const user = {
    id,
    name: "Juan",
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(123, (user) => {
  console.log(user);
  console.log(user.name.toUpperCase());
});