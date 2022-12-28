$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("userManagement/UserSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Search user",
  "description": "",
  "id": "title-of-your-feature;search-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@searchUser"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to Admin interface",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I write the username to search \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the user role \"\u003crole\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the user status \"\u003cuserStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I find the user \"\u003csearchedUser\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;search-user;",
  "rows": [
    {
      "cells": [
        "username",
        "role",
        "userStatus",
        "searchedUser"
      ],
      "line": 22,
      "id": "title-of-your-feature;search-user;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "Enabled",
        "Admin"
      ],
      "line": 23,
      "id": "title-of-your-feature;search-user;;2"
    },
    {
      "cells": [
        "Jordan.Mathews",
        "ESS",
        "Enabled",
        "Jordan.Mathews"
      ],
      "line": 24,
      "id": "title-of-your-feature;search-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3631270599,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte à l application orangeHTML",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je me redirige vers le compte admin \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepsDefinition.jeMeConnecteÀLApplicationOrangeHTML()"
});
formatter.result({
  "duration": 10860856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthenticationStepsDefinition.jeSaisieUsername(String)"
});
formatter.result({
  "duration": 882419000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 20
    }
  ],
  "location": "AuthenticationStepsDefinition.jeSaisiePassword(String)"
});
formatter.result({
  "duration": 424762700,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepsDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 122749900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 37
    }
  ],
  "location": "AuthenticationStepsDefinition.jeMeRedirigeVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 1633884901,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search user",
  "description": "",
  "id": "title-of-your-feature;search-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 12,
      "name": "@searchUser"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to Admin interface",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I write the username to search \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the user role \"Admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the user status \"Enabled\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I find the user \"Admin\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchUserStepsDefinition.iNavigateToAdminInterface()"
});
formatter.result({
  "duration": 7026507100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "SearchUserStepsDefinition.iWriteTheUsernameToSearchAdmin(String)"
});
formatter.result({
  "duration": 3298774699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 24
    }
  ],
  "location": "SearchUserStepsDefinition.iSelectTheUserRoleAdmin(String)"
});
formatter.result({
  "duration": 351145301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 26
    }
  ],
  "location": "SearchUserStepsDefinition.iSelectTheUserStatusEnabled(String)"
});
formatter.result({
  "duration": 313596900,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserStepsDefinition.iClickOnSearchButton()"
});
formatter.result({
  "duration": 112267300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 17
    }
  ],
  "location": "SearchUserStepsDefinition.iFindTheUserAdmin(String)"
});
formatter.result({
  "duration": 638902300,
  "status": "passed"
});
formatter.after({
  "duration": 1988508900,
  "status": "passed"
});
formatter.before({
  "duration": 2473153700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Je me connecte à l application orangeHTML",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisie Username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisie Password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je me redirige vers le compte admin \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepsDefinition.jeMeConnecteÀLApplicationOrangeHTML()"
});
formatter.result({
  "duration": 24515689800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 20
    }
  ],
  "location": "AuthenticationStepsDefinition.jeSaisieUsername(String)"
});
formatter.result({
  "duration": 896243000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 20
    }
  ],
  "location": "AuthenticationStepsDefinition.jeSaisiePassword(String)"
});
formatter.result({
  "duration": 331773501,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepsDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 176705900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 37
    }
  ],
  "location": "AuthenticationStepsDefinition.jeMeRedirigeVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 1942703499,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search user",
  "description": "",
  "id": "title-of-your-feature;search-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 12,
      "name": "@searchUser"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I navigate to Admin interface",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I write the username to search \"Jordan.Mathews\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the user role \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select the user status \"Enabled\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I find the user \"Jordan.Mathews\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchUserStepsDefinition.iNavigateToAdminInterface()"
});
formatter.result({
  "duration": 6916011100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jordan.Mathews",
      "offset": 32
    }
  ],
  "location": "SearchUserStepsDefinition.iWriteTheUsernameToSearchAdmin(String)"
});
formatter.result({
  "duration": 3297205100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 24
    }
  ],
  "location": "SearchUserStepsDefinition.iSelectTheUserRoleAdmin(String)"
});
formatter.result({
  "duration": 407131300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 26
    }
  ],
  "location": "SearchUserStepsDefinition.iSelectTheUserStatusEnabled(String)"
});
formatter.result({
  "duration": 315008300,
  "status": "passed"
});
formatter.match({
  "location": "SearchUserStepsDefinition.iClickOnSearchButton()"
});
formatter.result({
  "duration": 105255100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jordan.Mathews",
      "offset": 17
    }
  ],
  "location": "SearchUserStepsDefinition.iFindTheUserAdmin(String)"
});
formatter.result({
  "duration": 314875201,
  "status": "passed"
});
formatter.after({
  "duration": 1652894000,
  "status": "passed"
});
});