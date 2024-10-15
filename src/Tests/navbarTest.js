const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up chrome browser with headless option
const options = new chrome.Options();
options.addArguments('--headless');
options.addArguments('--disable-gpu');

// Create a WebDriver instance
const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

async function testNavbar() {
  try {
    // Navigate to your React app (localhost in this case)
    await driver.get('http://localhost:3000');

    // Wait for the navbar to be visible
    await driver.wait(until.elementLocated(By.css('.navbar-expand-lg')), 5000);

    // Check if "Gamer's World" is present in the navbar brand
    const navbarBrand = await driver.findElement(By.className('navbar-brand'));
    const brandText = await navbarBrand.getText();
    console.log(`Navbar Brand Text: ${brandText}`);
    if (brandText === "Gamer's World") {
      console.log('Brand Text is correct');
    } else {
      console.log('Brand Text is incorrect');
    }

    // Check if the "Home" link is present and clickable
    const homeLink = await driver.findElement(By.linkText('Home'));
    console.log('Home link found');
    await homeLink.click();
    await driver.wait(until.urlContains('/home'), 5000);
    console.log('Home link redirected to correct page');

    // Check if the "About" link is present and clickable
    await driver.get('http://localhost:3000');
    const aboutLink = await driver.findElement(By.linkText('About'));
    console.log('About link found');
    await aboutLink.click();
    await driver.wait(until.urlContains('/about'), 5000);
    console.log('About link redirected to correct page');

    // Check if the "Game Reviews" link is present and clickable
    await driver.get('http://localhost:3000');
    const newsLink = await driver.findElement(By.linkText('Game Reviews'));
    console.log('Game Reviews link found');
    await newsLink.click();
    await driver.wait(until.urlContains('/news'), 5000);
    console.log('Game Reviews link redirected to correct page');

    // Check if the "Game of The Year" link is present and clickable
    await driver.get('http://localhost:3000');
    const gameOfTheYearLink = await driver.findElement(By.linkText('Game of The Year'));
    console.log('Game of The Year link found');
    await gameOfTheYearLink.click();
    await driver.wait(until.urlContains('/gameoftheyear'), 5000);
    console.log('Game of The Year link redirected to correct page');
  } catch (error) {
    console.error(`Test failed: ${error}`);
  } finally {
    // Quit the WebDriver session
    await driver.quit();
  }
}

testNavbar();
