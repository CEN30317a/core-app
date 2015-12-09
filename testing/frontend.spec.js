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
  element(by.model('openDropdown')).click();
  element(by.model('manageUser')).click();
  element(by.model('addUser')).click();
  element(by.model('credentials.firstName')).sendKeys('Protractor');
  element(by.model('credentials.lastName')).sendKeys('is doing');
  element(by.model('credentials.email')).sendKeys('this');
  element(by.model('credentials.address')).sendKeys('wow@g.com');
  element(by.model('credentials.phone')).sendKeys('5554443333');
  element(by.model('credentials.username')).sendKeys('pro');
  element(by.model('credentials.password')).sendKeys('Abc123!@#$');
  element(by.model('submitNewUser')).click();
  element(by.model('newUserDone')).click();
};

var addJob = function() {
  element(by.model('openDropdown')).click();
  element(by.model('manageJob')).click();
  element(by.model('addJob')).click();
  element(by.model('job.title')).sendKeys('Protractor');
  element(by.model('job.description')).sendKeys('is doing this');
  element(by.model('job.full')).click();
  element(by.model('job.closing')).sendKeys('Yesterday');
  element(by.model('job.minExp1')).sendKeys('Be cool');
  element(by.model('job.prefExp1')).sendKeys('Be ice cold');
  element(by.model('job.responsibilities')).sendKeys('CEO');
  element(by.model('job.salary')).sendKeys('Hunnid stax');
  element(by.model('submitNewJob')).submit();
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

var signout = function() {
    element(by.model('openDropdown')).click();
    element(by.model('signoutBtn')).click();
}
browser.get('http://localhost:3000/');

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

describe('Sending message to admin', function(){
  it('Navigate to Contact Us page and send message', function(){
    addContact();
  });
});


describe('Sign in as admin and add a bunch of stuff', function(){
  it('Add Job', function() {
    loginAsAdmin();
    addJob();
    signout();
  });
});
