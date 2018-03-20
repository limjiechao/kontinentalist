const path = require('path'); // working with file and directory paths
const bodyParser = require('body-parser');
const express = require('express');
const expressHandlebars = require('express-handlebars');

const routes = require('./routes');
const config = require('./config');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); // Get information from HTML forms
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files for production

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(port, () => {
	console.log('>>> Server Connected <<<');
});
