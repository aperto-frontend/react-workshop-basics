const { Router } = require('express');
const request = require('request');
const router = new Router();

/**
 * Add API
 */
router.get('/movies/top-rated', (req, res) => {
	console.log('Movies API :: Execute request to top rated movies!');

	const options = {
		url: 'https://api.themoviedb.org/3/movie/top_rated',
		qs: {
			page: '1',
			language: 'en-US',
			api_key: '2b81dd87d05206bc0da697f603ebce88'
		},
		body: '{}'
	};
	return request
		.get(options)
		.on('error', () => res.sendStatus(503))
		.pipe(res)
});

module.exports = router;