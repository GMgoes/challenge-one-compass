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
      return response.status(400).json({
        status: 'Fail',
        message: 'Nenhuma rotina para o dia informado',
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
// OK - Validado
exports.getRoutine = (request, response) => {
  if (Number.isNaN(request.params.id)) {
    const { id } = request.params;
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
  } else {
    return response.status(404).json({
      status: 'Fail',
      message: 'O ID deve ser um número ',
    });
  }
};
// OK - Validado

// --POST
exports.sendRoutine = (request, response) => {
  // Object.keys(request.body).length === 3
  if (
    typeof request.body.description === 'string'
    && typeof request.body.dateTime === 'string'
    && typeof request.body.createdAt === 'string'
  ) {
    const newId = (routines.length === 0) ? 1 : routines[routines.length - 1].id + 1;
    const newRoutine = { id: newId, ...request.body };
    /* newRoutine.createdAt = Date(); */
    // Caso quisessemos obter a data de criação no momento da requisição
    routines.push(newRoutine);
    fs.writeFile('data/routines.json', JSON.stringify(routines), () => {
      response.status(201).json({
        status: 'Success',
        data: {
          routine: newRoutine,
        },
      });
    });
  } else {
    return response.status(400).json({
      status: 'Fail',
      message: 'Campos necessários: description, dateTime, createdAt, em formato de texto',
    });
  }
};
// OK - Validado

// --DELETE
exports.deletRoutine = (request, response) => {
  if (Number.isNaN(request.params.id)) {
    const { id } = request.params;
    const routine = routines.find((element) => element.id === id);

    if (!routine) {
      return response.status(404).json({
        status: 'Fail',
        message: `Nenhuma rotina com o ID: ${id} foi encontrada`,
      });
    }

    routines.splice(routines.indexOf(routine), 1);
    fs.writeFile('data/routines.json', JSON.stringify(routines), () => {
      response.status(200).json({
        status: 'Success',
        data: {
          routine: `A rotina de ID: ${id} foi excluída`,
        },
      });
    });
  } else {
    return response.status(404).json({
      status: 'Fail',
      message: 'O ID deve ser um número ',
    });
  }
};
// OK - Validado
exports.deletRoutineDay = (request, response) => {
  if (typeof request.query.dayOfTheWeek === 'string') {
    const { dayOfTheWeek } = request.query;
    const results = routines.filter((routine) => routine.dateTime !== dayOfTheWeek);
    const excludes = routines.length - results.length;

    if (excludes === 0) {
      return response.status(404).json({
        status: 'Fail',
        message: 'Nenhuma rotina nesse dia foi encontrada',
      });
    }

    fs.writeFile('data/routines.json', JSON.stringify(results), () => {
      response.status(200).json({
        status: 'Success',
        data: {
          routine: `As rotinas do dia: ${dayOfTheWeek} foram excluídas, no total: ${excludes} rotinas foram excluídas`,
        },
      });
    });
  } else {
    return response.status(404).json({
      status: 'Fail',
      message: 'O dia da semana deve ser em formato de texto',
    });
  }
};
// OK - Validado
