const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/static')));

app.use('/', routes());

app.listen(port, () => {
  console.log('App listening on port 3000!');
});
