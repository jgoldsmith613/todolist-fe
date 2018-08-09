module.exports = {
  'Testing important flag setting': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL + '/#/todo')
      .waitForElementVisible('body', 5000)
      .click('#clear-all')
      .setValue('input', ['set a todo', browser.Keys.ENTER])
      .assert.elementPresent('.important-flag')
      .assert.elementNotPresent('.red-flag')
      .click('.important-flag')
      .assert.elementPresent('.red-flag');
  }
};
