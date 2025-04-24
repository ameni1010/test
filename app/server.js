const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;

// Serve files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Kubernetes - Node.js app!' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on http://localhost:${PORT}`);
});
