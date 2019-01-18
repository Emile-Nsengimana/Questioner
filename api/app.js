const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const meetups = require('./v1/meetups');
const querys = require('./v1/questions');
const rsvp = require('./v1/rsvp');

app.use(bodyParser.json());
app.use('/api/v1/meetups', meetups);
app.use('/api/v1/questions', querys);
app.use('/api/v1/rsvp', rsvp);

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.info(`Server has started on port ${PORT}`));
