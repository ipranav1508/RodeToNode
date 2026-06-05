const path = require('path');
const express = require('express');

const {hostRouter} = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
const appRoot = require('./utils/pathUtils');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(appRoot, 'public')));
app.use(express.urlencoded());
app.use( userRouter);
app.use('/host', hostRouter);


app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(appRoot, 'views', '404.html'));
  res.status(404).render('404', { title: 'Page Not Found' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});