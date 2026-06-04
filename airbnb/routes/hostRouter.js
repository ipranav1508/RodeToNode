const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const appRoot = require('../utils/pathUtils');

hostRouter.get('/add-home', (req, res, next) => {
  res.sendFile(path.join(appRoot, 'views', 'addHome.html'));
});

hostRouter.post('/add-home', (req, res, next) => {
  console.log('Home:', req.body);
  res.sendFile(path.join(appRoot, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;