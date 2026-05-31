const {sumHandler} = require('./calculate');

const requestHandler = (req, res)=>{
  console.log(req.url, req.method);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>Calculator</title></head>
    <body><h1>Welcome to the Calculator Page!</h1></body>
    <a href="/sum">Go to Sum Page</a>
  </html>`);
    return res.end();
  }else if(req.url.toLowerCase() === '/sum' && req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>Sum Calculator</title></head>
    <body><h1>Sum Calculator</h1>
    <form action="/sum-result" method="post">
      <input type="number" name="num1" placeholder="Number 1" required>
      <input type="number" name="num2" placeholder="Number 2" required>
      <input type="submit" value="Calculate Sum">
    </form>
    </body>
  </html>`);
    return res.end();
  }else if(req.url.toLowerCase() === '/sum-result' && req.method === 'POST'){
    return sumHandler(req, res); // call the sum function to calculate and send the result
  }
  else{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.write('<html><head><title>Not Found</title></head><body><h1>Page Not Found</h1></body></html>');
    return res.end();
  }
}

exports.requestHandler = requestHandler;