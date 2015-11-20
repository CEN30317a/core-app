'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Contact = mongoose.model('Contact'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Show the current contact
 */
exports.read = function (req, res) {
  res.json(req.contact);
};

/**
 * Update a contact
 */
exports.update = function (req, res) {
  var contact = req.contact;

  if(contact.status === 'Unread'){
  contact.status = "Read";
} else if(contact.status === 'Read'){
  contact.status = "Unread";
}

  contact.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(contact);
    }
  });
};

/**
 * Delete an contact
 */
exports.delete = function (req, res) {
  var contact = req.contact;

  contact.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(contact);
    }
  });
};

/**
 * List of Contacts
 */
exports.list = function (req, res) {
  Contact.find().sort('-created').populate('user', 'displayName').exec(function (err, contacts) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(contacts);
    }
  });
};

/**
 * Contact middleware
 */
exports.contactByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Contact is invalid'
    });
  }

  Contact.findById(id).populate('user', 'displayName').exec(function (err, contact) {
    if (err) {
      return next(err);
    } else if (!contact) {
      return res.status(404).send({
        message: 'No contact with that identifier has been found'
      });
    }
    req.contact = contact;
    next();
  });
};
