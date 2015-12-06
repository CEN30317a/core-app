'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  JobApp = mongoose.model('JobApp'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Show the current jobApp
 */
exports.read = function (req, res) {
  res.json(req.jobApp);
};

/**
 * Delete an jobApp
 */
exports.delete = function (req, res) {
  var jobApp = req.jobApp;

  jobApp.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(jobApp);
    }
  });
};

/**
 * List of JobApps
 */
exports.list = function (req, res) {
  JobApp.find().sort('-created').populate('user', 'displayName').exec(function (err, jobApps) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(jobApps);
    }
  });
};

/**
 * JobApp middleware
 */
exports.jobAppByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'JobApp is invalid'
    });
  }

  JobApp.findById(id).populate('user', 'displayName').exec(function (err, jobApp) {
    if (err) {
      return next(err);
    } else if (!jobApp) {
      return res.status(404).send({
        message: 'No jobApp with that identifier has been found'
      });
    }
    req.jobApp = jobApp;
    next();
  });
};
