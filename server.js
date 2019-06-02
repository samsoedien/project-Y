// const http = require('http');

// const app = require('./app');
// const connectDB = require('./utils/db');

// // Connect Database
// connectDB();

// const PORT = process.env.PORT || 4000;
// const server = http.createServer(app);

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const connectDB = require('./utils/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res, next) => res.send('Rest API Running'));

const usersRoutes = require('./routes/users');
const profileRoutes = require('./routes/profiles');
const postsRoutes = require('./routes/posts');

// Define Routes
app.use('/api/users', usersRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
