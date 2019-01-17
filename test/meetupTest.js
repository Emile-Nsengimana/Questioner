/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const request = require('supertest');
const app = require('../api/v1/meetups');

chai.use(chaiHttp);
chai.should();

describe('Meetup endpoints test', () => {
  it('Records are successfully returned', () => {
    request(app)
      .get('/meetups')
      .expect('Content-Type', /json/)
      .expect(200);
  });


  it('a specific meetup record is returned', () => {
    const topic = 1;
    chai.request(app)
      .get(`/meetups/${topic}`);
  });

  it('it should post a meetup record', () => {
    /* const mt = {
        id: 1,
        createdOn: '2019-01-15',
        location: 'Kicukiro',
        images: '../img/mypic.jpg',
        happeningOn: '2019-03-10',
        topic: 'CYBERSTAR COMPETITION',
        tags: 'Is it this?',
      }; */
    request(app)
      .post('/meetups')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
