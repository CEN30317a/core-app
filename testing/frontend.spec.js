'use strict';
browser.driver.manage().window().maximize();

var loginAsAdmin = function() {
  //login in as admin
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
};

var addUser = function() {
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
}

var addJob = function() {
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
}

var addReferral = function() {
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
}

var addContact = function() {
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
}

describe('SignIn Users', function() {
  it('Open Signin box', function() {
    browser.get('http://localhost:3000/');

    loginAsAdmin();
}}));

describe('Clicking all the buttons', function(){
  it('Navigate to About Us', function() {
    element(by.model('aboutUs')).click;
    element(by.model('home')).click;
  });
  it('Navigate to About Us', function() {
    element(by.model('services')).click;
    element(by.model('home')).click;
  });
  it('Navigate to About Us', function() {
    element(by.model('packages')).click;
    element(by.model('home')).click;
  });
  it('Navigate to About Us', function() {
    element(by.model('careers')).click;
    element(by.model('home')).click;
  });
});
