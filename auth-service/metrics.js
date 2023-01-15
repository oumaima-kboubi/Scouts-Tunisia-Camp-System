const promClient = require('prom-client');

const register = new promClient.Registry();
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ register });

const loginRequestCounter = new promClient.Counter({
    name: 'login_requests_total',
    help: 'The total number of login requests handled by the server',
    labelNames: ['route','status_code','requestType']
});
const registerRequestCounter = new promClient.Counter({
    name: 'register_requests_total',
    help: 'The total number of register requests handled by the server',
    labelNames: ['route','status_code','requestType']
});
const httpRequestDurationMicroseconds = new promClient.Histogram({
    name: 'http_request_duration_ms',
    help: 'Duration of HTTP requests in ms',
    labelNames: ['route'],
    // buckets for response time from 0.1ms to 500ms
    buckets: [0.10, 5, 15, 50, 100, 200, 300, 400, 500]
  })
  const activeConnections = new promClient.Gauge({
    name: 'active_connections',
    help: 'Number of active connections'
  });
const total_logs = new promClient.Gauge({
    name: 'total_tasks',
    help: 'Total number of items in the system',
  });
promClient.register.registerMetric(loginRequestCounter);
promClient.register.registerMetric(registerRequestCounter);
promClient.register.registerMetric(httpRequestDurationMicroseconds);
promClient.register.registerMetric(activeConnections);
promClient.register.registerMetric(total_logs);
module.exports = {loginRequestCounter, total_logs, registerRequestCounter, httpRequestDurationMicroseconds,activeConnections,total_logs}