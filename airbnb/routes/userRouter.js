const express = require('express');
const userRouter = express.Router();
const homesController = require('../controllers/home');

// userRouter.get("/", (req, res, next) => {
//   res.sendFile(path.join(appRoot, 'views', 'home.html'));
// });

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;