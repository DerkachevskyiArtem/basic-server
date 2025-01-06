const express = require('express');
const rootRouter = require('./routers');
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(rootRouter);

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log('server started');
});
