const promClient = require('prom-client');

const register = new promClient.Registry();
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ register });

const articleAddedCounter = new promClient.Counter({
    name: 'article_added_count',
    help: 'The total number of articles added',
    labelNames: ['route','status_code','requestType']
});

promClient.register.registerMetric(articleAddedCounter);

module.exports = {articleAddedCounter}