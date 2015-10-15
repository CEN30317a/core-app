'use strict';

var jobsPolicy = require('../policies/core.server.policy'),
jobs = require('../controllers/core.server.controller');

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);

  // Jobs collection routes
  app.route('/api/jobs').all(jobsPolicy.isAllowed)
    .get(jobs.list)
    .post(jobs.create);

    // Single job routes
    app.route('/api/jobs/:jobId').all(jobsPolicy.isAllowed)
      .get(jobs.read)
      .put(jobs.update)
      .delete(jobs.delete);

    // Finish by binding the job middleware
    app.param('jobId', jobs.jobByID);

};
