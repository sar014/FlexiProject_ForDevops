from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import time

# Set up WebDriver options (optional: headless mode)
chrome_options = Options()
chrome_options.add_argument("--headless")  # For running in headless mode (no UI)

# Path to ChromeDriver (Update path if needed)
service = Service('D:\chrome-win64')  # Replace with the path to your ChromeDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Test data
name = "testuser"
email = "testuser@example.com"

try:
    # Step 1: Navigate to the login page
    driver.get("http://localhost:3000")  # Adjust URL to your running React app

    # Step 2: Locate the "Name" input field and enter a value
    name_input = driver.find_element(By.NAME, "name")
    name_input.send_keys(name)

    # Step 3: Locate the "Email" input field and enter a value
    email_input = driver.find_element(By.NAME, "email")
    email_input.send_keys(email)

    # Step 4: Locate the "Log in" button and click it
    login_button = driver.find_element(By.XPATH, "//button[@type='submit']")
    login_button.click()

    # Step 5: Wait for the page to load (2 seconds)
    time.sleep(2)  # Can be replaced with WebDriverWait for a more robust wait

    # Step 6: Check for successful login by inspecting the page content
    assert "home" in driver.current_url, "Login failed or page not redirected to home"

    print("Test passed: Successfully logged in!")

except AssertionError as e:
    print(f"Test failed: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    # Step 7: Close the browser
    driver.quit()
