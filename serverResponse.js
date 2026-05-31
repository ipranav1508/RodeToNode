const http = require('http');
const requestHandler = require('./requestHandler'); // import request handler from separate file
const PORT = 3000;

const response = http.createServer(requestHandler); // use the imported request handler for the server

response.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});