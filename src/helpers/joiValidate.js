const JoisBase = require('@hapi/joi');
const JoiDate = require('@hapi/joi-date');

const Joi = JoisBase.extend(JoiDate);
const {
  createError,
  BAD_REQUEST,
  CONFLICT,
  NOT_FOUND,
  SERVER_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
} = require('../utils/error');

/**
 * Validate request body
 *
 * @param {object} payload
 * @param {object} res
 * @param {object} next
 * @param {object} schema
 */
const joiValidate = (payload, schema, req, res, next) => {
  const { error, value } = schema.validate(payload, {
    allowUnknown: true,
  });

  if (error) {
    const errors = error.details.map((current) => current.message.replace(/['"]/g, ''));
    return createError(errors[0], 400);
  }

  return value;
};

module.exports = {
  joiValidate,
  Joi,
};
