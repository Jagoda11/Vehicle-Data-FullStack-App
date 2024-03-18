const express = require('express');
const vehicles = require('./vehicles');
const app = express();

// 🌐 Middleware to set CORS headers, allowing requests from any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// ⏱️ Middleware to simulate network latency by delaying the response by 2 seconds
app.use((req, res, next) => setTimeout(next, 2000));

// 🚗 Route handler for GET /vehicles requests
// The function is defined here and will be called by Express.js when a matching request is received
app.get('/vehicles', (req, res) => {
  console.log('🚗 GET Vehicles');
  res.send(vehicles);
});

// 🚀 Start the server on port 4000
// The function passed to app.listen() will be called immediately when the server starts
app.listen(4000, () => {
  console.log('🚀 Server starting');
});
