const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously, but forget to handle the response
  someAsyncOperation(data).then(() => {
    console.log('Data processed successfully!');
  });
});

function someAsyncOperation(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate some asynchronous operation
      resolve();
    }, 1000);
  });
}