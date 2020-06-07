const express = require('express');
const routes = express.Router();

const SensorController = require('./controllers/SensorController');


routes.get('/sensores', SensorController.index);

module.exports = routes; 