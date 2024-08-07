Feature: Delete User

  Scenario: Delete the user "novak" from the table and validate the user has been deleted
    Given I open the web application for deleting a user
    When I navigate to the users page for deleting a user
    And I delete the user "novak"
    Then I should not see the user "novak" in the table
