Feature: view protocol

  In order to see the protocol
  As a user
  I want to be able to view the protocol

  Scenario: viewing a protocol
    Given there are the following protocols:
      | name            | body                       |
      | Prostate cancer | Lorem ipsum dolor sit amet |
    And I am on the protocol index page
    When I follow the "Show" link for protocol "Prostate cancer"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Prostate cancer"
    And I should see "Lorem ipsum dolor sit amet"

  @javascript
  Scenario: viewing a protocol in js
    Given there are the following protocols:
      | name            | body                       |
      | Prostate cancer | Lorem ipsum dolor sit amet |
    And I am on the protocol index page
    When I follow the "Show" link for protocol "Prostate cancer"
    Then I should be on the page for protocol "Prostate cancer"
    And I should see "Prostate cancer"
    And I should see "Lorem ipsum dolor sit amet"