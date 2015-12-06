'use strict';

/**
 * Module dependencies.
 */
var jobAppsPolicy = require('../policies/jobApps.server.policy'),
  jobApps = require('../controllers/jobApps.server.controller');

module.exports = function (app) {
  // JobApps collection routes
  app.route('/api/jobApps').all(jobAppsPolicy.isAllowed)
    .get(jobApps.list);

  // Single jobApp routes
  app.route('/api/jobApps/:jobAppId').all(jobAppsPolicy.isAllowed)
    .get(jobApps.read)
    .delete(jobApps.delete);

  // Finish by binding the jobApp middleware
  app.param('jobAppId', jobApps.jobAppByID);
};
