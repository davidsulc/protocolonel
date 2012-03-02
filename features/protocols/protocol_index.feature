Feature: protocol index

  In order to have an overview of the protocols in the system
  As a user
  I want to see a list of protocols on the index page

  Background:
    Given there are the following protocols:
      | name            | body        |
      | Prostate cancer | Placeholder |
      | Bone cancer     | Placeholder |
    When I go to the protocol index page

  Scenario: protocols are displayed on the index page
    Then I should see "Prostate cancer"
    And I should see "Bone cancer"

  @javascript
  Scenario: protocols are displayed on the index page in js
    Then I should see "Prostate cancer"
    And I should see "Bone cancer"

  Scenario: protocols can be created from the index page
    And I follow "New Protocol"
    Then I should be on the new protocol page

  @javascript
  Scenario: protocols can be created from the index page in js
    And I follow "New Protocol"
    Then I should be on the new protocol page

  Scenario: protocols can be viewed from the index page
    And I follow the "Show" link for protocol "Prostate cancer"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Name: Prostate cancer"

  @javascript
  Scenario: protocols can be viewed from the index page in js
    And I follow the "Show" link for protocol "Prostate cancer"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Name: Prostate cancer"

  Scenario: protocols can be edited from the index page
    And I follow the "Edit" link for protocol "Prostate cancer"
    Then I should be on the edit page for protocol "Prostate cancer"
    And I should see "Editing protocol"

  @javascript
  Scenario: protocols can be edited from the index page in js
    And I follow the "Edit" link for protocol "Prostate cancer"
    Then I should be on the edit page for protocol "Prostate cancer"
    And I should see "Editing protocol"

  Scenario: protocols can be deleted from the index page
    And I follow the "Destroy" link for protocol "Prostate cancer"
    Then I should be on the protocol index page
    And I should not see "Prostate cancer"
    But I should see "Bone cancer"

  @javascript
  Scenario: protocols can be deleted from the index page in js
    And I follow the "Destroy" link for protocol "Prostate cancer" and I click "OK"
    Then I should be on the protocol index page
    And I should not see "Prostate cancer"
    But I should see "Bone cancer"
    