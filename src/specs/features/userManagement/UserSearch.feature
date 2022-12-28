@tag
Feature: Title of your feature
  I want to use this template for my feature file

  Background: 
    Given Je me connecte à l application orangeHTML
    When Je saisie Username "Admin"
    And Je saisie Password "admin123"
    And Je clique sur le bouton login
    Then Je me redirige vers le compte admin "Dashboard"

  @searchUser
  Scenario Outline: Search user
    When I navigate to Admin interface
    And I write the username to search "<username>"
    And I select the user role "<role>"
    And I select the user status "<userStatus>"
    And I click on search button
    Then I find the user "<searchedUser>"

    Examples: 
      | username       | role  | userStatus | searchedUser   |
      | Admin          | Admin | Enabled    | Admin          |
      | Jordan.Mathews | ESS   | Enabled    | Jordan.Mathews |
