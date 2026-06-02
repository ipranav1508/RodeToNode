const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log('Middleware 1 dummy', req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2 dummy', req.method, req.url);
  next();
});

// app.use((req, res, next) => {
//   console.log('Middleware 3', req.method, req.url);
//   res.send('<p>Hello from Middleware 3</p>');
// });

app.get('/', (req, res, next) => {
  console.log('GET / handler');
  res.send('<p>Hello from GET / handler</p>');
});

app.get('/contact', (req, res, next) => {
  console.log('GET /contact handler');
  res.send(`<p>Please contact us at contact@example.com</p>
    <form action="/contact" method="POST">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <button type="submit">Send</button>
    </form>
    `);
});

app.post('/contact', (req, res, next) => {
  console.log('POST /contact handler');
  res.send('<p>Thank you for contacting us!</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});