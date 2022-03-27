const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { websiteService } = require('../services');

const insertWebsite = catchAsync(async (req, res) => {
  res.status(httpStatus.CREATED).send(website);
  const website = await websiteService.insertWebsite(req.body.url);
});

module.exports = {
    insertWebsite
};
