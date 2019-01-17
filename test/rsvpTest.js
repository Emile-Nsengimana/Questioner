/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const request = require('supertest');
const app = require('../api/v1/rsvp');

chai.use(chaiHttp);
chai.should();

describe('Rsvp endpoints test', () => {
  describe('All Rsvp records should be returned', () => {
    it('All records are successfully returned', () => {
      request(app)
        .get('/rsvp')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  describe('All user Rsvp should be returned', () => {
    it('A specific question is returned', () => {
      const usr = 1;
      chai.request(app)
        .get(`/rsvp/${usr}`);
    });
  });

  describe('Posting a Rsvp record', () => {
    it('it should post a Rsvp record', () => {
      request(app)
        .post('/rsvp')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
