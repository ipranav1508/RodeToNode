// response passing to server
const http = require('http');
const PORT = 3000;

let response = http.createServer((req, res)=>{
   res.setHeader('Content-Type', 'text/html');

   // url routing based response
   if(req.url.toLowerCase() === '/about'){
    res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body><h1>Welcome to the About Page!</h1></body>');
    res.write('</html>');
    return res.end(); // end the response
   }
   else if(req.url.toLowerCase() === '/submit' && req.method === 'POST'){
    return responsefromUser(req, res); // call function to handle form submission
   }
   else{
    res.write('<html>');
    res.write('<head><title>Node.js Response</title></head>');
    res.write('<body><h1>Hello, this is a response from the server!</h1></body>');
    userInput(res); // call function to take user input
    res.write('</html>');
    res.end(); // end the response
   }

  //  console.log(req);  //  process.exit(); // to stop the server
});

response.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// code to take input from user and send response
function userInput(res){
 res.write('<form action="/submit" method="post"><h1>Enter your name:</h1><input type="text" name="username" placeholder="Your Name"><input type="submit" value="Submit"></form>');
}

// reading your name from form and sending response
function responsefromUser(req, res){
  if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const username = new URLSearchParams(body).get('username');
            res.write(`<html><body><h1>Hello, ${username}! Welcome to the server!</h1></body></html>`);
            res.end();
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>404 Not Found</h1></body></html>');
        res.end();
    }
}