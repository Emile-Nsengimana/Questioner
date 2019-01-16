const express = require('express');

const router = express.Router();

const questions = [
  {
    id: 1,
    createdOn: '2019-01-20',
    createdBy: 1,
    meetup: 2,
    title: 'Why',
    body: 'Why is it do you choose youth?',
    votes: 0,
  },
  {
    id: 2,
    createdOn: '2019-01-20',
    createdBy: 1,
    meetup: 2,
    title: 'What',
    body: 'What do you expect to be the output of this meetup?',
    votes: 15,
  },
];

router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: questions,
  });
});

router.patch('/:id/upvote', (req, res) => {
  const qry = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!qry) {
    res.status(404).json({
      status: 404,
      error: 'Question can\'t be found',
    });
  } else {
    let qryId = parseInt(req.params.id, 10);
    qryId -= 1;
    let upvote = questions[qryId].votes;
    upvote += 1;
    questions[qryId].votes = upvote;
    res.status(200).json({
      status: 200,
      data: [qry],
    });
  }
});

router.patch('/:id/downvote', (req, res) => {
  const qry = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!qry) {
    res.status(404).json({
      status: 404,
      error: 'Question can\'t be found',
    });
  } else {
    let qryId = parseInt(req.params.id, 10);
    qryId -= 1;
    let upvote = questions[qryId].votes;
    upvote -= 1;
    questions[qryId].votes = upvote;
    res.status(200).json({
      status: 200,
      data: [qry],
    });
  }
});

module.exports = router;
