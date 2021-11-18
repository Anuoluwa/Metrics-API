const { Router } = require('express');
const Validations = require('../middleware/Validations');
const MetricsController = require('../controllers/MetricsController');

const router = Router();

router
  .route('/')
  .post(Validations.validateMetric, MetricsController.CreateMetric)
  .get(MetricsController.GetMetrics);

module.exports = router;
