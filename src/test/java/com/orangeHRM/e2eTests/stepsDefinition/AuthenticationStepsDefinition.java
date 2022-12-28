package com.orangeHRM.e2eTests.stepsDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.pageObjects.AuthenticationPage;
import com.orangeHRM.e2eTests.utiles.CommonMethods;
import com.orangeHRM.e2eTests.utiles.Setup;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AuthenticationStepsDefinition {
	
	public WebDriver driver;
	private AuthenticationPage authenticationPage = new AuthenticationPage();
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthenticationStepsDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, AuthenticationPage.class);
	}

	@Given("^Je me connecte à l application orangeHTML$")
	public void jeMeConnecteÀLApplicationOrangeHTML() throws Throwable {
		commonMethods.openURLWithConfigFile("url");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^Je saisie Username \"([^\"]*)\"$")
	public void jeSaisieUsername(String name) throws Throwable {
		authenticationPage.fillUsername(name);
	}

	@When("^Je saisie Password \"([^\"]*)\"$")
	public void jeSaisiePassword(String password) throws Throwable {
		authenticationPage.fillPassword(password);
	}

	@When("^Je clique sur le bouton login$")
	public void jeCliqueSurLeBoutonLogin() throws Throwable {
		authenticationPage.login();
	}

	@Then("^Je me redirige vers le compte admin \"([^\"]*)\"$")
	public void jeMeRedirigeVersLeCompteAdmin(String message) throws Throwable {
		String textMsg = AuthenticationPage.userConnected.getText();
		System.out.println("**********************************"+textMsg);
		Assert.assertTrue(textMsg.contains(message));
	}


}
