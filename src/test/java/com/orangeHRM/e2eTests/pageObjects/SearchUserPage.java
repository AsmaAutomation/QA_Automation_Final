package com.orangeHRM.e2eTests.pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.orangeHRM.e2eTests.utiles.Setup;

public class SearchUserPage {
	public WebDriver driver;
	/*	Locators	*/
	final static String ADMIN_PAGE_XPATH = "//*[@id=\"app\"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span";
	final static String USERNAME_FIELD_XPATH = "//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input";
	final static String USER_ROLE_FIELD_XPATH = "//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]";
	final static String USER_ROLE_LIST_XPATH = "//div[@role='option']";
	final static String STATUS_FIELD_XPATH = "//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div/div[1]";
	final static String STATUS_LIST_XPATH = "//div[@role='option']";
	final static String SEARCH_BTN = "//button[@type='submit']";
	final static String FIRST_ELEMENT_TABLE = "//div[@class='oxd-table-card']/div/div[2]/div";
	
	/*	WebElements	*/
	@FindBy(how = How.XPATH, using = ADMIN_PAGE_XPATH)
	public static WebElement  adminPage;
	@FindBy(how = How.XPATH, using = USERNAME_FIELD_XPATH)
	public static WebElement  usernameField;
	@FindBy(how = How.XPATH, using = USER_ROLE_FIELD_XPATH)
	public static WebElement  userRoleField;
	@FindBy(how = How.XPATH, using = USER_ROLE_LIST_XPATH)
	public static List<WebElement>  userRoleList;
	@FindBy(how = How.XPATH, using = STATUS_FIELD_XPATH)
	public static WebElement  statusField;
	@FindBy(how = How.XPATH, using = STATUS_LIST_XPATH)
	public static List<WebElement>  userStatusList;
	@FindBy(how = How.XPATH, using = SEARCH_BTN)
	public static WebElement  searchBtn;
	@FindBy(how = How.XPATH, using = FIRST_ELEMENT_TABLE)
	public static WebElement  firstElementTable;
	
	public void navigateToAdminPage() throws InterruptedException {
		Thread.sleep(3000);
		adminPage.click();
		Thread.sleep(3000);
	}
	
	public void fillUsername(String name) throws InterruptedException {
		usernameField.clear();
		usernameField.sendKeys(name);
		Thread.sleep(3000);
	}
	
	public void selectUserRole(String role) throws InterruptedException {
		userRoleField.click();
		driver = Setup.driver;
		for(WebElement i : userRoleList) {
			Actions actions = new Actions(driver);
			WebElement mouseHover = i;
			actions.moveToElement(mouseHover).perform();
			if(mouseHover.getText().equals(role)) {
				mouseHover.click();
				break;
			}	
		}
	}
	
	public void selectUserStatus(String status) throws InterruptedException {
		statusField.click();
		driver = Setup.driver;
		for(WebElement i : userStatusList) {
			Actions actions = new Actions(driver);
			WebElement mouseHover = i;
			actions.moveToElement(mouseHover).perform();
			if(mouseHover.getText().equals(status)) {
				mouseHover.click();
				break;
			}	
		}
	}
	
	public void searchClick() throws InterruptedException {
		searchBtn.click();
	}
}
