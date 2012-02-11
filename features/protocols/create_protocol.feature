Feature: create protocol

  In order to add protocols to the system
  As a user
  I want to be able to create a new protocol

  Background:
    Given I am on the protocol index page
    When I follow "New Protocol"

  Scenario: creating a protocol
    When I fill in "Name" with "Prostate cancer"
    And I fill in "Body" with "Protocol for prostate cancer"
    And I press "Save"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Protocol was successfully created"
    And I should see "Prostate cancer"
    And I should see "Protocol for prostate cancer"

  Scenario: cancel creating a protocol
    When I fill in "Name" with "Prostate cancer"
    And I fill in "Body" with "Protocol for prostate cancer"
    And I follow "Back"
    Then I should be on the protocol index page
    And I should not see "Protocol was successfully created"
    And I should not see "Prostate cancer"
    And I should not see "Protocol for prostate cancer"