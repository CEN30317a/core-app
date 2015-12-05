'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  JobApp = mongoose.model('JobApp'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a jobApp
 */
exports.create = function (req, res) {
  var jobApp = new JobApp(req.body);

  jobApp.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(jobApp);
    }
  });
};
