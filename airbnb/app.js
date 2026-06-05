const path = require('path');
const express = require('express');

const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
const appRoot = require('./utils/pathUtils');

const app = express();

app.use(express.static(path.join(appRoot, 'public')));
app.use(express.urlencoded());
app.use( userRouter);
app.use('/host', hostRouter);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(appRoot, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});