const express = require('express');
const errorHandler = require('./middlewares/error.middleware');
const serviceRoutes = require('./routes/service.routes');

const app = express();

app.use(express.json());
app.use('/services', serviceRoutes);

// Central error handler
app.use(errorHandler);

module.exports = app;
