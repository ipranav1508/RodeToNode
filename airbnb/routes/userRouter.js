const path = require('path');
const express = require('express');
const userRouter = express.Router();
const appRoot = require('../utils/pathUtils');
const { registeredHomes } = require('./hostRouter');

// userRouter.get("/", (req, res, next) => {
//   res.sendFile(path.join(appRoot, 'views', 'home.html'));
// });

userRouter.get("/", (req, res, next) => {
  res.render('home',{ registeredHomes: registeredHomes, title: 'AirBnb Home' });
});

module.exports = userRouter;