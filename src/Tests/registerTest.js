const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome browser in headless mode
const options = new chrome.Options();
options.addArguments('--headless');
options.addArguments('--disable-gpu');

// Create a new WebDriver instance
const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

(async function runTests() {
  try {
    // Navigate to the registration page
    await driver.get('http://localhost:3000/register'); // Adjust URL if necessary

    // Increase wait time to 10 seconds (10000 ms)
    const timeout = 5000;

    // Wait until the username input field is present (try different selectors if needed)
    await driver.wait(until.elementLocated(By.css('input[name="username"]')), timeout);

    // Fill in the username and password fields for registration
    await driver.findElement(By.css('input[name="username"]')).sendKeys('newuser1');
    await driver.findElement(By.css('input[name="password"]')).sendKeys('newpassword', Key.RETURN);

    // Wait for the registration success message
    const regSuccessMessageElement = await driver.wait(
      until.elementLocated(By.css('.ant-message-notice-content')),
      timeout
    );

    // Check the success message content
    const regSuccessMessageText = await regSuccessMessageElement.getText();
    if (regSuccessMessageText.includes('Registration successful!')) {
      console.log('Registration test passed: Success message displayed.');
    } else {
      console.log('Registration test failed: Success message not found.');
      return; // Stop execution if registration failed
    }

    // Wait for the success message to disappear and check redirection
    await driver.wait(until.stalenessOf(regSuccessMessageElement), timeout);
    await driver.wait(until.urlIs('http://localhost:3000/'), timeout); // Adjust if redirecting to another page

    console.log('Redirected to login page after successful registration.');

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Close the browser after the tests are complete
    await driver.quit();
  }
})();
