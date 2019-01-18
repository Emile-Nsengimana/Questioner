import express from 'express';

const router = express.Router();

const meetups = [
  {
    id: 1,
    createdOn: '2019-01-15',
    location: 'Kicukiro',
    images: '../img/mypic.jpg',
    happeningOn: '2019-03-10',
    topic: 'CYBERSTAR COMPETITION',
    tags: 'This is the most challengenging moment, isn\'t it?',
  },
  {
    id: 2,
    createdOn: '2019-01-15',
    location: 'Kicukiro',
    images: '../img/mypic.jpg',
    happeningOn: '2019-03-10',
    topic: 'ALC',
    tags: 'This is the most challengenging moment, isn\'t it?',
  },
  {
    id: 3,
    createdOn: '2019-01-15',
    location: 'Kicukiro',
    images: '../img/mypic.jpg',
    happeningOn: '2019-03-10',
    topic: 'HIV/AIDS awareness',
    tags: 'This is the most challengenging moment, isn\'t it?',
  },

];


router.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    data: meetups,
  });
});

router.get('/:topic', (req, res) => {
  const meetup = meetups.find(c => c.topic === req.params.topic);
  if (meetup) {
    res.status(200).send({
      status: 200,
      data: meetup,
    });
  } else {
    res.status(500).send({
      status: 500,
      data: 'Not found',
    });
  }
});

router.post('/', (req, res) => {
  if (!req.body) {
    res.status(404).send({
      status: 404,
      error: 'missing body contents',
    });
  } else {
    const addMeetups = {
      id: meetups.length + 1,
      createdOn: req.body.createdOn,
      location: req.body.location,
      images: req.body.images,
      happeningOn: req.body.happeningOn,
      topic: req.body.topic,
      tags: req.body.tags,
    };
    meetups.push(addMeetups);
    res.status(200).json({
      status: 200,
      data: addMeetups,
    });
  }
});
module.exports = router;
