/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação File System
const fs = require('fs');

// Leitura JSON de rotinas
const routines = JSON.parse(fs.readFileSync('data/routines.json'));

// --GET
exports.getRoutines = (request, response) => {
  if (Object.keys(request.query).length !== 0) {
    const { dayOfTheWeek } = request.query;
    const results = routines.filter((routine) => routine.dateTime.includes(dayOfTheWeek) === true);
    if (results.length === 0) {
      return response.status(404).json({
        status: 'Fail',
        message: 'Nenhuma rotina nesse dia',
      });
    }
    response.status(200).json({
      status: 'Success',
      data: {
        routines: results,
      },
    });
  } else {
    response.status(200).json({
      status: 'Success',
      results: routines.length,
      data: {
        routines,
      },
    });
  }
};
exports.getRoutine = (request, response) => {
  const id = request.params.id * 1;
  const routine = routines.find((element) => element.id === id);
  if (!routine) {
    return response.status(404).json({
      status: 'Fail',
      message: 'Nenhuma rotina com esse ID',
    });
  }
  response.status(200).json({
    status: 'Success',
    data: {
      routine,
    },
  });
};

// --POST
exports.sendRoutine = (request, response) => {
  const newId = (routines.length === 0) ? 1 : routines[routines.length - 1].id + 1;
  const newRoutine = { id: newId, ...request.body };
  newRoutine.createdAt = Date();

  routines.push(newRoutine);
  fs.writeFile('data/routines.json', JSON.stringify(routines), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        routine: newRoutine,
      },
    });
  });
};

// --DELETE
exports.deletRoutine = (request, response) => {
  const id = request.params.id * 1;
  const routine = routines.find((element) => element.id === id);

  if (!routine) {
    return response.status(404).json({
      status: 'Fail',
      message: `Nenhuma rotina com o ID: ${id}`,
    });
  }

  routines.splice(routines.indexOf(routine), 1);

  fs.writeFile('data/routines.json', JSON.stringify(routines), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        routine: `A rotina de ID: ${id} foi excluída`,
      },
    });
  });
};
exports.deletRoutineDay = (request, response) => {
  const { dayOfTheWeek } = request.query;

  const results = routines.filter((routine) => routine.dateTime !== dayOfTheWeek);
  const excludes = routines.length - results.length;

  if (excludes === 0) {
    return response.status(404).json({
      status: 'Fail',
      message: 'Nenhuma rotina para esse dia',
    });
  }

  fs.writeFile('data/routines.json', JSON.stringify(results), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        routine: `As rotinas do dia: ${dayOfTheWeek} foram excluídas, no total: ${excludes} rotinas foram excluídas`,
      },
    });
  });
};
