const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  someAsyncOperation(data)
    .then(() => {
      res.json({ message: 'Data processed successfully!' });
    })
    .catch(error => {
      console.error('Error processing data:', error);
      res.status(500).json({ error: 'Failed to process data' });
    });
});

function someAsyncOperation(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate some asynchronous operation that might fail
      const success = Math.random() < 0.8; // 80% chance of success
      if (success) {
        resolve();
      } else {
        reject(new Error('Simulated asynchronous operation failed'));
      }
    }, 1000);
  });
}