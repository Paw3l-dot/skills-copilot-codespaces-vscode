// Create web server

// Import express
const express = require('express');
// Import body-parser
const bodyParser = require('body-parser');
// Import mongoose
const mongoose = require('mongoose');
// Import morgan
const morgan = require('morgan');
// Import path
const path = require('path');

// Import routes
const api = require('./routes/api');

// Create express app
const app = express();

// Connect to database
mongoose.connect('mongodb://localhost/comments');
mongoose.Promise = global.Promise;

// Use morgan
app.use(morgan('dev'));
// Use body-parser
app.use(bodyParser.json());

// Use routes
app.use('/api', api);

// Error handling
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// Listen for requests
app.listen(process.env.port || 4000, () => {
  console.log('Now listening for requests');
});