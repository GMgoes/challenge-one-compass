/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();

chai.use(chaiHttp);

describe('Testes de Rotas GET', () => {
  it('Testando GET de routes geral', (done) => {
    chai.request('127.0.0.1:3000/api/v1') // Endereço do servidor
      .get('/events') // endpoint que vamos testar
      .end((_, res) => { // testes a serem realizados
        res.should.have.status(200); // verificando se o retorno e um status code 200
        done();
      });
  });
  it('Testando GET de routes com query', (done) => {
    chai.request('127.0.0.1:3000/api/v1') // Endereço do servidor
      .get('/events?dayOfTheWeek=DD') // endpoint que vamos testar
      .end((_, res) => { // testes a serem realizados
        res.should.have.status(200); // verificando se o retorno e um status code 200
        done();
      });
  });
  it('Testando GET de routes com id por parametro', (done) => {
    chai.request('127.0.0.1:3000/api/v1') // Endereço do servidor
      .get('/events/7') // endpoint que vamos testar
      .end((_, res) => { // testes a serem realizados
        res.should.have.status(200); // verificando se o retorno e um status code 200
        done();
      });
  });
});

describe('Testes de Rotas POST', () => {
  it('Testando POST para rotina', (done) => {
    const rotina = {
      description: 'F',
      dateTime: 'FF',
      createdAt: 'C',
    };
    chai.request('127.0.0.1:3000/api/v1')
      .post('/events')
      .send(rotina)
      .end((_, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('Testando POST para signUp', (done) => {
    const person = {
      firstName: 'denner',
      lastName: 'basilio',
      birhDate: '2002-01-01',
      city: 'Coxim',
      country: 'Brasil',
      email: 'denner_basilio@gmail.com',
      password: '123456',
      confirmPassword: '123456',
    };
    chai.request('127.0.0.1:3000/api/v1')
      .post('/users/signUp')
      .send(person)
      .end((_, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('Testando POST para signIn', (done) => {
    const credentials = {
      email: 'denner_basilio@gmail.com',
      password: '123456',
    };
    chai.request('127.0.0.1:3000/api/v1')
      .post('/users/signIn')
      .send(credentials)
      .end((_, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

describe('Testes de Rotas DELETE', () => {
  it('Testando DELETE para rotina por ID', (done) => {
    chai.request('127.0.0.1:3000/api/v1')
      .delete('/events/7')
      .end((_, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Testando DELETE para rotina por dia da semana', (done) => {
    chai.request('127.0.0.1:3000/api/v1')
      .delete('/events?dayOfTheWeek=FF')
      .end((_, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// Melhorar a parte de testes automatizado, validado somente status de requisições pontuais.
