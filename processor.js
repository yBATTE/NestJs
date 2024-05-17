module.exports = {
  generateRandomData: function (context, events, done) {
    // Generar nombre aleatorio
    const firstNameList = [
      'Alice',
      'Bob',
      'Charlie',
      'David',
      'Eve',
      'Frank',
      'Grace',
      'Harry',
      'Ivy',
      'Jack',
    ];
    const lastNameList = [
      'Smith',
      'Johnson',
      'Williams',
      'Jones',
      'Brown',
      'Davis',
      'Miller',
      'Wilson',
      'Moore',
      'Taylor',
    ];
    const randomFirstName =
      firstNameList[Math.floor(Math.random() * firstNameList.length)];
    const randomLastName =
      lastNameList[Math.floor(Math.random() * lastNameList.length)];
    const randomName = randomFirstName + ' ' + randomLastName;

    // Generar correo electrónico aleatorio
    const randomEmail =
      randomFirstName.toLowerCase() +
      '.' +
      randomLastName.toLowerCase() +
      '@example.com';

    // Asignar los valores generados al contexto
    context.vars.name = randomName;
    context.vars.email = randomEmail;

    // Llama a done() para indicar que la función ha terminado de ejecutarse
    return done();
  },
};
