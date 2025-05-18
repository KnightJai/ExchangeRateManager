const client = require('prom-client');

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const convertCounter = new client.Counter({
  name: 'api_convert_requests_total',
  help: 'Total number of /convert API requests',
});

register.registerMetric(convertCounter);

module.exports = {
  register,
  convertCounter,
};
