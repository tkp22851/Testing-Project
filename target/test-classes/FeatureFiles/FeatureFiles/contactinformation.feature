@smoke @info
Feature: verify contact information on footer in all pages

  @address
  Scenario Outline: User is able to view Contact Information on All Main Pages
    Given User is on the Home Page
    When  User Navigate to Bottom of the <pages>
    Then  User Should able to View Address on pages
    Examples:
      | pages   |
      | HOME    |
      | TEAM    |
      | CONTACT |

  @address1
  Scenario Outline: User is able to view Contact Information on All Sub Pages in Services Page
    Given User is on the Home Page
    When  User Hover on Services page
    And  User navigate to <pagelink>
    And   User Scroll Down to Bottom Of the Page
    Then  User Should able to View Address on pages
    Examples:
      | pagelink                         |
      | Analyser Online                  |
      | Global Benchmark                 |
      | Sandbox                          |
      | Custom Testing                   |
      | Sanctions Alert Service (SAS)    |
      | SANCTIONS ALERT TESTING (SAT)    |
      | Transaction Monitoring Validator |



