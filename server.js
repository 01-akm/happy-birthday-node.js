// Import necessary libraries
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve all the HTML, CSS, JS, and music files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// --- The API Endpoint ---
// This is where the form from phase4.html will send the message
app.post('/api/save-message', (req, res) => {
     // Get the message from the request body
    const message = req.body.message;

    if (!message || message.trim() === '') {
        return res.status(400).json({ success: false, error: 'Message cannot be empty.' });
    }

     // This is the "log file" part. It prints the message to your Render server logs.
    console.log(`--- NEW MESSAGE RECEIVED ---`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Message: ${message}`);
    console.log(`--------------------------`);
     // Send a success response back to the webpage
    res.status(200).json({ success: true, message: 'Message logged successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
