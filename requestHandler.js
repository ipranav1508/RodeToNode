// request handler to send to server response

const requestHandler = (req, res)=>{
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
};

// code to take input from user and send response
function userInput(res){
 res.write('<form action="/submit" method="post"><h1>Enter your name:</h1><input type="text" name="username" placeholder="Your Name"><input type="submit" value="Submit"></form>');
}

// reading your name from form and sending response
function responsefromUser(req, res){
  if (req.method === 'POST' && req.url === '/submit') {
        let body = [];
        // chunk is a piece of data received from the client, and we convert it to string and append to body
        req.on('data', chunk => {
            console.log('Received chunk:', chunk); // log the received chunk
            // body += chunk.toString();
            body.push(chunk); // store the chunk in an array
        });
        req.on('end', () => {
            const completeBody = Buffer.concat(body).toString(); // concatenate all chunks and convert to string
            // console.log('Complete body:', completeBody); // log the complete body
            // const username = new URLSearchParams(body).get('username');
            // res.write(`<html><body><h1>Hello, ${username}! Welcome to the server!</h1></body></html>`);

            // pass via object
            const params = new URLSearchParams(completeBody);
            // const bodyObject = {};
            // for (const [key, value] of params) {
            //     bodyObject[key] = value;
            // }
            const bodyObject = Object.fromEntries(params); // convert URLSearchParams to a plain object
            console.log('Parsed body object:', bodyObject); // log the parsed body object
            res.write(`<html><body><h1>Hello, ${bodyObject.username}! Welcome to the server!</h1></body></html>`);
            
            return res.end();
        });
    }
}

module.exports = requestHandler; // export the request handler function