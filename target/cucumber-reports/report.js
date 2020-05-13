$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFiles/pages.feature");
formatter.feature({
  "line": 2,
  "name": "verify User Is Able to Navigate to All pages",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@category"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "user should be able to Navigate to all link in home page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click On \u003clink\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "should be able to see \u003cPage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;",
  "rows": [
    {
      "cells": [
        "link",
        "Page"
      ],
      "line": 10,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;1"
    },
    {
      "cells": [
        "HOME",
        "Home   AML Analytics"
      ],
      "line": 11,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;2"
    },
    {
      "cells": [
        "TEAM",
        "Team   AML Analytics"
      ],
      "line": 12,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;3"
    },
    {
      "cells": [
        "CONTACT",
        "Contact   AML Analytics"
      ],
      "line": 13,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5598719264,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user should be able to Navigate to all link in home page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click On HOME",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "should be able to see Home   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 79714140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HOME",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 2158438689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home   AML Analytics",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 16164865,
  "status": "passed"
});
formatter.after({
  "duration": 619874415,
  "status": "passed"
});
formatter.before({
  "duration": 5781109101,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "user should be able to Navigate to all link in home page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click On TEAM",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "should be able to see Team   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 33785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TEAM",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 408778353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Team   AML Analytics",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 4627636,
  "status": "passed"
});
formatter.after({
  "duration": 595777864,
  "status": "passed"
});
formatter.before({
  "duration": 4725401706,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user should be able to Navigate to all link in home page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-home-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@Homepage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click On CONTACT",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "should be able to see Contact   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 86386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CONTACT",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userClickOnLink(String)"
});
formatter.result({
  "duration": 788704223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact   AML Analytics",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleToSeeTitle(String)"
});
formatter.result({
  "duration": 7098616,
  "status": "passed"
});
formatter.after({
  "duration": 640332492,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to \u003cpagelink\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see \u003cservicesSubPage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;",
  "rows": [
    {
      "cells": [
        "pagelink",
        "servicesSubPage"
      ],
      "line": 22,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;1"
    },
    {
      "cells": [
        "Analyser Online",
        "Analyser Online   AML Analytics"
      ],
      "line": 23,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;2"
    },
    {
      "cells": [
        "Global Benchmark",
        "Global Benchmark   AML Analytics"
      ],
      "line": 24,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;3"
    },
    {
      "cells": [
        "Sandbox",
        "Sandbox   AML Analytics"
      ],
      "line": 25,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;4"
    },
    {
      "cells": [
        "Custom Testing",
        "Custom Testing   AML Analytics"
      ],
      "line": 26,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;5"
    },
    {
      "cells": [
        "Sanctions Alert Service (SAS)",
        "Sanctions Alert Service (SAS)   AML Analytics"
      ],
      "line": 27,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;6"
    },
    {
      "cells": [
        "SANCTIONS ALERT TESTING (SAT)",
        "SANCTIONS ALERT TESTING (SAT)   AML Analytics"
      ],
      "line": 28,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;7"
    },
    {
      "cells": [
        "Transaction Monitoring Validator",
        "Transaction Monitoring Validator   AML Analytics"
      ],
      "line": 29,
      "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5080170018,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Analyser Online",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Analyser Online   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 48325,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 162488138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analyser Online",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 322925679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Analyser Online   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 9170168,
  "status": "passed"
});
formatter.after({
  "duration": 626868257,
  "status": "passed"
});
formatter.before({
  "duration": 4880032570,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Global Benchmark",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Global Benchmark   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 61155,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 148120700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Global Benchmark",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 471864050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Global Benchmark   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 5882798,
  "status": "passed"
});
formatter.after({
  "duration": 591686506,
  "status": "passed"
});
formatter.before({
  "duration": 7309157382,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Sandbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Sandbox   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 54312,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 164936453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandbox",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 401839679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandbox   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 7933396,
  "status": "passed"
});
formatter.after({
  "duration": 596497606,
  "status": "passed"
});
formatter.before({
  "duration": 4855894110,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Custom Testing",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Custom Testing   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 58588,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 154282755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Custom Testing",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 343200291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Custom Testing   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 4079385,
  "status": "passed"
});
formatter.after({
  "duration": 585494943,
  "status": "passed"
});
formatter.before({
  "duration": 4754781057,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Sanctions Alert Service (SAS)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Sanctions Alert Service (SAS)   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 76122,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 182523265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanctions Alert Service (SAS)",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 298082445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sanctions Alert Service (SAS)   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 6158634,
  "status": "passed"
});
formatter.after({
  "duration": 585108771,
  "status": "passed"
});
formatter.before({
  "duration": 5527301170,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to SANCTIONS ALERT TESTING (SAT)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see SANCTIONS ALERT TESTING (SAT)   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 84248,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 159818727,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SANCTIONS ALERT TESTING (SAT)",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 311760080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SANCTIONS ALERT TESTING (SAT)   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 6232619,
  "status": "passed"
});
formatter.after({
  "duration": 596208512,
  "status": "passed"
});
formatter.before({
  "duration": 5942629460,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "user should be able to Navigate to all link in Services page",
  "description": "",
  "id": "verify-user-is-able-to-navigate-to-all-pages;user-should-be-able-to-navigate-to-all-link-in-services-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@category"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@servicesPages"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Click on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to Transaction Monitoring Validator",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "should able to see Transaction Monitoring Validator   AML Analytics",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "duration": 91090,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnServicesPage()"
});
formatter.result({
  "duration": 164415998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Monitoring Validator",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userNavigateToPagelink(String)"
});
formatter.result({
  "duration": 269228681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Monitoring Validator   AML Analytics",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.shouldAbleToSeeServicesSubPage(String)"
});
formatter.result({
  "duration": 7935106,
  "status": "passed"
});
formatter.after({
  "duration": 614753695,
  "status": "passed"
});
});