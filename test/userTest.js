/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');

const request = require('supertest');
const app = require('../api/v1/users');

chai.use(chaiHttp);
chai.should();

describe('Users endpoints test', () => {
  describe('All records of users should be returned', () => {
    it('Records are successfully returned', () => {
      request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
  describe('A specif record should be returned based on the user id', () => {
    it('a specified user is returned', () => {
      const userId = 1;
      chai.request(app)
        .get(`/users/${userId}`);
    });
  });

  describe('Posting a user record', () => {
    it('it should post a user', () => {
      request(app)
        .post('/users')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
