'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Article = mongoose.model('Article'),
  Job = mongoose.model('Job');

/**
 * Globals
 */
var user, article, job;

/**
 * Unit tests
 */
describe('Job Model Unit Tests:', function () {
  beforeEach(function (done) {
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: 'username',
      password: 'M3@n.jsI$Aw3$0m3'
    });

    user.save(function () {
      article = new Article({
        title: 'Article Title',
        content: 'Article Content',
        user: user
      });

      job = new Job({
        title: 'Job Title',
        content: 'Job Content',
      });

      done();
    });
  });

  describe('Method Save', function () {
    it('should be able to save without problems', function (done) {
      this.timeout(10000);
      return job.save(function (err) {
        should.not.exist(err);
        done();
      });
    });

    // it('should be able to show an error when try to save without title', function (done) {
    //   article.title = '';
    //
    //   return job.save(function (err) {
    //     should.exist(err);
    //     done();
    //   });
    // });
  });

  afterEach(function (done) {
    Article.remove().exec(function () {
      User.remove().exec(done);
    });
  });
});
