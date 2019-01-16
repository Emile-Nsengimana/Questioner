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
  describe('All meetup records should be returned', () => {
    it('Records are successfully returned', () => {
      request(app)
        .get('/meetups')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  describe('A specif record should be returned based on the topic of the meetup', () => {
    it('should get a single student record', () => {
      const topic = 1;
      chai.request(app)
        .get(`/meetups/${topic}`);
    });
  });

  describe('Posting a meetup record', () => {
    it('it should post a meetup record', () => {
      const mt = {
        id: 1,
        createdOn: '2019-01-15',
        location: 'Kicukiro',
        images: '../img/mypic.jpg',
        happeningOn: '2019-03-10',
        topic: 'CYBERSTAR COMPETITION',
        tags: 'Is it this?',
      };
      request(app)
        .post('/meetups')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
