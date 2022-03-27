const express = require('express');
const websiteRoute = require('./website.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/parse',
    route: websiteRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
