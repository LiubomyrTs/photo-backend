/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');
const { getFileStream } = require('./s3');

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
});

// On Error
mongoose.connection.on('error', (error) => {
  console.log(`database error ${error}`);
});

const app = express();

const users = require('./routes/users');
const blogs = require('./routes/blogs');
const home = require('./routes/home');
const photosessions = require('./routes/photosessions');

const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, '../public')));

// Body parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/blogs', blogs);
app.use('/home-info', home);
app.use('/photosessions', photosessions);

// // Index route
// app.get('/', (req, res) => {
//   res.send('INVALID ENDPOINT');
// });

app.get('/images/*', (req, res) => {
  const key = req.url.replace('/images/', '');
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

app.get('/uploads/*', (req, res) => {
  res.sendFile(path.join(__dirname, `../${req.url}`));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started on port ${port}`);
});
