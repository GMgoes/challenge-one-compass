/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação File System
const fs = require('fs');

// Leitura JSON de usuários
const users = JSON.parse(fs.readFileSync('data/users.json'));

// --POST
exports.sendSignUp = (request, response) => {
  if (Object.keys(request.body).length === 8) {
    const newId = (users.length === 0) ? 1 : users[users.length - 1].id + 1;
    const user = { id: newId, ...request.body };

    users.push(user);
    fs.writeFile('data/users.json', JSON.stringify(users), () => {
      response.status(200).json({
        status: 'Success',
        data: {
          user: `O usuário de ID: ${user.id} foi adicionado.`,
        },
      });
    });
  } else {
    return response.status(400).json({
      status: 'Fail',
      message: 'Campos necessários: firstName, lastName, birthDate, city, country, email, password, confirmPassword',
    });
  }
};
// OK - Validado
exports.sendSignIn = (request, response) => {
  if (Object.keys(request.body).length === 2) {
    const { email, password } = request.body;

    const validationKey = users
      .find((element) => (element.email === email && element.password === password));

    if (!validationKey) {
      return response.status(404).json({
        status: 'Fail',
        message: 'Credenciais inválidas',
      });
    }
    response.status(200).json({
      status: 'Success',
      message: 'Credenciais válidas',
    });
  } else {
    return response.status(400).json({
      status: 'Fail',
      message: 'Campos necessários: email, password',
    });
  }
};
// OK - Validado
