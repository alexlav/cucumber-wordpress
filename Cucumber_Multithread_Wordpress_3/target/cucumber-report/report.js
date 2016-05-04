$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: alex"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "",
  "description": "As a user with admin credentials\r\nI want to be able to create new users and validate in database",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "login in application",
  "description": "",
  "id": ";login-in-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on the Wordpress Loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I should see Loginpage title",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I authenticate as user \u003cusername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I authenticate with password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I sign up",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see Homepage title",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I can add user",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see add new userpage",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I create new user",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify and validate created  user",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can select created user",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I delete created user",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I validate deleted user",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": ";login-in-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 41,
      "id": ";login-in-application;;1"
    },
    {
      "cells": [
        "administrator",
        "administrator"
      ],
      "line": 42,
      "id": ";login-in-application;;2"
    },
    {
      "cells": [
        "user1",
        "password1"
      ],
      "line": 43,
      "id": ";login-in-application;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7520821117,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "login in application",
  "description": "",
  "id": ";login-in-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on the Wordpress Loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I should see Loginpage title",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I authenticate as user administrator",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I authenticate with password administrator",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I sign up",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see Homepage title",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I can add user",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see add new userpage",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I create new user",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify and validate created  user",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can select created user",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I delete created user",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I validate deleted user",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.I_am_on_thé_Wordpress_loginpage()"
});
formatter.result({
  "duration": 1822377837,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_see_loginpage_titile()"
});
formatter.result({
  "duration": 30957474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "administrator",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_authenticate_as_user(String)"
});
formatter.result({
  "duration": 222838667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "administrator",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.I_authenticate_with_password(String)"
});
formatter.result({
  "duration": 184190369,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_sign_up()"
});
formatter.result({
  "duration": 6756410134,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_see_homepage_titile()"
});
formatter.result({
  "duration": 23063985,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_can_add_user()"
});
formatter.result({
  "duration": 699676884,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_see_addnewuserpage()"
});
formatter.result({
  "duration": 1203138582,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_can_create_new_user()"
});
formatter.result({
  "duration": 4143935543,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_verify_and_validate_created_user()"
});
formatter.result({
  "duration": 1394172794,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_can_select_created_user()"
});
formatter.result({
  "duration": 813379160,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_delete_created_user()"
});
formatter.result({
  "duration": 1905204834,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_validate_deleted_user()"
});
formatter.result({
  "duration": 25900496,
  "status": "passed"
});
formatter.after({
  "duration": 141562495,
  "status": "passed"
});
formatter.before({
  "duration": 9029901371,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "login in application",
  "description": "",
  "id": ";login-in-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on the Wordpress Loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I should see Loginpage title",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I authenticate as user user1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I authenticate with password password1",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I sign up",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see Homepage title",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I can add user",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see add new userpage",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I create new user",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I verify and validate created  user",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can select created user",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I delete created user",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I validate deleted user",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.I_am_on_thé_Wordpress_loginpage()"
});
formatter.result({
  "duration": 956276830,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_see_loginpage_titile()"
});
formatter.result({
  "duration": 30557262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_authenticate_as_user(String)"
});
formatter.result({
  "duration": 185883153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.I_authenticate_with_password(String)"
});
formatter.result({
  "duration": 181846776,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_sign_up()"
});
formatter.result({
  "duration": 1722160349,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_see_homepage_titile()"
});
formatter.result({
  "duration": 22298437,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_can_add_user()"
});
formatter.result({
  "duration": 878815387,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_should_see_addnewuserpage()"
});
formatter.result({
  "duration": 1135502079,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_can_create_new_user()"
});
formatter.result({
  "duration": 2733123586,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_verify_and_validate_created_user()"
});
formatter.result({
  "duration": 870491827,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_can_select_created_user()"
});
formatter.result({
  "duration": 1145591145,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_delete_created_user()"
});
formatter.result({
  "duration": 1664230500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.I_validate_deleted_user()"
});
formatter.result({
  "duration": 22264780,
  "status": "passed"
});
formatter.after({
  "duration": 328940525,
  "status": "passed"
});
});