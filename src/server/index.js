const fs = require('fs');
const express = require('express');
const app = express();
const html = fs.readFileSync(__dirname + '/index.html', 'utf-8');


/**
 * Static Asset Location
 */
app.use(express.static('./app'));

/**
 * Routes
 */
app.get(['*'], (req, res) => res.send(html));

/**
 * Start server
 */
app.listen(3000, () => console.log('React server app listening on port 3000!'));