Feature:Login functionality

Scenario: Successful login with valid credential
Given I navigated to login page with valid URL
When I enter valid credential
Then I should see the Dashboard