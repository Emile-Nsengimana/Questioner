'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _meetups = require('./v1/meetups');

var _meetups2 = _interopRequireDefault(_meetups);

var _questions = require('./v1/questions');

var _questions2 = _interopRequireDefault(_questions);

var _rsvp = require('./v1/rsvp');

var _rsvp2 = _interopRequireDefault(_rsvp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use('/api/v1/meetups', _meetups2.default);
app.use('/api/v1/questions', _questions2.default);
app.use('/api/v1/rsvp', _rsvp2.default);

var PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
app.listen(PORT, function () {
  return console.info('Server has started on port ' + PORT);
});