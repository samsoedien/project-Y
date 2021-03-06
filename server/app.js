const path = require('path');
const fs = require('fs');
const https = require('https');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const csrf = require('csurf');
const dotenv = require('dotenv').config();
const multer = require('multer');
const passport = require('passport');
const uuidv4 = require('uuid/v4');

const userRoutes = require('./api/routes/users');
const profileRoutes = require('./api/routes/profiles');
const postRoutes = require('./api/routes/posts');
const blogRoutes = require('./api/routes/blogs');

const app = express();

app.get('/', (req, res, next) => res.send('Rest API Running'));

// const csrfProtection = csrf();

// const privateKey = fs.readFileSync('bin/server.key');
// const certificate =  fs.readFileSync('bin/server.cert');

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' },
);

app.use(helmet());
app.use(compression());

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined', { stream: accessLogStream }));
} else {
  app.use(morgan('dev'));
}

app.use(express.json({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

// Multer Middleware
app.use(multer({ storage: fileStorage, fileFilter }).single('image'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Passport middleware
// app.use(passport.initialize());
// require('./tools/passport')(passport);

// Handling CORS errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE',
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/blogs', blogRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message, data });
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
