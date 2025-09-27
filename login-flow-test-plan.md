# Test Plan: Login Flow for the-internet.herokuapp.com

## Objective
Verify that a user can successfully log in using the credentials provided on the login page.

## Test Cases

### 1. Navigate to Login Page
- **Step:** Go to https://the-internet.herokuapp.com/login
- **Expected Result:** Login page loads successfully.

### 2. Verify Credentials Display
- **Step:** Check that the page displays the username and password to use.
- **Expected Result:** Username (`tomsmith`) and password (`SuperSecretPassword!`) are visible.

### 3. Submit Valid Credentials
- **Step:** Enter the displayed username and password, then click the login button.
- **Expected Result:** User is redirected to the secure area, and a success message (“You logged into a secure area!”) is shown.

### 4. Logout (Optional)
- **Step:** Click the logout button.
- **Expected Result:** User is returned to the login page.

## Negative Test Cases

### 5. Submit Invalid Credentials
- **Step:** Enter incorrect username or password and click login.
- **Expected Result:** Error message is displayed (“Your username is invalid!” or “Your password is invalid!”).
