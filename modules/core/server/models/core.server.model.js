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
  name: {
    type: String,
    default: '',
    trim: true,
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
  status: {
    type: String,
    default: 'Unread',
    trim: true
  }
});

var JobAppSchema = new Schema({
  first_name: {
    type: String,
    default: '',
    trim: true
  },
  last_name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name cannot be blank'
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
  street_address: {
    type: String,
    default: '',
    trim: true
  },
  apt_number: {
    type: String,
    default: '',
    trim: true
  },
  city: {
    type: String,
    default: '',
    trim: true
  },
  state: {
    type: String,
    default: '',
    trim: true
  },
  zip_code: {
    type: String,
    default: '',
    trim: true
  },
  pt: {
    type: Number,
    default: 0,
    trim: true
  },
  ft: {
    type: Number,
    default: 0,
    trim: true
  },
  textarea1: {
    type: String,
    default: '',
    trim: true
  },
  resume: {
    type: String,
  }
});

mongoose.model('Contact', ContactSchema);
mongoose.model('JobApp', JobAppSchema);
