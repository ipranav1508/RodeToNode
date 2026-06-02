// core module
// const http = require('http');

// external module
const express = require('express');

// local module
const requestHandler = require('./user');

const app = express();
app.use("/", (req, res, next) => {
  console.log('Middleware 1', req.method, req.url);
  next();
});

app.use("/submit", (req, res, next) => {
  console.log('Middleware 2', req.method, req.url);
  res.send('<p>Hello from Middleware 2</p>');
});

// const server = http.createServer(app);

const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// nodemon is exsiting in package.json, so we can run the server with "npm start" command, which will automatically restart the server whenever we make changes to the code.but through the terminal, we can also run the server with "node app.js" command, but in this case, we need to manually restart the server whenever we make changes to the code.