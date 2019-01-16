const express = require('express');

const router = express.Router();

const rsvs = [
  {
    id: 1,
    meetup: 1,
    user: 1,
    response: 'yes',
  },
  {
    id: 2,
    meetup: 1,
    user: 2,
    response: 'maybe',
  },
  {
    id: 3,
    meetup: 1,
    user: 1,
    response: 'no',
  },
];

router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: rsvs,
  });
});
router.get('/:userId', (req, res) => {
  const usr = rsvs.find(c => c.user === parseInt(req.params.userId, 10));
  const myRsvp = [];
  if (usr) {
    let i = 0;
    while (i < rsvs.length) {
      if (rsvs[i].user === usr.user) {
        myRsvp.push(rsvs[i]);
        i += 1;
      } else {
        i += 1;
      }
    }
    res.status(200).json({
      status: 200,
      data: myRsvp,
    });
  }
});


router.post('/', (req, res) => {
  const addRsvp = [
    {
      id: rsvs.length + 1,
      meetup: req.body.meetup,
      user: req.body.user,
      response: req.body.response,
    },
  ];
  rsvs.push(addRsvp);
  res.status(200).json({
    status: 200,
    data: addRsvp,
  });
});

module.exports = router;
