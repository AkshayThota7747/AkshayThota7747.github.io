const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Store the like count
let likeCount = 0;

// Parse JSON bodies for POST requests
app.use(bodyParser.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// GET request handler for getting the like count
app.get('/likes', (req, res) => {
  res.json({ count: likeCount });
});

// POST request handler for incrementing/decrementing the like count
app.post('/likes', (req, res) => {
  const action = req.body.action;
  if (action === 'increment') {
    likeCount++;
  } else if (action === 'decrement') {
    likeCount--;
  }
  res.json({ count: likeCount });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
