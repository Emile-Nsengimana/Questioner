### This API endpoints are for
   * Creating a record for meetup, questions, users, Rsvp
   * Retrieve record(s) for meetup(s)
   * Rsvp for a meetup
   * Upvote or downvote a question
### API Endpoints
API endpoints                 |Methods             |For
localhost:3000/api/v1/meetups |GET |retrieving all meetups records
localhost:3000/api/v1/meetups/:topic |GET retrieve a specified meetup
localhost:3000/api/v1/meetups |POST post a meetup
localhost:3000/api/v1/question |GET retrieving all questions record
localhost:3000/api/v1/question/:id/upvote |PATCH up-vote a specified question
localhost:3000/api/v1/question/:id/downvote |PATCH up-vote a specified question
localhost:3000/api/v1/rsvp |GET |retrieving all rsvp records
localhost:3000/api/v1/rsvp/:userId |GET |retrieving all rsvp records for a specific user
localhost:3000/api/v1/RSVP |POST |post rsvp for a meetup
localhost:3000/api/v1/users |GET |retrieving records for users
localhost:3000/api/v1/users/:id |GET |retrieve a specified meetup
localhost:3000/api/v1/users |POST post a user

### This can be tested using postman

[![Coverage Status](https://coveralls.io/repos/github/Emile-Nsengimana/Andela/badge.svg?branch=ch2)](https://coveralls.io/github/Emile-Nsengimana/Andela?branch=ch2)
