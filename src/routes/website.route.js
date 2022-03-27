const express = require('express');
const validate = require('../middleware/validate');
const websiteValidation = require('../validations/website.validation');
const websiteController = require('../controllers/website.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(websiteValidation.createWebsite), websiteController.insertWebsite);

module.exports = router;