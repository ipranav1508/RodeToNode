const http = require('http');
const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// nodemon is exsiting in package.json, so we can run the server with "npm start" command, which will automatically restart the server whenever we make changes to the code.but through the terminal, we can also run the server with "node app.js" command, but in this case, we need to manually restart the server whenever we make changes to the code.