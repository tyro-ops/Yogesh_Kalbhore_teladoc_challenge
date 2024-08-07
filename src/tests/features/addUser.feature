Feature: Add User

  Scenario: Add a user and validate the user has been added to the table
    Given I open the web application for adding a user
    When I navigate to the users page for adding a user
    And I add a new user
    Then I should see the user in the table
