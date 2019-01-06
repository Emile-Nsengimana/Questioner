let express = require('express');
let router = express.Router();

router.get('/api/v1/person', (req, res) => {
	res.send('Success');
});
module.exports = router;
