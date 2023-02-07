const fs = require('fs');

const users = JSON.parse(fs.readFileSync('data/users.json'));

//POST
//Voltar depois, tem um BUG na criaçaõ de um primeiro ID.
exports.sendSignUp = (request,response) =>{

    const newId = users[users.length-1].id + 1;
    const user = Object.assign({id: newId},request.body);

    users.push(user);
    fs.writeFile('data/users.json', JSON.stringify(users), err => {
        response.status(201).json({
            status: 'Success',
            data: {
                user: `O usuário de ID: ${user.id} foi adicionado.`
            }
        });
    })
}
//TODO
/* exports.sendSignIn = (request,response) =>{

    const newId = routines[routines.length-1].id + 1;
    const newRoutine = Object.assign({id: newId},request.body);
    newRoutine.createdAt = Date();

    routines.push(newRoutine);
    fs.writeFile('data/routines.json', JSON.stringify(routines), err => {
        response.status(201).json({
            status: 'Success',
            data: {
                routine: newRoutine
            }
        });
    })
} */