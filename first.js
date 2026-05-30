// server quick understanding of nodejs
const http = require('http');
const PORT = 3000;
// basic 
// function requestListener(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, World!');
// }
// const server = http.createServer(requestListener);

// using arrow function
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, World!');
// });

// direct call
http.createServer((req, res) => {
console.log(req);
}).listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});