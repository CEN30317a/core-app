'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
  },
  last_name: {
    type: String,
    default: '',
    required: 'Name cannot be blank'
  },
  message: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    trim: true
  },
  status: {
    type: String,
    default: 'Unread',
    trim: true
  }
});

mongoose.model('Contact', ContactSchema);
