// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('This is communication between Frountend And Backend this message is visible from another project js file');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
