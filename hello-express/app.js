const express = require('express');
const app = express();

app.listen(3050, () => {
  console.log('Server is running on port 3050');
});

app.get('/hello', (req, res) => {
  res.send("Hello World!");
});