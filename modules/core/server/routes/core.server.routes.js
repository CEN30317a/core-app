'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  var jobs = require('../controllers/jobs.server.controller');

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
  app.route('/*').get(core.renderIndex);

    // jobs collection routes
    app.route('/api/jobs')
      .get(jobs.list);

    // Single job routes
    app.route('/api/jobs/:jobId')
      .get(jobs.read);

    // Finish by binding the job middleware
    app.param('jobId', jobs.jobByID);


    // Jobs collection routes
    app.route('/api/contacts')
      .post(core.create);


};
