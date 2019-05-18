const path = require('path');
const fs = require('fs');
const https = require('https');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const csrf = require('csurf');
const uuidv4 = require('uuid/v4');
const dotenv = require('dotenv').config();

const authRoutes = require('./routes/auth');
// const postRoutes = require('./routes/posts');

const app = express();

app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
// app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling CORS errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Use Routes
app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/contact', contactRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message });
});


// Morgan setup
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// // const port = process.env.PORT || 3001;
// const port = process.env.PORT;
// app.listen(port, () => console.log(`Server listening on port ${port}`));
// // https.createServer({ key: privateKey, cert: certificate }, app).listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;