@smoke @category
Feature: verify User Is Able to Navigate to All pages

  @Homepage
  Scenario Outline: user should be able to Navigate to all link in home page
    Given user is on the home page
    When  User click On <link>
    Then  should be able to see <Page>
    Examples:
      | link    | Page                    |
      |HOME    | Home   AML Analytics    |
      |TEAM    | Team   AML Analytics    |
      |CONTACT | Contact   AML Analytics |

  @servicesPages
  Scenario Outline: user should be able to Navigate to all link in Services page
    Given user is on the home page
    When  User Click on Services page
    And  User navigate to <pagelink>
    Then  should able to see <servicesSubPage>
    Examples:
      | pagelink                         | servicesSubPage                                     |
      | Analyser Online                  | Analyser Online   AML Analytics                  |
      | Global Benchmark                 | Global Benchmark   AML Analytics                 |
      | Sandbox                          | Sandbox   AML Analytics                          |
      | Custom Testing                   | Custom Testing   AML Analytics                   |
      | Sanctions Alert Service (SAS)    | Sanctions Alert Service (SAS)   AML Analytics    |
      | SANCTIONS ALERT TESTING (SAT)    | SANCTIONS ALERT TESTING (SAT)   AML Analytics    |
      | Transaction Monitoring Validator | Transaction Monitoring Validator   AML Analytics |


