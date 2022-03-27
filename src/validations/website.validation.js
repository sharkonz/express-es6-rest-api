const Joi = require('joi');
const { websiteId } = require('./custom.validation');

const createWebsite = {
  body: Joi.object().keys({
    url: Joi.string().required().custom(websiteId)
  }),
};

const getWebsites = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getWebsite = {
  params: Joi.object().keys({
    userId: Joi.string().custom(websiteId),
  }),
};


module.exports = {
    createWebsite,
    getWebsites,
    getWebsite,
};
