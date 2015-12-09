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
};

var addJob = function() {
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
};

var addReferral = function() {
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
};

var addContact = function() {
  element(by.model('contact')).click();
  element(by.model('first_name')).sendKeys('Daniel');
  element(by.model('last_name')).sendKeys('Lelis');
  element(by.model('phone')).sendKeys('9048818304');
  element(by.model('email')).sendKeys('oheyitsdaniel@gmail.com');
  element(by.model('message')).sendKeys('Man, we so cool');
  element(by.model('submitContact')).click();
  element(by.model('home')).click();
};

browser.get('http://localhost:3000/');

describe('Sending message to admin', function(){
  it('Navigate to Contact Us page and send message', function(){
    addContact();
  });
});


describe('Clicking all the header buttons', function(){

  it('Navigate to About Us', function() {
    element(by.model('aboutUs')).click();
    element(by.model('home')).click();
  });
  it('Navigate to services', function() {
    element(by.model('services')).click();
    element(by.model('home')).click();
  });
  it('Navigate to packages', function() {
    element(by.model('packages')).click();
    element(by.model('home')).click();
  });
  it('Navigate to careers', function() {
    element(by.model('careers')).click();
    element(by.model('home')).click();
  });
});
