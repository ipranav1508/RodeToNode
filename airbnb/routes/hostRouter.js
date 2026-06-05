const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const appRoot = require('../utils/pathUtils');

hostRouter.get('/add-home', (req, res, next) => {
  res.render('addHome', { title: 'Add Your Home' });
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
  console.log('Home:', req.body);
  registeredHomes.push({ housename: req.body.name });
  res.render('homeAdded', { title: 'Home Added' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;