@Smoke @AllPages
Feature: verify User is able to Navigate to All pages

  @Homepage
  Scenario Outline: User is able to Navigate to all Pages on Home Page
    Given User is on the Home Page
    When  User click on <link>
    Then  User is able to View <Page>
    Examples:
      | link    | Page                    |
      | HOME    | Home   AML Analytics    |
      | TEAM    | Team   AML Analytics  |
      | CONTACT | Contact   AML Analytics |

  @servicesPages
  Scenario Outline: User should able to Navigate to All Sub Pages in Services Page
    Given User is on the Home Page
    When  User Hover on Services page
    And  User navigate to <pagelink>
    Then  User is able to View <servicesSubPage>
    Examples:
      | pagelink                         | servicesSubPage                                  |
      | Analyser Online                  | Analyser Online   AML Analytics                  |
      | Global Benchmark                 | Global Benchmark   AML Analytics                 |
      | Sandbox                          | Sandbox   AML Analytics                          |
      | Custom Testing                   | Custom Testing   AML Analytics                   |
      | Sanctions Alert Service (SAS)    | Sanctions Alert Service (SAS)   AML Analytics    |
      | SANCTIONS ALERT TESTING (SAT)    | SANCTIONS ALERT TESTING (SAT)   AML Analytics    |
      | Transaction Monitoring Validator | Transaction Monitoring Validator   AML Analytics |


