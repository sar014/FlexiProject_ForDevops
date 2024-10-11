const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome browser in headless mode
const options = new chrome.Options();
// options.addArguments('--headless');
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
    await driver.get('http://localhost:3000/'); 

    // Wait until the username field is present
    await driver.wait(until.elementLocated(By.name('username')), 5000);

    // Fill in the username and password fields for login
    await driver.findElement(By.name('username')).sendKeys('testuser'); 
    await driver.findElement(By.name('password')).sendKeys('testpassword', Key.RETURN);

    // Wait for the login success message
    const loginSuccessMessageElement = await driver.wait(
      until.elementLocated(By.css('.ant-message-notice-content')),
      20000 // Wait for 20 seconds
    );

    // Check the login success message content
    const loginSuccessMessageText = await loginSuccessMessageElement.getText();
    if (!loginSuccessMessageText.includes('Login successful')) {
      return; // Stop execution if login failed
    }

    // Wait for the success message to disappear
    await driver.wait(until.stalenessOf(loginSuccessMessageElement), 5000);

    // Verify the redirection to the home page after login
    await driver.wait(until.urlIs('http://localhost:3000/home'), 5000);

    // ------------- Navbar Tests -------------
    // Now proceed to test the navbar
    await driver.wait(until.elementLocated(By.css('.navbar-expand-lg')), 5000);

    // Check if "Gamer's World" is present in the navbar brand
    const navbarBrand = await driver.findElement(By.className('navbar-brand'));
    const brandText = await navbarBrand.getText();

    // Check if the "Home" link is present and clickable
    const homeLink = await driver.findElement(By.linkText('Home'));
    await homeLink.click();
    await driver.wait(until.urlContains('/home'), 5000);

    // Check if the "About" link is present and clickable
    const aboutLink = await driver.findElement(By.linkText('About'));
    await aboutLink.click();
    await driver.wait(until.urlContains('/about'), 5000);

    // Check if the "Game Reviews" link is present and clickable
    const newsLink = await driver.findElement(By.linkText('Game Reviews'));
    await newsLink.click();
    await driver.wait(until.urlContains('/news'), 5000);

    // Check if the "Game of The Year" link is present and clickable
    const gameOfTheYearLink = await driver.findElement(By.linkText('Game of The Year'));
    await gameOfTheYearLink.click();
    await driver.wait(until.urlContains('/gameoftheyear'), 5000);

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Close the browser after the tests are complete
    await driver.quit();
  }
})();
