const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Coders!');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});