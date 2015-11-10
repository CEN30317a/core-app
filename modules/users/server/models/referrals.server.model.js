'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Referral Schema
 */
var ReferralSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title cannot be blank'
  },
  assigned: {
    type: String,
    default: '',
    trim: true
  },
  locate: {
    type: String,
    default: '',
    trim: true
  },
  dateVisit: {
    type: String,
    default: '',
    trim: true
  },
  contactClient: {
    type: String,
    default: '',
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  history: {
    type: String,
    default: '',
    trim: true
  },
  comments: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Referral', ReferralSchema);
