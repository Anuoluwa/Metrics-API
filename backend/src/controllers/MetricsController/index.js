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
   * Get All Metrics
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {*}
   * @memberof MetricsController
   */
   static async GetAllMetrics(req, res, next) {
    try {
      return InfluxModel.SelectAllMetrics(req, res, next);
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
   * Get Metrics Moving Average
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @return {*}
   * @memberof MetricsController
   */
  static async GetMetricsMovingAverages(req, res, next) {
    try {
      return InfluxModel.SelectMovingAverages(req, res, next);
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
