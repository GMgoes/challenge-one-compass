/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação File System
import { readFileSync, writeFile } from 'fs';

// Leitura JSON de rotinas
const routines = JSON.parse(readFileSync('data/routines.json'));

// --GET
export function getAllRoutines(_, response) {
  response.status(200).json({
    status: 'Success',
    results: routines.length,
    data: {
      routines,
    },
  });
}
export function getRoutine(request, response) {
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
}
export function getRoutinesDay(request, response) {
  const day = request.params.dayOfTheWeek;
  const results = routines.filter((routine) => routine.dateTime.includes(day) === true);
  if (!results) {
    return response.status(404).json({
      status: 'Fail',
      message: 'Nenhuma rotina para esse dia',
    });
  }
  response.status(200).json({
    status: 'Success',
    data: {
      routines: results,
    },
  });
}
// Melhorar

// --POST
export function sendRoutine(request, response) {
  const newId = routines[routines.length - 1].id + 1;
  const newRoutine = { id: newId, ...request.body };
  newRoutine.createdAt = Date();

  routines.push(newRoutine);
  writeFile('data/routines.json', JSON.stringify(routines), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        routine: newRoutine,
      },
    });
  });
}

// --DELETE
export function deletRoutine(request, response) {
  const id = request.params.id * 1;
  const routine = routines.find((element) => element.id === id);

  routines.splice(routines.indexOf(routine), 1);

  writeFile('data/routines.json', JSON.stringify(routines), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        routine: `A rotina de ID: ${id} foi excluída`,
      },
    });
  });
}
export function deletRoutineDay(request, response) {
  const day = request.params.dayOfTheWeek;

  const results = routines.filter((routine) => routine.dateTime !== day);

  if (!results) {
    return response.status(404).json({
      status: 'Fail',
      message: 'Nenhuma rotina para esse dia',
    });
  }

  writeFile('data/routines.json', JSON.stringify(results), () => {
    response.status(201).json({
      status: 'Success',
      data: {
        routine: `As rotina do dia: ${day} foram excluídas`,
      },
    });
  });
}
