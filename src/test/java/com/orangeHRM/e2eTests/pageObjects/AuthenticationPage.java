package com.orangeHRM.e2eTests.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthenticationPage {
	
	/*	Locators	*/
	
	final static String USERNAME_XPATH = "//input[@name='username']";
	final static String PASSWORD_XPATH = "//input[@name='password']";
	final static String LOGIN_BTN_XPATH = "//button[@type='submit']";
	final static String ADMIN_USER_XPATH = "//*[@id=\"app\"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p";
	
	/*	WebElements	*/
	@FindBy(how = How.XPATH, using = USERNAME_XPATH)
	public static WebElement username;
	@FindBy(how = How.XPATH, using = PASSWORD_XPATH)
	public static WebElement password;
	@FindBy(how = How.XPATH, using = LOGIN_BTN_XPATH)
	public static WebElement submitBtn;
	@FindBy(how = How.XPATH, using = ADMIN_USER_XPATH)
	public static WebElement userConnected;
	
	/*	Methods	*/
	
	public void fillUsername(String name) {
		username.clear();
		username.sendKeys(name);
	}
	
	public void fillPassword(String pwd) {
		password.clear();
		password.sendKeys(pwd);
	}
	
	public void login() {
		submitBtn.click();
	}	

}
