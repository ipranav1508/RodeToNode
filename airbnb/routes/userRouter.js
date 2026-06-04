const path = require('path');
const express = require('express');
const userRouter = express.Router();
const appRoot = require('../utils/pathUtils');

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(appRoot, 'views', 'home.html'));
});

module.exports = userRouter;