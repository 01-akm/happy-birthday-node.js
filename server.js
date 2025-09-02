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