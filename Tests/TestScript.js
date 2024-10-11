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
    // ------------- Login Test -------------
    // Navigate to the login page
    await driver.get('http://localhost:3000/'); // Adjust the URL based on your setup

    // Wait until the username field is present
    await driver.wait(until.elementLocated(By.name('username')), 5000);

    // Fill in the username and password fields for login
    await driver.findElement(By.name('username')).sendKeys('testuser'); // Replace with a valid username
    await driver.findElement(By.name('password')).sendKeys('testpassword', Key.RETURN);

    // Wait for the login success message
    const loginSuccessMessageElement = await driver.wait(
      until.elementLocated(By.css('.ant-message-notice-content')),
      5000 // Wait for 5 seconds
    );

    // Check the login success message content
    const loginSuccessMessageText = await loginSuccessMessageElement.getText();
    if (loginSuccessMessageText.includes('Login successful')) {
      console.log('Login test passed: Success message displayed.');
    } else {
      console.log('Login test failed: Success message not found.');
      return; // Stop execution if login failed
    }

    // Wait for the success message to disappear
    await driver.wait(until.stalenessOf(loginSuccessMessageElement), 5000);
    console.log('Success message disappeared.');

    // Verify the redirection to the home page after login
    await driver.wait(until.urlIs('http://localhost:3000/home'), 5000);
    console.log('Redirected to home page after successful login.');

    // ------------- Navbar Tests -------------
    // Now proceed to test the navbar
    await driver.wait(until.elementLocated(By.css('.navbar-expand-lg')), 5000);

    // Check if "Gamer's World" is present in the navbar brand
    const navbarBrand = await driver.findElement(By.className('navbar-brand'));
    const brandText = await navbarBrand.getText();
    console.log(`Navbar Brand Text: ${brandText}`);
    if (brandText === "Gamer's World") {
      console.log('Brand Text is correct.');
    } else {
      console.log('Brand Text is incorrect.');
    }

    // Check if the "Home" link is present and clickable
    const homeLink = await driver.findElement(By.linkText('Home'));
    await homeLink.click();
    await driver.wait(until.urlContains('/home'), 5000);
    console.log('Home link redirected to correct page.');

    // Check if the "About" link is present and clickable
    const aboutLink = await driver.findElement(By.linkText('About'));
    await aboutLink.click();
    await driver.wait(until.urlContains('/about'), 5000);
    console.log('About link redirected to correct page.');

    // Check if the "Game Reviews" link is present and clickable
    const newsLink = await driver.findElement(By.linkText('Game Reviews'));
    await newsLink.click();
    await driver.wait(until.urlContains('/news'), 5000);
    console.log('Game Reviews link redirected to correct page.');

    // Check if the "Game of The Year" link is present and clickable
    const gameOfTheYearLink = await driver.findElement(By.linkText('Game of The Year'));
    await gameOfTheYearLink.click();
    await driver.wait(until.urlContains('/gameoftheyear'), 5000);
    console.log('Game of The Year link redirected to correct page.');

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Close the browser after the tests are complete
    await driver.quit();
  }
})();
