'use strict';
browser.driver.manage().window().maximize();
browser.get('http://localhost:3000/');

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
  element(by.model('newUserDone')).click();
};

var addJob = function() {
  element(by.model('openDropdown')).click();
  element(by.model('manageJob')).click();
  element(by.model('addJob')).click();
  element(by.model('title')).sendKeys('Protractor');
  element(by.model('description')).sendKeys('is doing this');
  element(by.model('full')).click();
  element(by.model('closing')).sendKeys('Yesterday');
  element(by.model('minExp1')).sendKeys('Be cool');
  element(by.model('prefExp1')).sendKeys('Be ice cold');
  element(by.model('responsibilities')).sendKeys('CEO');
  element(by.model('salary')).sendKeys('Hunnid stax');
  element(by.model('submitNewJob')).submit();
};

var addReferral = function() {
  element(by.model('openDropdown')).click();
  element(by.model('manageRef')).click();
  element(by.model('addRef')).click();
  element(by.model('backFromRef')).click();
};

var viewMessages = function() {
  element(by.model('openDropdown')).click();
  element(by.model('viewMess')).click();
  element(by.model('home')).click();
};

var signout = function() {
    element(by.model('openDropdown')).click();
    element(by.model('signoutBtn')).click();
};


describe('Sign in as admin navigate various admin views', function(){
    it('Login as admin and navigate to add job page', function() {
      loginAsAdmin();
      addJob();
    });
    it('View manage user views', function() {
      addUser();
    });
    it('View manage Referral views', function() {
      addReferral();
    });
    it('View messages', function() {
      viewMessages();
      signout();
    });
});
