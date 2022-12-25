$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentication.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "En tant que utilisateur je souhaite m\u0027authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 3951485200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "Je me redirige vers le compte admin \"Paul Collings\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthenticationStepsDefinition.jeMeConnecteÀLApplicationOrangeHTML()"
});
formatter.result({
  "duration": 12723396800,
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
  "duration": 215804000,
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
  "duration": 305679600,
  "status": "passed"
});
formatter.match({
  "location": "AuthenticationStepsDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 4113516500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul Collings",
      "offset": 37
    }
  ],
  "location": "AuthenticationStepsDefinition.jeMeRedirigeVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 64102100,
  "status": "passed"
});
formatter.after({
  "duration": 2937272400,
  "status": "passed"
});
});