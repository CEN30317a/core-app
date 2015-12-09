'use strict';
browser.driver.manage().window().maximize();

var loginAsEmployee = function() {
  //login in as employee
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('hmiles23');
  element(by.model('credentials.password')).sendKeys('#Hughamiles3');
  element(by.model('submitSignIn')).click();
};

var loginAsAdmin = function() {
  //login in as employee
  element(by.model('signInBtn')).click();
  element(by.model('credentials.username')).sendKeys('admin');
  element(by.model('credentials.password')).sendKeys('AdminPassword1!');
  element(by.model('submitSignIn')).click();
};

var signOutUser = function() {
  //login in as employee
  element(by.model('openDropdown')).click();
  element(by.model('signoutBtn')).click();
};

var viewReferrals = function() {
  //goto referrals
  element(by.model('openDropdown')).click();
  element(by.model('viewRef')).click();

};

describe('employee testing', function() {
  browser.get('http://localhost:3000/');
  it('Login as employee and view referrals', function() {
      loginAsEmployee();
      viewReferrals();
      signOutUser();
  });
});
