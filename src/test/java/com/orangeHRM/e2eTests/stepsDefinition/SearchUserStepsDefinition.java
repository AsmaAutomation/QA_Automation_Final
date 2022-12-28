package com.orangeHRM.e2eTests.stepsDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.pageObjects.AuthenticationPage;
import com.orangeHRM.e2eTests.pageObjects.SearchUserPage;
import com.orangeHRM.e2eTests.utiles.Setup;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchUserStepsDefinition {
	
	private SearchUserPage searchUserPage = new SearchUserPage();
	public WebDriver driver;
	
	public SearchUserStepsDefinition() {
		driver = Setup.driver;
		PageFactory.initElements(driver, SearchUserPage.class);
	}
	
	@When("^I navigate to Admin interface$")
	public void iNavigateToAdminInterface() throws Throwable {
		searchUserPage.navigateToAdminPage();
	}

	@When("^I write the username to search \"([^\"]*)\"$")
	public void iWriteTheUsernameToSearchAdmin(String username) throws Throwable {
		searchUserPage.fillUsername(username);
	}

	@When("^I select the user role \"([^\"]*)\"$")
	public void iSelectTheUserRoleAdmin(String role) throws Throwable {
		searchUserPage.selectUserRole(role);
	}

	@When("^I select the user status \"([^\"]*)\"$")
	public void iSelectTheUserStatusEnabled(String status) throws Throwable {
		searchUserPage.selectUserStatus(status);
	}

	@When("^I click on search button$")
	public void iClickOnSearchButton() throws Throwable {
		searchUserPage.searchClick();
	}

	@Then("^I find the user \"([^\"]*)\"$")
	public void iFindTheUserAdmin(String searchedUser) throws Throwable {
		String name = SearchUserPage.firstElementTable.getText();
		System.out.println("+++++++++++++++++++++++"+name);
		Assert.assertTrue(name.contains(searchedUser));
		
	}


}
