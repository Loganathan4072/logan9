const express = require('express');
const app = express();
const port = 3000; // You can change this port number

// Define a route for a simple API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
