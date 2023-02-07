const fs = require('fs');

const routines = JSON.parse(fs.readFileSync('data/routines.json'));

//GET
exports.getAllRoutines = (request,response) => {
    response.status(200).json({
        status: 'success',
        results: routines.length,
        data: {
            routines: routines
        }
    });
}

exports.getRoutine = (request,response) => {
    const id = request.params.id * 1;
    const routine = routines.find( element => {
        return element.id === id
    })
    if(!routine){
        return response.status(404).json({
            status: 'fail',
            message: 'ID inválido'
        });
    }
    response.status(200).json({
        status: 'success',
        data: {
            routine: routine
        }
    });
}
/* exports.getRoutinesDay = () => {} */ //TODO

//POST
exports.sendRoutine = (request,response) =>{

    const newId = routines[routines.length-1].id + 1;
    const newRoutine = Object.assign({id: newId},request.body);

    routines.push(newRoutine);
    fs.writeFile('data/routines.json', JSON.stringify(routines), err => {
        response.status(201).json({
            status: 'success',
            data: {
                routine: newRoutine
            }
        });
    })
}
/* exports.sendUser= () => {} */ //TODO
/* exports.sendLogin = () => {} */ //TODO

//DELET
exports.deletRoutine = (request,response) =>{
    if(request.params.id * 1 > routines.length){
        return response.status(404).json({
            status: 'fail',
            message: 'ID inválido'
        });
    }
    const id = request.params.id * 1;
    const routine = routines.find( element => {
        return element.id === id
    })
    /* console.log(routines.indexOf(id)); */
    routines.splice(routines.indexOf(id),1);
    console.log(routines);
    fs.writeFile('data/routines.json', JSON.stringify(routines), err => {
        response.status(201).json({
            status: 'success',
            data: {
                routine: `${id} excluído`
            }
        });
    })
}
/* exports.deletRoutine = () => {} */ //TODO