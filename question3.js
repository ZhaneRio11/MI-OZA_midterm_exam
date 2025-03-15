const express = require('express');  // Import Express
const app = express();               // Create an Express application
const port = 3000;                   // Set the port number

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Zhane Fate Minoza' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
