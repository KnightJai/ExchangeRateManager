const express = require('express');
const dotenv = require('dotenv');
const exchangeRoutes = require('./src/routes/exchangeRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', exchangeRoutes);

app.get('/', (req, res) => {
  res.send('Exchange Rate Service is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
