const express = require('express');

const router = express.Router();
const users = [
  {
    id: 1,
    firstname: 'Emma',
    lastname: 'Shema',
    othername: 'Sano',
    email: 'sano@gmail.com',
    phoneNumber: '0782057791',
    username: 'shemasano',
    registered: '2018-01-17',
    isAdmin: 'yes',
  },
  {
    id: 2,
    firstname: 'Cedric',
    lastname: 'Shema',
    othername: 'Sano',
    email: 'sano@gmail.com',
    phoneNumber: '0782057791',
    username: 'Cedro',
    registered: '2018-01-17',
    isAdmin: 'yes',
  },
];


router.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: users,
  });
});

router.get('/:id', (req, res) => {
  const userId = users.find(c => c.id === parseInt(req.params.id, 10));
  if (userId) {
    res.status(200).json({
      status: 200,
      data: userId,
    });
  } else {
    res.status(404).json({
      status: 404,
      error: 'User not found',
    });
  }
});

router.delete('/:id', (req, res) => {
  const id = users.find(c => c.id === req.params.id);
  if (!id) {
    res.status(404).json({
      status: 404,
      data: 'Not found',
    });
  } else {
    users.pop(id);
  }
});

router.post('/', (req, res) => {
  if (!req.body) {
    res.status(404).json({
      status: 404,
      error: 'missing body contents',
    });
  } else {
    const addUser = {
      id: users.length + 1,
      createdOn: req.body.createdOn,
      location: req.body.location,
      images: req.body.images,
      happeningOn: req.body.happeningOn,
      topic: req.body.topic,
      tags: req.body.tags,
    };
    users.push(addUser);
    res.status(200).json({
      status: 200,
      data: addUser,
    });
  }
});

module.exports = router;
