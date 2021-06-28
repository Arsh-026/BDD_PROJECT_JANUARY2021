$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Other_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login functionality using scenario outline",
  "description": "",
  "id": "validate-techfios-login-functionality-using-scenario-outline",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OtherLogin"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality-using-scenario-outline;user-should-be-able-to-login-with-the-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User will land on dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality-using-scenario-outline;user-should-be-able-to-login-with-the-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "validate-techfios-login-functionality-using-scenario-outline;user-should-be-able-to-login-with-the-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 14,
      "id": "validate-techfios-login-functionality-using-scenario-outline;user-should-be-able-to-login-with-the-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4017514600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 2699571700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality-using-scenario-outline;user-should-be-able-to-login-with-the-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@OtherLogin"
    },
    {
      "line": 7,
      "name": "@OtherScenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User will land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "LoginStepDefs.User_enters_and(String,String)"
});
formatter.result({
  "duration": 267560300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_signin_button()"
});
formatter.result({
  "duration": 1512539600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_will_land_on_dashboard_page()"
});
formatter.result({
  "duration": 421358600,
  "status": "passed"
});
formatter.after({
  "duration": 715213000,
  "status": "passed"
});
formatter.uri("features/Tf_Login.feature");
formatter.feature({
  "line": 2,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2773473100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 2514850600,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User will land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefs.user_enters_username_as(String)"
});
formatter.result({
  "duration": 90623600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefs.user_enters_password_as(String)"
});
formatter.result({
  "duration": 102300900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_clicks_signin_button()"
});
formatter.result({
  "duration": 1452658300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.user_will_land_on_dashboard_page()"
});
formatter.result({
  "duration": 403891700,
  "status": "passed"
});
formatter.after({
  "duration": 4801731500,
  "status": "passed"
});
});