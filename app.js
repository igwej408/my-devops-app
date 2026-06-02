const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD Pipeline! Version 1.0.0 🚀');
   res.send('Hello from my CI/CD Pipeline! Version 2.0.0 🚀');
});

app.listen(3000, () => console.log('App running on port 3000'));