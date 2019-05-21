// const http = require('http');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();

// const app = require('./app');
// // const URI = require('./config/keys').MONGODB_URI;

// const port = process.env.PORT || 4000; // Should be 3001?
// const server = http.createServer(app);

// mongoose
//   .connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
//   .then(() => {
//     console.log('MongoDB connected');
//     server.listen(port, () => console.log(`Server running on port ${port}`));
//   })
//   .catch(err => {
//     throw new Error(err);
//   });
// mongoose.Promise = global.Promise;


const express = require('express');
const connectDB = require('./utils/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res, next) => res.send('API running'));

const usersRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const postsRoutes = require('./routes/posts');

// Define Routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
