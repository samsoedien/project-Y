const http = require('http');

const app = require('./app');
const connectDB = require('./tools/db');

// Connect Database
connectDB();

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
