const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Allows us to handle JSON in requests

app.get('/', (req, res) => {
  res.send('Exchange Rate Service is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
