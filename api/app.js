import express from 'express';
import bodyParser from 'body-parser';
import meetups from './v1/meetups';
import querys from './v1/questions';
import rsvp from './v1/rsvp';

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/meetups', meetups);
app.use('/api/v1/questions', querys);
app.use('/api/v1/rsvp', rsvp);

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.info(`Server has started on port ${PORT}`));
