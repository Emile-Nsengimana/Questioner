/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/v1/meetups';

chai.use(chaiHttp);
chai.should();


describe('meetups.js should be: ', () => {
  it('return all meetup records', (done) => {
    chai.request(app)
      .get('/meetups')
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.data.should.be.a('json');
        done();
      });
  });
  it('return a specified meetup record', () => {
    const topic = 1;
    chai.request(app)
      .get(`/meetups/${topic}`)
      .end((err, res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        res.body.data.should.be.a('json');
        err.body.should.a('object');
        err.body.should.have.property('status').eql(500);
        err.body.should.have.property('error');
      });
  });
});

it('post a meetup record', () => {
  chai.request(app)
    .post('/meetups')
    .send(record)
    .end((err, res) => {
      res.body.should.be.a('object');
      res.body.should.have.property('status').eql(200);
      res.body.should.have.property('data');
      res.body.data.should.be.a('array');
    });
});

/* 
  

  describe('Posting a meetup record', () => {
    it('it should post a meetup record', () => {
      request(app)
        .post('/meetups')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
*/
