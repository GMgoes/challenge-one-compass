/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação File System
import { readFileSync, writeFile } from 'fs';

// Leitura JSON de usuários
const users = JSON.parse(readFileSync('data/users.json'));

// --POST
export function sendSignUp(request, response) {
  const newId = users[users.length - 1].id + 1;
  const user = { id: newId, ...request.body };

  users.push(user);
  writeFile('data/users.json', JSON.stringify(users), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        user: `O usuário de ID: ${user.id} foi adicionado.`,
      },
    });
  });
}
// Voltar depois, tem um BUG na criação de um primeiro ID.
export function sendSignIn(request, response) {
  const { email, password } = request.body;
  /*     console.log(password);
    console.log(email); */

  const validationKey = users
    .find((element) => ((element.email === email && element.password === password)));

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
}
// Voltar depois, otimizar
