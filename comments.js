// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a comment store
const comments = [];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Post a comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});