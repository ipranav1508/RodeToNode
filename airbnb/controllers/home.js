const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
  res.render('addHome', { title: 'Add Your Home' });
};

exports.addHome = (req, res, next) => {
  const home = new Home(req.body.name);
  home.save();

  res.render('homeAdded', { title: 'Home Added' });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render('home', {
      registeredHomes,
      title: 'AirBnb Home'
    });
  });
};

