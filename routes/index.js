const express = require('express');
const router = express.Router();

const shortenerService = require('../services/shortener');

router.use((req, res, next) => {
	let { path } = req;

	let originalUrl = global.URL_DICT[path.substring(1)];
	if (originalUrl !== undefined) {
		return res.status(301).redirect(originalUrl);
	}
	next();
});

router.get('/', (req, res) => {
	res.render('index');
});

router.get('*', (req, res) => {
	res.status(404).send('Its 404 you fucker!');
});

module.exports = router;
