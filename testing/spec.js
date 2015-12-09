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


describe('SignIn Users', function() {
  it('Open Signin box and Login as employee', function() {
    browser.get('http://localhost:3000/');

    loginAsEmployee();

    browser.get('http://localhost:3000/referrals');

    //expect(errorMessage).toMatch('');

    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // element(by.css('[value="add"]')).click();
    //
    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});
