require('dotenv').config();
const winston = require('../../config/winston');
const InfluxModel = require('../../services');
const {
  handleResponse,
  CREATED,
} = require('../../utils/success');
const {
  createError,
  BAD_REQUEST,
  SERVER_ERROR,
} = require('../../utils/error');

/**
 * Handles metrics
 *
 * @class metrics
 */
class MetricsController {
  /**
   * Create Metrics
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {*}
   * @memberof MetricsController
   */
  static async CreateMetric(req, res, next) {
    try {
      const { name, value } = req.body;
      const timeStamp = Date.now();

      const addMetric = await InfluxModel.Insert({ name, value, timeStamp });
      winston.info(addMetric);
      if (addMetric) {
        return handleResponse(res, CREATED, 'Metric Created Successfully', addMetric);
      }
      return next(
        createError({
          status: BAD_REQUEST,
          message: 'Oops, something went wrong',
        }),
      );
    } catch (error) {
      return next(
        createError({
          status: SERVER_ERROR,
          message: `Try again something went wrong ${error}`,
        }),
      );
    }
  }

  /**
   * Get Metrics
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {*}
   * @memberof MetricsController
   */
  static async GetMetrics(req, res, next) {
    try {
      return InfluxModel.Select(req, res, next);
    } catch (error) {
      return next(
        createError({
          status: SERVER_ERROR,
          message: `Try again something went wrong ${error}`,
        }),
      );
    }
  }
}

module.exports = MetricsController;
