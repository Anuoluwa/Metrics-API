const { Router } = require('express');
const Validations = require('../middleware/Validations');
const MetricsController = require('../controllers/MetricsController');

const router = Router();

router
  .route('/')
  .post(Validations.validateMetric, MetricsController.CreateMetric)
  .get(MetricsController.GetMetricsMovingAverages);

  router
  .route('/all')
  .get(MetricsController.GetAllMetrics);

module.exports = router;
