const Joi = require('joi');

export const ConfigValidationSchema = Joi.object({
  PORT: Joi.string().regex(/^\d+$/).required(),
  REDIS_NAME: Joi.string().required(),
  REDIS_URL: Joi.string().required(),
  REDIS_PORT: Joi.string().regex(/^\d+$/).required(),
  NODE_ENV: Joi.string().optional(),
  ENTITITES_URL: Joi.string().uri().required(),
});
