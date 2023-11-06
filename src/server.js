const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to my node.js app');
});

// Run server
app.listen(5000, function () {
  console.log('app running on port 5000');
});
