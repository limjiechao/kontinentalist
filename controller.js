const unirest = require('unirest');

// // Development Environment Only
// const config = require('./config');
// const APP_KEY = config.APP_KEY;

const APP_KEY = process.env.APP_KEY;
const API_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
const COUNT = 1;

exports.index = (req, res) => {
	res.render('home');
}

exports.quote = (req, res) => {
	let chosen = req.body.category
	let quote;

	// These code snippets use an open-source library. http://unirest.io/nodejs
	unirest.get(`${API_URL}?cat=${chosen}&count=${COUNT}`)
	.header('X-Mashape-Key', APP_KEY)
	.header('Accept', 'application/json')
	.end(function (result) {

		console.log('result.status\n', result.status);
		console.log('result.headers\n', result.headers);
		console.log('result.body\n', result.body);

		if (result.status == 200) {
			let quote = result.body
			res.render('quote', { output: quote })
		} else if (result.status == 500) {
			res.render('quote', { output: { quote: result.body.message, category: 'Error', author: `Status Code: ${result.status}` } })
		}
	});
}
