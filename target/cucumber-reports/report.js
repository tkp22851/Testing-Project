$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFiles/FeatureFiles/contactinformation.feature");
formatter.feature({
  "line": 2,
  "name": "verify contact information on footer in all pages",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    }
  ]
});
formatter.scenarioOutline({
  "line": 16,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User navigate to \u003cpagelink\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;",
  "rows": [
    {
      "cells": [
        "pagelink"
      ],
      "line": 23,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;1"
    },
    {
      "cells": [
        "Analyser Online"
      ],
      "line": 24,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;2"
    },
    {
      "cells": [
        "Global Benchmark"
      ],
      "line": 25,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;3"
    },
    {
      "cells": [
        "Sandbox"
      ],
      "line": 26,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;4"
    },
    {
      "cells": [
        "Custom Testing"
      ],
      "line": 27,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;5"
    },
    {
      "cells": [
        "Sanctions Alert Service (SAS)"
      ],
      "line": 28,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;6"
    },
    {
      "cells": [
        "SANCTIONS ALERT TESTING (SAT)"
      ],
      "line": 29,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;7"
    },
    {
      "cells": [
        "Transaction Monitoring Validator"
      ],
      "line": 30,
      "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7280625640,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 101023674,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 140320304,
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
  "duration": 348590434,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 9539233,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 42662689,
  "status": "passed"
});
formatter.after({
  "duration": 830772902,
  "status": "passed"
});
formatter.before({
  "duration": 5599452262,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 5845165,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 133547986,
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
  "duration": 421984713,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 8014222,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 31007427,
  "status": "passed"
});
formatter.after({
  "duration": 586334853,
  "status": "passed"
});
formatter.before({
  "duration": 5977434021,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 6471677,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 152363019,
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
  "duration": 248339102,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 8122846,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 35851883,
  "status": "passed"
});
formatter.after({
  "duration": 604244972,
  "status": "passed"
});
formatter.before({
  "duration": 6012605935,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 4999267,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 153636143,
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
  "duration": 284755059,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 9341230,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 30456610,
  "status": "passed"
});
formatter.after({
  "duration": 15235949987,
  "status": "passed"
});
formatter.before({
  "duration": 4847500987,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 5595415,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 132323187,
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
  "duration": 257893303,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 8083502,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 31537290,
  "status": "passed"
});
formatter.after({
  "duration": 582427385,
  "status": "passed"
});
formatter.before({
  "duration": 6063290971,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 11265242,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 151699729,
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
  "duration": 263838111,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 9035030,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 28718200,
  "status": "passed"
});
formatter.after({
  "duration": 610111947,
  "status": "passed"
});
formatter.before({
  "duration": 5039479666,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User is able to view Contact Information on All Sub Pages in Services Page",
  "description": "",
  "id": "verify-contact-information-on-footer-in-all-pages;user-is-able-to-view-contact-information-on-all-sub-pages-in-services-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@info"
    },
    {
      "line": 15,
      "name": "@address1"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User Hover on Services page",
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
  "name": "User Scroll Down to Bottom Of the Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Should able to View Address on pages",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.UserIsOnTheHomePage()"
});
formatter.result({
  "duration": 8379010,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userHoverOnServicesPage()"
});
formatter.result({
  "duration": 146920276,
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
  "duration": 292587101,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollDownToBottomOfThePage()"
});
formatter.result({
  "duration": 10050279,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToViewAddressOnPages()"
});
formatter.result({
  "duration": 33059735,
  "status": "passed"
});
formatter.after({
  "duration": 612584638,
  "status": "passed"
});
});