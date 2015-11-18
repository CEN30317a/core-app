'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Job Schema
 */
var JobSchema = new Schema({
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
  description: {
    type: String,
    default: '',
    trim: true
  },
  contract: {
    type: String,
    default: '',
    trim: true
  },
  closing: {
    type: String,
    default: '',
    trim: true
  },
  minExp1: {
    type: String,
    default: '',
    trim: true
  },
  minExp2: {
    type: String,
    default: '',
    trim: true
  },
  minExp3: {
    type: String,
    default: '',
    trim: true
  },
  minExp4: {
    type: String,
    default: '',
    trim: true
  },
  minExp5: {
    type: String,
    default: '',
    trim: true
  },
  prefExp1: {
    type: String,
    default: '',
    trim: true
  },
  prefExp2: {
    type: String,
    default: '',
    trim: true
  },
  prefExp3: {
    type: String,
    default: '',
    trim: true
  },
  prefExp4: {
    type: String,
    default: '',
    trim: true
  },
  prefExp5: {
    type: String,
    default: '',
    trim: true
  },
  responsibilities: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Job', JobSchema);
