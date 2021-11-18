const { Router } = require('express');
const metricRoute = require('./metricRoutes');

const router = Router();

router.use('/metrics', metricRoute);

module.exports = router;
