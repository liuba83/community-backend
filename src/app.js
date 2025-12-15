const express = require('express');
const cors = require('cors');

const errorHandler = require('./middlewares/error.middleware');
const serviceRoutes = require('./routes/service.routes');

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000']
}));

app.use(express.json());
app.use('/api/services', serviceRoutes);

app.use(errorHandler);

module.exports = app;
