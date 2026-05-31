const sumHandler = (req, res) => {
    const body = [];
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parsedBody);
        const num1 = parseInt(params.get('num1'), 10);
        const num2 = parseInt(params.get('num2'), 10);
        const result = num1 + num2;
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.write(`<html><head><title>Sum Result</title></head><body><h1>Result: ${result}</h1></body></html>`);
        return res.end();
    });

};

exports.sumHandler = sumHandler;