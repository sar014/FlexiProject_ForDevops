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

(async function testLogin() {
  try {
    // avigate to the login page
    await driver.get('http://localhost:3000'); 
    
    // Enter username and password
    await driver.findElement(By.name('username')).sendKeys('testuser'); 
    await driver.findElement(By.name('password')).sendKeys('testpassword', Key.RETURN); 

    // Wait for the success message to appear
    const successMessageElement = await driver.wait(
        until.elementLocated(By.css('.ant-message-notice-content')),
        5000 // Wait for 5 seconds
      );
  
      // Check the message content
      const successMessageText = await successMessageElement.getText();
  
      if (successMessageText.includes('Login successful')) {
        console.log('Login test passed: Success message displayed.');
      } else {
        console.log('Login test failed: Success message not found.');
      }
      
      //verify the redirection to the home page
      await driver.wait(until.urlIs('http://localhost:3000/home'), 5000);
      console.log('Redirected to home page after successful login.');
  
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      // 6. Close the browser after the test is complete
      await driver.quit();
    }
})();
