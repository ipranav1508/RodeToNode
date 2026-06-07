const fs = require('fs');
const path = require('path');
const appRoot = require('../utils/pathUtils');

const registeredHomes = [];

module.exports = class Home {
  constructor(name) {
    this.name = name;
  }

  save(){
    registeredHomes.push(this);
    const homeData = path.join(appRoot, 'data', 'homes.json');
    fs.writeFile(homeData, JSON.stringify(registeredHomes), (err) => {
      if (err) {
        console.error('Error saving home data:', err);
      } else {
        console.log('Home data saved successfully.');
      }
    });
  }

  static fetchAll(callback) {
  const homeData = path.join(appRoot, 'data', 'homes.json');

  fs.readFile(homeData, (err, data) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(data));
    }
  });
}
}
