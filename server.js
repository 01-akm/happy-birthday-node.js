// Import necessary libraries
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
