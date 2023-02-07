//Importação File System
const fs = require('fs');

//Leitura JSON de rotinas
const routines = JSON.parse(fs.readFileSync('data/routines.json'));

// --GET
exports.getAllRoutines = (request,response) => {
    response.status(200).json({
        status: 'Success',
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
            status: 'Fail',
            message: 'Nenhuma rotina com esse ID'
        });
    }
    response.status(200).json({
        status: 'Success',
        data: {
            routine: routine
        }
    });
}
//In progress
exports.getRoutinesDay = (request,response) => {
    const day = request.params.dayOfTheWeek;
    const results = routines.filter(routine => routine.dateTime == day); 
    if(!results){
        return response.status(404).json({
            status: 'Fail',
            message: 'Nenhuma rotina para esse dia'
        });
    }
    response.status(200).json({
        status: 'Success',
        data: {
            routines: results
        }
    });
 } 

// --POST
exports.sendRoutine = (request,response) =>{

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
}

// --DELETE
exports.deletRoutine = (request,response) =>{
    /* if(request.params.id * 1 > routines.length){
        return response.status(404).json({
            status: 'Fail',
            message: 'Nenhuma rotina com esse ID'
        });
    } */

    const id = request.params.id * 1;
    const routine = routines.find(element => {
        return element.id === id
    });

    routines.splice(routines.indexOf(id),1);

    fs.writeFile('data/routines.json', JSON.stringify(routines), err => {
        response.status(201).json({
            status: 'Success',
            data: {
                routine: `A rotina de ID: ${id} foi excluída`
            }
        });
    })
}
/* exports.deletRoutineDay = () => {} */ //TODO