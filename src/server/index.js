const fs = require('fs');
const express = require('express');
const apiRoutes = require('./api');
const apicache = require('apicache');

/**
 * Variables
 */
const cache = apicache.middleware;
const app = express();
const html = fs.readFileSync(__dirname + '/index.html', 'utf-8');

/**
 * Static Asset Location
 */
app.use(express.static('./app'));

/**
 * Api Routes
 */
app.use('/api', cache('3 Minutes'), apiRoutes);

/**
 * Routes
 */
app.get(['*'], (req, res) => res.send(html));

/**
 * Start server
 */
app.listen(3000, () => console.log('React server app listening on port 3000!'));