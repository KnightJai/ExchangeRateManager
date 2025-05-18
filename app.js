const express = require('express');
const dotenv = require('dotenv');
const exchangeRoutes = require('./src/routes/exchangeRoutes');
const { register, convertCounter } = require('./src/utils/metrics');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', (req, res, next) => {
  if (req.path === '/convert') {
    convertCounter.inc();
  }
  next();
});

app.use(express.json());
app.use('/api', exchangeRoutes);

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => {
  res.send('Exchange Rate Service is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

