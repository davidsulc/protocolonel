Feature: edit protocol

  In order to alter the information in an existing protocol
  As a user
  I want to be able to edit a protocol

  Background:
    Given there are the following protocols:
      | name            | body                       |
      | Prostate cancer | Lorem ipsum dolor sit amet |
    And I am on the protocol index page
    When I follow the "Edit" link for protocol "Prostate cancer"

  Scenario: updating protocol
    And I fill in "Name" with "Bone cancer"
    And I fill in "Body" with "New instructions"
    And I press "Save"
    Then I should be on the page for protocol "Bone cancer"
    And I should see "Protocol was successfully updated"
    And I should see "Bone cancer"
    And I should see "New instructions"
    But I should not see "Prostate cancer"
    And I should not see "Lorem ipsum dolor sit amet"

  @javascript
  Scenario: updating protocol in js
    And I fill in "Name" with "Bone cancer"
    And I fill in "Body" with "New instructions"
    And I press "Save"
    Then I should be on the page for protocol "Bone cancer"
    And I should see "Protocol was successfully updated"
    And I should see "Bone cancer"
    And I should see "New instructions"
    But I should not see "Prostate cancer"
    And I should not see "Lorem ipsum dolor sit amet"

  Scenario: cancel updating protocol
    And I fill in "Name" with "Wrong name"
    And I follow "Cancel"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Prostate cancer"
    But I should not see "Protocol was successfully updated"
    And I should not see "Wrong name"

  @javascript
  Scenario: cancel updating protocol in js
    And I fill in "Name" with "Wrong name"
    And I follow "Cancel"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Prostate cancer"
    But I should not see "Protocol was successfully updated"
    And I should not see "Wrong name"